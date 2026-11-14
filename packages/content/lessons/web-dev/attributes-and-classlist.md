In many apps, when you move the mouse over a button, a small label shows: "Save", "Delete". That label is an attribute, `title`. A script can write attributes like that, or read them, the same way it writes text.

## `getAttribute`

```js
const link = document.querySelector("#rules-link");
console.log(link.getAttribute("href"));
```

```text
rules.html
```

`getAttribute` gives the value of an attribute, as a string, exactly as it's written in the HTML. An attribute that isn't there gives `null`.

## `setAttribute`

```js
link.setAttribute("title", "Read the club rules");
```

Two things go in the brackets: the attribute's name, then its value. If the attribute exists, its value is replaced. If not, it's added. Move the mouse over the link, and the label shows.

It works for any attribute: `alt` on a picture, `href` on a link, `title` on anything.

## Break it on purpose

Give only one thing to `setAttribute`:

```js
link.setAttribute("title");
```

```text
TypeError: Failed to execute 'setAttribute': 2 arguments required, but only 1 present.
```

It needs a name **and** a value, every time. And `getAttribute("titel")`, written wrong, gives `null`. When an attribute seems to be missing, check its name first.

---

## Mission: Labels on the codes

**What you will see**: move the mouse over SL-104 in the flight table, and a label shows:

```text
Flight SL-104 to Lunar Gateway
```

A flight code like SL-104 doesn't say much by itself. With the mouse over it, it should say where the flight goes.

- Every flight code cell in the table gets a `title` attribute, written by the script.
- The title says `Flight `, the code, `to`, and the destination of its row.
- The code and the destination are read from the row's cells.
