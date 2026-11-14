When you leave a room, you turn off the light. You do it whether the meeting went well or badly, whether it ended on time or early. It's what you do at the end, whatever happened. JavaScript has a place for that too.

## Busy forever

Try your tracker with the broken address, `https://cyberstars.app/api/practice/broken`. The line says what went wrong, but the light still moves over the skeletons under it. The list is still busy: `aria-busy="false"` is written after the cards, inside `try`, and an error jumps over it.

You could write it in `catch` too. But then it's written twice, and every new problem is one more place to forget it.

## `finally`

After `try` and `catch`, a third part, `finally`, **always** runs: after `try` when everything went well, and after `catch` when something threw an error.

```js
async function loadNews() {
  newsList.setAttribute("aria-busy", "true");
  try {
    const response = await fetch("https://school.example/news");
    // ... read the news, a card for each ...
  } catch (error) {
    newsLine.textContent = `No news: ${error.message}`;
  } finally {
    newsList.setAttribute("aria-busy", "false");
  }
}
```

Whatever happens, the list stops being busy. The two moments of a loading state now sit at the very start and the very end of the function, easy to find. `finally` even runs after a `return` inside `try`.

## Break it on purpose

Put the line back inside `try`, after the cards, and keep the `finally` empty. Everything works with good answers. But on an error, the light moves over the skeletons forever again. Then write the line before `try` instead: the list isn't busy for even a moment, so the skeletons never show.

---

## Mission: Lights off

**What you will see**: with the broken address, the line says what went wrong, and the skeletons are gone. With good answers, the skeletons show until the cards come, as before.

The tracker's list should stop being busy at the end of every load, whatever happened.

- `loadShips` makes the list `ships` not busy in `finally`, once, after `try` and `catch`.
- After an error, or with no connection, the list is not busy, and the skeletons are gone.
- With good answers, the list is busy until the cards are in.
