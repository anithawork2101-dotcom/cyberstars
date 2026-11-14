When you type an address in your browser and press Enter, the browser asks a computer somewhere for that page. Then it shows what comes back. A script can ask for things the same way, without leaving the page. That's how a weather app gets today's weather, or how a game gets the high scores.

New words in this lesson:

| Word     | What it means                                               |
| -------- | ----------------------------------------------------------- |
| API      | An address that programs ask for data, not for a web page.  |
| `fetch`  | The function a script uses to ask an address for something. |
| response | The answer that comes back from the other computer.         |
| status   | A number in the response that says how it went.             |

## An address that answers

For this course, CyberStars has a small **practice API**. An API is a way for programs to talk to each other. The practice API is an address that answers with station data, not with a web page. Open this address in a new tab:

```text
https://cyberstars.app/api/practice/starships
```

You see a list of starships. It is written in a way that programs read easily. That's what your tracker will show. The practice API is the same for everyone and never changes, so you can't break it.

## `fetch`

`fetch` asks an address for what it has. The answer comes later, over the internet, so `fetch` gives you a promise first. You `await` it, inside an `async` function:

```js
async function askWeather() {
  const response = await fetch("https://weather.example/today");
  console.log(response.status);
}

askWeather();
```

```text
200
```

When the promise is ready, it holds a **response**: the answer from the other computer. Before you read what is inside it, look at its `status`. The status is a number that says how it went:

- `200`: all is well, here is what you asked for.
- `404`: there is nothing at this address.
- `500` or `503`: the other computer has a problem right now.

You have seen `404` on websites already, as "Page not found". It's the same number.

## Break it on purpose

Leave out `await`: `const response = fetch(...)`. Now `response` is the promise, not the answer. So `response.status` is `undefined`, and the console shows `undefined`.

Then make a typo in the address, like `/starship` without the s. The API still answers, but the status is `404`: there is nothing at that address. The script doesn't stop. It gets an answer that says the address is wrong.

---

## Mission: Hello, tracker

**What you will see**: open the tracker. For a moment, the line still says it is loading. As soon as the practice API answers, the line says:

```text
The tracker answered 200
```

Your tracker still runs the radar from the last lessons, `scanRadar`. Time to stop playing with it, and ask the real API. Open `tracker.js`.

- Write an `async` function called `loadShips`.
- `loadShips` asks `https://cyberstars.app/api/practice/starships` with `fetch`.
- When the answer comes, it writes in the paragraph with the id `tracker-status`: `The tracker answered `, then the answer's status.
- The number comes from the answer. If the API answers `503` one day, the line says `The tracker answered 503`.
- Until the answer comes, the line keeps its loading text.
- When the page opens, the script calls `loadShips`. The radar doesn't run any more.
