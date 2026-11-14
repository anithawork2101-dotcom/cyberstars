A person who walks on a high rope in a circus has a net under the rope. Most nights, nobody uses it. But when they slip, they fall into the net, climb out, and the show goes on. JavaScript has a net too.

## When no answer comes

`response.ok` deals with an answer that is an error. But sometimes no answer comes at all: the phone has no signal, the Wi-Fi stopped, the address doesn't exist. Then `fetch`'s promise fails, and `await` **throws** an error right there. The rest of the function never runs, the page keeps saying "Loading..." forever, and the console shows `Failed to fetch`.

## `try` and `catch`

Put the code that might throw an error inside `try { }`. If anything in it throws, JavaScript stops there and jumps into `catch { }`, the net:

```js
async function loadNews() {
  try {
    const response = await fetch("https://school.example/news");
    const news = await response.json();
    newsLine.textContent = `${news.length} news today`;
  } catch (error) {
    newsLine.textContent = "No connection to the school.";
  }
}
```

- When everything works, `catch` never runs.
- When something throws, the lines after it inside `try` are skipped, and `catch` runs with the error in its parameter (`error`, or any name you like).
- Either way, the script goes on after the whole `try...catch`, and the console shows no error: it was caught.

Your `if (!response.ok)` check stays inside `try`, as it is. An answer that is an error isn't thrown, so `catch` doesn't see it.

To try it in the preview, make a typo at the start of the address, like `https://cyberstarz.app`. No computer answers there.

## Break it on purpose

Catch the error, then do nothing with it: `catch (error) { }`. The console is quiet, and the page still says "Loading..." forever. A net that hides the fall is worse than an error you can read. Always tell the visitor. Then write `throw error;` at the end of `catch`. The error falls out of the net again, and the console shows it.

---

## Mission: No signal

**What you will see**: with no connection, the line says:

```text
No connection to the tracker.
```

The console shows no error. With a connection, everything works as before, with an answer that is an error too.

The tracker should keep working when there is no connection at all.

- In `loadShips`, the code that asks and reads the answers is inside `try`.
- When no answer comes, `catch` writes `No connection to the tracker.` in `#tracker-status`.
- Nothing is thrown out of the function.
- An answer that is an error still says `The tracker didn't answer: `, then its status.

A `catch` that writes nothing leaves the page saying it's loading.
