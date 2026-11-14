You collect football stickers. You get a pile every week, with many you already have. In your album, each player goes in once: a second copy of the same player doesn't make the album bigger. To know how many different players you have, you count the album, not the pile. JavaScript has a collection that works like the album: a `Set`.

## `new Set()`

A **Set** holds values, each one only once. You make an empty one with `new Set()`, and put values in with `add`:

```js
const album = new Set();

album.add("Mia");
album.add("Leo");
album.add("Mia");

console.log(album.size);
```

```text
2
```

The second "Mia" changed nothing: she was already in the set. `size` is how many different values it holds.

## What a Set knows

- `has(value)` answers `true` or `false`: is it in the set?
- `delete(value)` takes it out.
- A `for...of` goes through its values, in the order they were first added.

```js
for (const name of album) {
  console.log(name);
}
```

```text
Mia
Leo
```

## From a set to a line

A Set has no `join`. To make a line of it, go through it, and push each value into an array:

```js
const names = [];
for (const name of album) {
  names.push(name);
}
console.log(names.join(" & "));
```

```text
Mia & Leo
```

## Removing the copies in an array

Give `new Set()` an array, and you get its values, each one once:

```js
const visits = ["home", "crew", "home", "wiki", "crew"];
const pages = new Set(visits);
console.log(pages.size);
```

```text
3
```

Five visits, but only three different pages.

## Break it on purpose

Ask a set for its `length`, like with an array: `album.length` is `undefined`. A Set has `size`, like a Map. Then put the set in a text: `` `${album}` `` gives `[object Set]`. Go through it first, then join.

---

## Mission: Themes tried

**What you will see**: open the page, and click Dark, Dark, Light, Dark. Under the picks, the page says:

```text
Themes tried: 2 (dark, light)
```

Besides the counts, the crew wants a shorter answer: how many **different** themes each visitor tries.

- Under `#picks`, add a paragraph with the id `tried`.
- It says `Themes tried: 0` when the page opens.
- The `settings` object keeps each theme chosen during the visit in a Set, each one only once.
- After each choice, `#tried` says `Themes tried: `, then how many different themes were chosen.
- Then, in brackets, it lists each of them once, in the order they were first chosen, with a comma and a space between two.
