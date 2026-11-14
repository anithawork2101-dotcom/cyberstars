A friend asks: "Did you bring anything?" Your bag is empty, so the answer is no. You don't need to say "my bag holds zero things": an empty bag already means no. JavaScript thinks the same way about an empty text.

## An `if` with no comparison

Until now, every `if` had a question that gives `true` or `false`, like `name === ""`. But you can give `if` any value. Then JavaScript decides if it counts as true or as false:

```js
const nickname = "";
if (nickname) {
  console.log(`Hi, ${nickname}!`);
} else {
  console.log("Who are you?");
}
```

```text
Who are you?
```

An empty text counts as false. Change the first line to `const nickname = "Rocket";`:

```text
Hi, Rocket!
```

A text with something in it counts as true.

## Falsy and truthy

A value that counts as false is **falsy**. There are only a few:

- `false`
- `0`
- `""`, an empty text
- `null`, `undefined` and `NaN`

Every other value is **truthy**: it counts as true. That includes `"0"` and `" "`, a text with only a space, because they aren't empty.

## In a page

A box's `.value` is `""` while the box is empty. So `if (box.value)` asks "did the visitor type something?":

```html preview
<label for="nickname">Nickname</label>
<input id="nickname" />
<p>Your badge: <span id="badge">No nickname yet</span></p>
<script>
  const nickname = document.querySelector("#nickname");
  const badge = document.querySelector("#badge");

  nickname.addEventListener("input", () => {
    if (nickname.value) {
      badge.textContent = nickname.value;
    } else {
      badge.textContent = "No nickname yet";
    }
  });
</script>
```

Type `Rocket`: the badge says `Rocket`. Delete everything: `No nickname yet` comes back.

Be careful: write `if (nickname)`, without `.value`, and you ask about the box itself. An element is an object, and every object is truthy, empty box or not.

## Break it on purpose

Write one `=` instead of a comparison:

```js
nickname.addEventListener("input", () => {
  const typed = nickname.value;
  if (typed = "") {
    badge.textContent = "No nickname yet";
  } else {
    badge.textContent = typed;
  }
});
```

Type a letter, and the console says:

```text
TypeError: Assignment to constant variable.
```

One `=` doesn't compare. It tries to put `""` in `typed`, and a `const` can't change. Compare with `===`, or use the value alone, with the two parts of the `if` the other way round: `if (typed)`.

---

## Mission: No name yet

**What you will see**: when the page opens, the pass says `Passenger: No name yet`. Type `Ida Moreau`, and it says `Passenger: Ida Moreau`. Delete the name, and `No name yet` comes back.

When the page opens, your pass says `Passenger:` and nothing after it. It looks broken.

- While the name box is empty, `#pass-name` says `No name yet`.
- That's true when the page opens, and after the name is deleted.
- While there is a name in the box, `#pass-name` shows it, while it's typed.

The box itself is always truthy. Its `.value` is what can be empty.
