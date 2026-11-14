Take a photo of a crowd. Then three more people walk in. Count the people in the photo: it's still the old number. The photo shows the moment you took it. A list from `querySelectorAll` is like that photo.

## A list is a snapshot

```js
const games = document.querySelectorAll("#games li");
console.log(games.length);

const item = document.createElement("li");
item.textContent = "darts";
document.querySelector("#games").append(item);

console.log(games.length);
```

```text
2
2
```

The page now has 3 games, but `games` still says 2. `querySelectorAll` looked at the page **once**, when that line ran, and kept what it found then. Elements you add or remove later don't change it. A list like that is a **snapshot**: a quick photo of one moment.

## Look again when you need it

To get the number **now**, ask again, at the moment you need it:

```js
console.log(document.querySelectorAll("#games li").length);
```

```text
3
```

That's why a function that shows a count should do its own `querySelectorAll` inside it:

```js
function showCount() {
  const count = document.querySelectorAll("#games li").length;
  document.querySelector("#count").textContent = `${count} games`;
}
```

Call it after every add and every remove, and it's always right.

## Break it on purpose

Keep a list from when the page opened, and use it in your function:

```js
const games = document.querySelectorAll("#games li");
function showCount() {
  document.querySelector("#count").textContent = `${games.length} games`;
}
```

Add a game, and call `showCount()`: the number doesn't change. It counts the old snapshot. When a count doesn't change, it's usually an old list.

---

## Mission: A roster that keeps up

**What you will see**: the roster says `4 crew members on board`. Add a rookie, and it says `5 crew members on board`. Remove the last, and it says 4 again.

Your roster says how many crew members there are. But when you add or remove a rookie, it doesn't change.

- After every click on `Add a rookie`, the roster shows how many items the crew list has at that moment, then ` crew members on board`.
- After every click on `Remove the last`, it does the same.
- When the page opens, the roster is right too.
