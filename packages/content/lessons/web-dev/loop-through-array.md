A loop's counter goes 0, 1, 2, 3... and an array's indexes go 0, 1, 2, 3... That's not by chance. Put them together, and a loop can visit every item of a list, one by one, whatever its length.

## A loop over an array

```js
const games = ["chess", "cards", "darts"];
for (let i = 0; i < games.length; i++) {
  console.log(games[i]);
}
```

```text
chess
cards
darts
```

- the counter **starts at 0**, the first index;
- it keeps going **while `i < games.length`**. With 3 games, `i` goes 0, 1, 2, and it stops before 3, which isn't an index;
- in each lap, `games[i]` is the item at that index.

Add a game to the array, and the loop visits it too, with no other change: `games.length` is now 4.

## Over elements on the page

`querySelectorAll` gives a list that works the same way:

```js
const members = document.querySelectorAll("#members li");
for (let i = 0; i < members.length; i++) {
  console.log(members[i].textContent);
}
```

You get every member's name, in their order on the page.

## Break it on purpose

Write `<=` instead of `<`:

```js
for (let i = 0; i <= games.length; i++) {
  console.log(games[i]);
}
```

```text
chess
cards
darts
undefined
```

One lap too many: `i` gets to 3, and `games[3]` is nothing. A counter that starts at 0 goes with `<`, never `<=`.

---

## Mission: Roll call in the console

**What you will see**: when `crew.html` opens, the console shows a line for each name on your crew list, with its other lines. For example:

```text
Present: Mara Vega
Present: Tomas Okafor
Present: Ines Lindqvist
Present: Kenji Arano
```

Every morning, the console calls every crew member on the list.

- For every item of the crew list, the console shows `Present: ` and that item's name.
- The names come from the page, so a new name on the list gets its line too.
