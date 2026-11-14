Think of a light switch. Press it once, and the light goes on. Press it again, and it goes off. The same button has two states, and it remembers which one it's in. Many buttons on the web work like that: sound off, dark mode, show more.

## `classList.toggle`

`toggle` adds a class if it isn't there, and removes it if it is:

```js
document.querySelector("#dark-mode").addEventListener("click", () => {
  document.querySelector("body").classList.toggle("dark");
});
```

First click: the body gets `dark`. Second click: it loses it. Third click: it gets it again. One line does the switching, and CSS does the rest:

```css preview
<style>
  /* show */
  .dark {
    background-color: black;
    color: white;
  }
  /* /show */
</style>
<body class="dark">
  <h1>Game Club</h1>
  <p>Dark mode is on.</p>
</body>
```

`toggle` also gives back `true` when it has just added the class, and `false` when it has just removed it.

## Hiding with a class

To hide some elements, put a class on something around them, and let CSS do the hiding:

```css preview
<style>
  /* show */
  .hide-done .done {
    display: none;
  }
  /* /show */
</style>
<p>All the jobs:</p>
<ul>
  <li class="done">Book the room</li>
  <li>Buy snacks</li>
  <li class="done">Pack the boards</li>
</ul>
<p>With hide-done:</p>
<ul class="hide-done">
  <li class="done">Book the room</li>
  <li>Buy snacks</li>
  <li class="done">Pack the boards</li>
</ul>
```

When the list has `hide-done`, its `.done` items are hidden. Toggle `hide-done`, and they go and come back.

## Telling a screen reader

A toggle button looks pressed or not pressed, but a screen reader can't see that. The attribute `aria-pressed` tells it: `"true"` when the button is pressed, and `"false"` when it isn't.

```js
const on = document.querySelector("body").classList.toggle("dark");
button.setAttribute("aria-pressed", on);
```

## Break it on purpose

Use `add` instead of `toggle`. The first click works, but the second click does nothing, because the class is already there. A switch needs `toggle`.

---

## Mission: Hide the cancelled

**What you will see**: over the flight table, a button says `Hide cancelled`. A click hides the cancelled flight, and the button says `Show cancelled`. A second click brings the flight back, and the button says `Hide cancelled` again.

Passengers don't care about cancelled flights. A button hides them, and shows them again.

- Add a button with the id `hide-cancelled`, which says `Hide cancelled`, with `aria-pressed="false"`.
- Each click toggles the class `hide-cancelled` on the flight table.
- While the table has that class, the cancelled rows aren't shown.
- Then the button says `Show cancelled`, and its `aria-pressed` is `true`.
- A second click puts the table and the button back as they were.
