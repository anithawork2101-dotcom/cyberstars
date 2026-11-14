At a restaurant, the waiter asks: "What would you like to drink?" If you say nothing, you get water. But if you say "nothing, thanks", that's an answer: you get no drink. "Nothing given" and "given nothing" aren't the same. JavaScript has a default value that knows the difference.

## `||` steps in for every falsy value

You know `||` from the Boarding Form: it gives the left value, or the right one when the left counts as false:

```js
const typed = "";
console.log(typed || "Guest");
```

```text
Guest
```

That's good for an empty name. But `||` replaces **every** value that counts as false: `""`, `0` and `false` too:

```js
const lives = 0;
console.log(`Lives left: ${lives || 3}`);
```

```text
Lives left: 3
```

The player has 0 lives left, a real answer, and `||` throws it away for the 3.

## `??`: steps in only for nothing

`??` gives the left value, unless it's `null` or `undefined`, the two kinds of nothing. Then it gives the right one:

```js
const lives = 0;
console.log(`Lives left: ${lives ?? 3}`);

let missing;
console.log(`Lives left: ${missing ?? 3}`);
```

```text
Lives left: 0
Lives left: 3
```

0 is a value, so it stays. Only `undefined` gets the default. That's why `??` is called the **nullish** default: it only steps in for `null` or `undefined`.

## With `?.`

`?.` gives `undefined` when something is missing, and `??` then gives the value to use instead. The two often come together:

```js
const name = document.querySelector("#hero")?.textContent ?? "No hero";
```

And a property an object doesn't have is `undefined` too, so `??` gives it a default: `labels[theme] ?? theme` uses the theme's words when it has some, and its name if not.

## Break it on purpose

Use `||` for the lives, like above: a player with 0 lives sees 3. Nothing fails, so the mistake can hide for a long time. Ask yourself if `0`, `""` or `false` could be real answers. If they could, use `??`.

---

## Mission: Fallbacks

**What you will see**: with a pressed "High contrast" button whose id is `theme-contrast`, the page says `Theme: contrast`. With no motion button pressed, it says `Motion: full`.

Two things can still come out wrong on the settings page. A theme button added later, like "High contrast", has no words in the `settings` object, so the page would say `Theme: undefined`. And when no motion button is pressed in the HTML, the page says `Motion: not chosen`, though the site still moves as usual.

- When the chosen theme has no words in the `settings` object, `#current-theme` shows `Theme: `, then the theme's name.
- The themes that have words keep their words.
- When no motion button is pressed in the HTML, the motion is `full`, and `#current-motion` says `Motion: full`.

`??` only steps in for `null` and `undefined`.
