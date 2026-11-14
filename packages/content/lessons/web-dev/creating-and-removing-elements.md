So far, your scripts change what is **in** elements: their text. But the page can also grow. A chat app adds a new bubble for every message, and a to-do app adds a new line for every task. The script makes a new element and puts it on the page.

## `createElement`: make one

```js
const item = document.createElement("li");
item.textContent = "darts";
```

`document.createElement("li")` makes a new, empty `li`, as if you had written `<li></li>`. Then you fill it like any element. But it isn't on the page yet. It's in the script's memory, waiting for a place.

## `append`: put it on the page

```js
document.querySelector("#games").append(item);
```

`append` puts the new element **inside** another one, at its **end**. Now the `#games` list has one more item, at the bottom, and the page shows it.

Put the two together on a click:

```js
let added = 0;
document.querySelector("#add").addEventListener("click", () => {
  added = added + 1;
  const item = document.createElement("li");
  item.textContent = `New game ${added}`;
  document.querySelector("#games").append(item);
});
```

Each click makes a new `li`, "New game 1", "New game 2"... and adds it at the end.

## Break it on purpose

Make the element only once, outside the click:

```js
const item = document.createElement("li");
document.querySelector("#add").addEventListener("click", () => {
  item.textContent = "New game";
  document.querySelector("#games").append(item);
});
```

Click three times: you get only **one** new item. There is only one element, so each `append` moves the same element to the end again. Every new item needs its own `createElement`.

---

## Mission: Rookies

**What you will see**: under the roster, a button says `Add a rookie`. Each click adds a new name at the end of the crew list: `Rookie 1`, then `Rookie 2`, and so on.

New crew members, called rookies, join the crew all the time. The crew directory gets a button to add them to the crew list.

- Add a button with the id `add-rookie`.
- The button says `Add a rookie`.
- Each click adds a new item at the end of the crew list, `#crew`.
- The first new item is `Rookie 1`, the second is `Rookie 2`, and so on.
