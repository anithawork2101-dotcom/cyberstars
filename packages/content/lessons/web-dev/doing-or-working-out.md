In a kitchen, one person may work out how many eggs a cake needs for 12 guests, and another person bakes it. Working something out and doing something are two different jobs. Functions are clearer when each one does one of these jobs.

## Two kinds of function

A function that **does** something changes the page, or writes to the console, and returns nothing:

```js
function showTotal(total) {
  document.querySelector("#total").textContent = `Total: ${total}`;
}
```

A function that **works something out** returns an answer, and changes nothing:

```js
function addUp(prices) {
  let total = 0;
  for (const price of prices) {
    total = total + price;
  }
  return total;
}
```

Then they work together:

```js
showTotal(addUp([2, 3, 1.5]));
```

`addUp` works out 6.5, and `showTotal` puts it on the page.

## Why keep them apart?

Because you can use an answer in more than one place. `addUp` can give its answer to the page **and** to the console, or to another sum, like an average:

```js
const prices = [2, 3, 1.5];
console.log("Average:", addUp(prices) / prices.length);
```

If `addUp` also wrote on the page, using it here would change the page every time. A function that only works things out can be called anywhere, as often as you like, with no surprises.

A good test: can you say what the function does without "and"? "Adds up the prices" is one job. "Adds up the prices and shows them" is two jobs.

## Break it on purpose

Make `addUp` show the total itself, and return nothing. Now `addUp(prices) / prices.length` is `undefined / 3`: `NaN`. The function showed the total, but it had no answer to give back.

---

## Mission: An average

**What you will see**: the page shows `Crew hours this week: 61` as before. The console shows this line, with its other lines:

```text
Average hours per crew member: 15.25
```

The crew's hours are added up for `#hours-total`. Now the console also wants the average for each crew member, from the same sum.

- A function returns the sum of the hours on the cards.
- That function changes nothing on the page.
- `#hours-total` shows that sum, as before.
- The console shows `Average hours per crew member: `, then the sum divided by the number of cards.
