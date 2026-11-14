Until now, your script only talks to the console. The page itself hasn't changed at all. To change the page, a script first has to **find** the part it wants to change. It's like pointing at a place on a map before you draw on it.

## The page as a tree

When the browser reads your HTML, it builds the page in its memory. Every element is inside the element that holds it, like branches on a tree. JavaScript can reach every one of them through `document`: the whole page.

## `document.querySelector`

`querySelector` finds an element with a **selector**, written exactly like in CSS:

```js
const heading = document.querySelector("h1");
const list = document.querySelector("#members");
const tip = document.querySelector(".tip");
```

- `"h1"`: the first `h1` on the page;
- `"#members"`: the element with the id `members`;
- `".tip"`: the first element with the class `tip`.

It gives you the **first** element that matches. You keep it under a name, to use it later.

Write one in the console, and the console shows which element it found:

```js
console.log(heading);
```

```text
<h1>
```

That's the element itself, not its text. You will read its text in the next lesson.

## Nothing found: `null`

When no element matches, you get `null`, which means "nothing":

```js
console.log(document.querySelector("#member"));
```

```text
null
```

There is no `#member`, only `#members`. A `null` in your console almost always means a selector that doesn't match: a typo, a missing `#` or `.`, or the wrong name.

## Break it on purpose

Forget the `#`:

```js
const list = document.querySelector("members");
```

You get `null`. Without the `#`, it looks for a tag called `<members>`, like in CSS. The rules are the same as in your style sheet.

---

## Mission: Find the parts

**What you will see**: when `crew.html` opens, the console shows these lines, with its other lines:

```text
<ul>
<h2>
```

Your crew directory's script should be able to find the parts of the page it will work with.

- In `crew.js`, the crew list is found by its id and written to the console: the console shows `<ul>`.
- The duty board's heading is found by its id and written to the console: the console shows `<h2>`.

If you see `null`, check your selector.
