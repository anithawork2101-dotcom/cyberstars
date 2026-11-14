Think of a necklace. You start with an empty string, and you add one bead at a time, until it's done. A loop can build a piece of text in the same way: start with nothing, and add a piece in every lap.

## Start empty, add in each lap

```js
const games = ["chess", "cards", "darts"];
let list = "";
for (let i = 0; i < games.length; i++) {
  list = list + games[i] + "! ";
}
console.log(list);
```

```text
chess! cards! darts!
```

Step by step:

- `let list = ""`: an **empty string**, two quotes with nothing between them. It's a `let`, because it will change;
- in each lap, `list = list + games[i] + "! "`: take what `list` has so far, add the next game and `"! "` at the end, and keep the result;
- after the loop, `list` holds the whole sentence.

Lap by lap, `list` grows: `"chess! "`, then `"chess! cards! "`, then `"chess! cards! darts! "`.

## Then put it on the page

Build it first, then write it once:

```js
document.querySelector("#games").textContent = list;
```

You could also write inside the loop. But each lap would replace the text, so you would only see the last game.

## Break it on purpose

Make the string inside the loop:

```js
for (let i = 0; i < games.length; i++) {
  let list = "";
  list = list + games[i] + "! ";
}
console.log(list);
```

You get an error: `list is not defined`. A `let` made inside the `{ }` only exists inside them, and it starts empty again in every lap. The string you build must be made **before** the loop.

---

## Mission: Everyone on board

**What you will see**: `crew.html` shows the whole crew on one line under the roster. For example:

```text
Mara Vega. Tomas Okafor. Ines Lindqvist. Kenji Arano.
```

The crew directory shows the whole crew on one line, built from the crew list.

- Under the roster, add a paragraph with the id `everyone`.
- The script writes in it every name of the crew list, in order.
- Each name is followed by a full stop and a space.
- The names come from the list on the page.
