Adding is only half the job. Your phone's notifications go away when you swipe them. A to-do app crosses out the tasks you finished. A game removes the coins you pick up. Elements can leave the page too.

## `remove()`

Every element has a `remove` method that takes it off the page:

```js
document.querySelector("#ad").remove();
```

The element with the id `ad` is gone, as if it had never been in the HTML. Everything after it moves up into its place.

## Removing the last item

A selector can choose the last item of a list, like in CSS:

```js
document.querySelector("#games li:last-child").remove();
```

`li:last-child` is the `li` that is the last one in its list. Put this on a button, and each click removes the item that is last **at that moment**: first darts, then cards, then chess.

## Gone from the page, not from the file

As always, the script changes the page in the browser. Your HTML file still has every item. Reload, and they are all back.

## Break it on purpose

Keep removing after the list is empty:

```js
document.querySelector("#games li:last-child").remove();
```

When no `li` is left, `querySelector` gives `null`, and the console says:

```text
TypeError: Cannot read properties of null (reading 'remove')
```

`null` has no `remove`. You will learn to check for that in part 3. For now, it's enough to know what the error means.

---

## Mission: Remove the last

**What you will see**: next to `Add a rookie`, a button says `Remove the last`. Add two rookies, then click it: `Rookie 2` is gone, and `Rookie 1` is the last name again.

Sometimes a rookie was added by mistake and has to go.

- Add a button with the id `remove-last`.
- The button says `Remove the last`.
- Each click removes the last item of the crew list, whatever it is at that moment.

The last item can be different at every click, so find it again each time.
