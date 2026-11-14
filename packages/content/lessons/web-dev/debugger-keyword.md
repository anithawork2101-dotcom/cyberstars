A bookmark sits in a book, at the page you want to come back to. Next time you open the book, it opens right there, and you don't have to look for the page again. Code can carry a bookmark of its own, for the debugger.

## `debugger`

To click a line number in Sources, you must first find the file in the list. And the mark can get lost when the preview draws the page again. Instead, you can write the breakpoint into the code:

```js
for (const pupil of pupils) {
  debugger;
  marks[pupil.name] = pupil.mark;
}
```

When DevTools is open, the code stops on `debugger`, as on a breakpoint. The Scope part, stepping and Resume work the same. When DevTools is closed, the line does nothing at all.

It's useful where a breakpoint is hard to place: inside a function that's called from many places, or in a file the page loads a moment later.

## Take it out again

A `debugger` line is for you, not for the visitors of your site. Once you've found the bug, remove it. Otherwise a visitor who opens DevTools for any reason would land in your code, stopped. Search your files for `debugger` before you're done.

## Break it on purpose

Write `debugger` and close DevTools. Nothing stops, because the line only works while DevTools is open. Then leave a `debugger` inside a loop that runs a hundred times, and open DevTools: you press Resume a hundred times. Put it before the loop instead, or inside an `if` that's true only for the turn you want, like `if (pupil.name === "Mia") { debugger; }`.

---

## Mission: Status count

**What you will see**: under the average, a line:

```text
Docked: 2, On the way: 1, Boarding: 1, Leaving: 1
```

The lesson brings a file, `status-count.js`. Its function counts how many starships have each status, but every count comes out 0. Put a `debugger` in it to find out why.

- Between `#average-crew` and the list with the id `ships`, add a paragraph with the id `status-counts`.
- Once the starships are in, it lists each status with its count, from the function of `status-count.js`, in the order the function gives them.
- Each one is the status, a colon and a space, then the count.
- A comma and a space go between two of them.
- `status-count.js` counts every starship. Find the bug with `debugger`, and fix it in that file.
- Once you're done, no `debugger` is left in your files.

A calculation whose answer isn't kept anywhere changes nothing.
