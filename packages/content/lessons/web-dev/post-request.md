Until now, the tracker only asked: "what starships are there?" It's like reading the notice board at school. But sometimes you want to put a note on the board yourself: "I lost my blue jacket." Sending something to a computer far away is the other half of `fetch`.

## Asking and sending

Every request has a **method**: a word that says what it wants.

- `GET`: give me what you have. `fetch` does this when you only give it an address.
- `POST`: here is something new, keep it.

To send, `fetch` takes a second value after the address: an object with the method, and what to send.

```js
const response = await fetch("https://school.example/lost", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ item: "jacket", color: "blue" }),
});
```

- `method: "POST"` says you are sending.
- `body` is what you send. It travels as text, so `JSON.stringify` turns your object into JSON first.
- `headers` are notes on the envelope. `Content-Type` says what kind of text the body is, so the other computer reads it as JSON.

## The answer to a POST

A good API answers a POST too: usually with the status `201` (created), and the new record as it kept it, with an id it gave. So you read the answer as before, with `response.ok` and `response.json()`.

The practice API takes new starships at the same address, `https://cyberstars.app/api/practice/starships`, with a `name` and a `class` (`Cargo`, `Shuttle` or `Explorer`). It answers like a real API, with an id, but keeps nothing, so other students never see your starships. Send it something it doesn't like, and it answers `400`, with an `error` that says why.

## Break it on purpose

Leave out `method: "POST"`. The request is a `GET`, and the API sends you its list, not keeping your starship. Then send the object itself: `body: { item: "jacket" }`. A body must be text, so it travels as `[object Object]`, and the API answers `400`.

---

## Mission: Report it

**What you will see**: `reportShip("Comet", "Cargo")` sends `{"name": "Comet", "class": "Cargo"}` to the practice API. It gives a promise of the starship the API answered, with its new id. The tests call your function themselves, and write in the console what they find, like `test: reported Comet with the id 6`.

Soon, the tracker's form will report starships. First, write the function that sends a report.

- In `tracker.js`, an `async` function `reportShip(name, kind)` sends a POST to `https://cyberstars.app/api/practice/starships`.
- It has a JSON body with `name` and `class`, and the header that says it's JSON.
- It returns the starship the API answered, read from its JSON.
- When the answer isn't ok, it throws a new error with the message `The tracker answered `, then the status.

The body travels as text: `JSON.stringify` it.
