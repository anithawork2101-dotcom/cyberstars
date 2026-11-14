When a game crashes, it sometimes shows a message: "Error 404" or "Out of memory". It's annoying, but useful: it tells the person who fixes it where to look. JavaScript does the same. When a line goes wrong, it writes an **error** in the console, in red.

## Reading an error

Say a script has this line:

```js
consol.log("Members: 12");
```

The console shows something like:

```text
ReferenceError: consol is not defined   games.js:1
```

There are three things to read:

- **the kind** of error: `ReferenceError` means "I don't know this name". JavaScript doesn't know the word `consol`;
- **the message**: `consol is not defined`, the word that stopped it;
- **where**: `games.js:1` means the file `games.js`, line 1.

So you go to line 1 of `games.js`, look for `consol`, and change it to `console`.

## The script stops there

When a line has an error, the script **stops** at that line. No line after it runs at all. So one mistake near the top can make a whole script seem dead. Fix the first error first, then look again: often the next one shows then.

## Two kinds you will see a lot

- `ReferenceError: ... is not defined`: a name written wrong, or a capital letter that shouldn't be there. Check how you wrote it.
- `SyntaxError`: the browser can't even read the line. Often a quote or a bracket is missing. With a `SyntaxError`, **no** line of the file runs, not even the lines above it.

## Break it on purpose

Write a line with no closing quote:

```js
console.log("Members: 12);
```

The console shows a `SyntaxError`, and nothing from that file shows. Add the quote back, and everything runs again.

---

## Mission: The system check

**What you will see**: once `check.js` is fixed, the console shows its lines, and the last one is:

```text
All systems go
```

Your site has a new file, `check.js`: the station's system check. Someone wrote it too fast, and it has three mistakes.

- `crew.html` loads `check.js` too, with its own `<script>` tag, before the one for `crew.js`.
- The console shows `All systems go`.
- The console shows no errors.

Fix the first red line, then look again. The next one may only show after that.
