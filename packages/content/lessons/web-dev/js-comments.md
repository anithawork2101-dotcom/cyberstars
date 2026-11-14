You already know comments from HTML and CSS: notes for people, which the browser skips. JavaScript has them too, in two shapes.

## `//` for one line

Everything after `//`, to the end of the line, is a comment:

```js
// Say hello when the page opens
console.log("Game club loaded");

console.log(12); // how many members there are
```

The console shows `Game club loaded` and `12`. It skips the notes.

## `/* */` for several lines

For a longer note, start with `/*` and end with `*/`, like in CSS:

```js
/*
  Game club script.
  Written by Sam, March.
*/
console.log("Game club loaded");
```

## Turning a line off

Like in HTML, a comment can turn a line off without deleting it. Put `//` before it:

```js
// alert("Welcome to the club!");
console.log("Game club loaded");
```

The message box doesn't show any more, but the line is still there, ready to come back. Delete the `//`, and it runs again. That's very useful while you try things.

## Break it on purpose

Turn off the wrong part, or too much:

```js
/*
alert("Welcome to the club!");
console.log("Game club loaded");
```

Without the closing `*/`, everything after `/*` is a comment, to the end of the file, and nothing runs. The console may even show a `SyntaxError`. Every `/*` needs its `*/`.

---

## Mission: No more boxes

**What you will see**: when `crew.html` opens, no message box shows. The console still shows `Crew directory loaded`, `4`, and the system check's lines.

The crew is tired of clicking OK every time the directory opens. Turn off the message box, but keep it in `crew.js`, in case you want it back.

- No message box opens any more.
- `crew.js` still writes `Crew directory loaded` in the console.
