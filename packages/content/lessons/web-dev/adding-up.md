At the end of a shopping trip, the person at the till adds up every item: 2 euros, plus 3, plus 1.50... The total starts at 0 and grows with each item. A loop can keep a total in the same way.

## A total that grows

```js
const prices = [2, 3, 1.5];
let total = 0;
for (const price of prices) {
  total = total + price;
}
console.log(total);
```

```text
6.5
```

It's the same idea as building a string, but with numbers:

- `let total = 0`: start at **zero**, before the loop;
- in each lap, `total = total + price`: add this item to what you have so far;
- after the loop, `total` is the sum of everything.

Lap by lap: 0 + 2 = 2, then 2 + 3 = 5, then 5 + 1.5 = 6.5.

## From the page

Numbers on the page are text. So each one goes through `Number()` before you add it:

```js
let total = 0;
for (const price of document.querySelectorAll(".price")) {
  total = total + Number(price.textContent);
}
```

## Break it on purpose

Forget the `Number()`:

```js
total = total + price.textContent;
```

With the prices 2, 3 and 1.5 on the page, the total is `"0231.5"`... a string! `0 + "2"` joins, it doesn't add. After that, everything is joined. When a total looks like a row of digits put together, a `Number()` is missing.

---

## Mission: Hours this week

**What you will see**: each card shows a line like `Hours this week: 12`. Under the cards, the page shows the total. For example:

```text
Crew hours this week: 61
```

Every crew card shows how many hours that person worked this week, and the page adds them all up.

- Every card has a paragraph that says `Hours this week: `.
- In that paragraph, the number is in a `span` with the class `worked`.
- Under the cards, a paragraph with the id `hours-total` says `Crew hours this week: ` and the sum of every card's hours.
- The sum is worked out from the cards. If a card's hours change, the total changes.
