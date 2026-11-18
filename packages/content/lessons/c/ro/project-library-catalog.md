Un proiect care folosește partea de C a cursului: struct-uri, o listă înlănțuită, qsort cu o funcție de comparare, șiruri și fișiere. Vei construi catalogul bibliotecii de benzi a centrului de calcul, raftul cu manuale și rapoarte pe care operatorii le împrumută

Aici nu e cod de copiat, doar un plan. Ia-o câte o comandă pe rând și testeaz-o pe fiecare înainte de următoarea

---

**Planul**

Fiecare carte e un nod al unei liste înlănțuite

```c
struct carte {
    int id;
    char titlu[32];
    int an;
    int imprumutata;
    struct carte *urmator;
};
```

imprumutata e 1 cât timp cineva a împrumutat cartea. O să-ți trebuiască câteva funcții mici

- **gaseste**: parcurge lista și întoarce nodul cu un id, sau NULL
- **adauga**: fă un nod cu malloc și pune-l în față sau la final
- **scoate**: scoate un nod și eliberează-l, ca în lecțiile despre liste înlănțuite
- **goleste**: eliberează fiecare nod

---

LIST are nevoie de cărțile sortate, dar lista însăși poate rămâne în orice ordine. Construiește un array de pointeri la noduri, sortează acel array cu qsort și afișează din el. Funcția de comparare primește pointeri la căsuțele array-ului, iar fiecare căsuță e un `struct carte *`, deci e un pointer la pointer

```c
int dupa_an(const void *a, const void *b) {
    const struct carte *x = *(struct carte *const *)a;
    const struct carte *y = *(struct carte *const *)b;
    // compară x->an, apoi x->titlu, apoi x->id
}
```

---

SAVE și LOAD țin catalogul într-un fișier text, câte o carte pe linie, cu fprintf și fscanf din lecția despre fișiere. LOAD înlocuiește tot catalogul cu ce e în fișier: golește întâi lista

---

## Misiune: Catalogul bibliotecii

1. Citește comenzi, câte una pe linie, până se termină datele, și răspunde la ele
   - `ADD id titlu an`: adaugă o carte. Dacă id-ul e luat, afișează `Cartea id exista deja`
   - `REMOVE id`: scoate cartea. Dacă nu există o astfel de carte, afișează `Nu exista cartea id`
   - `BORROW id`: marcheaz-o ca împrumutată. Afișează `Nu exista cartea id` sau `Cartea id e deja imprumutata`
   - `RETURN id`: marcheaz-o ca adusă înapoi. Afișează `Nu exista cartea id` sau `Cartea id nu e imprumutata`
   - `LIST`: afișează fiecare carte ca `id an titlu`, cu ` (imprumutata)` după cele împrumutate, sortate după an, apoi după titlu, apoi după id. Afișează `Catalog gol` când nu e nicio carte
   - `SAVE fisier`: scrie catalogul în fișier
   - `LOAD fisier`: înlocuiește catalogul cu cel din fișier. Dacă fișierul nu poate fi deschis, afișează `Nu pot deschide ` și numele fișierului și păstrează catalogul
2. Ține cărțile într-o listă înlănțuită și sortează cu qsort pentru LIST
3. Eliberează fiecare nod înainte să se termine programul

Titlurile sunt un cuvânt de cel mult 30 de caractere. Id-urile sunt între 1 și 9999, anii între 1900 și 2099. Sunt cel mult 300 de comenzi

**Exemplu**

Intrare

```text
ADD 7 PayrollManual 1969
ADD 3 OrbitTables 1962
ADD 9 CensusReport 1969
ADD 3 Duplicate 1970
BORROW 9
BORROW 9
SAVE shelf.txt
REMOVE 7
LIST
LOAD shelf.txt
RETURN 3
LIST
```

Ieșire

```text
Cartea 3 exista deja
Cartea 9 e deja imprumutata
3 1962 OrbitTables
9 1969 CensusReport (imprumutata)
Cartea 3 nu e imprumutata
3 1962 OrbitTables
9 1969 CensusReport (imprumutata)
7 1969 PayrollManual
```

Fișierul ține minte ce cărți sunt împrumutate, deci după LOAD cartea 9 e tot împrumutată
