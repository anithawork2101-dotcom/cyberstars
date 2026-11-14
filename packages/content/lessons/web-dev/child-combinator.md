"The children of the Smith family" and "everyone in the Smith family after them" aren't the same. The second one has grandchildren and great-grandchildren too. CSS can see that difference.

## `>`: children only

A `>` between two selectors chooses elements that are **direct children** of the first one: one level down, not deeper.

```css preview
<style>
  /* show */
  .menu > li {
    margin-bottom: 16px;
  }
  /* /show */
</style>
<ul class="menu">
  <li>
    Drinks
    <ul>
      <li>Tea</li>
      <li>Juice</li>
    </ul>
  </li>
  <li>Snacks</li>
</ul>
```

```html preview
<ul class="menu">
  <li>
    Drinks
    <ul>
      <li>Tea</li>
      <li>Juice</li>
    </ul>
  </li>
  <li>Snacks</li>
</ul>
```

Drinks and Snacks are children of `.menu`, so they get the margin. Tea and Juice are inside the list of Drinks, so they are **grandchildren**. They don't get it.

With a space instead, `.menu li` would choose all four, and the drinks would be far apart too.

## Space or `>`?

- A space: anywhere inside. Usually this is what you want.
- `>`: only one level down. For things inside things, like lists in lists, when the outer and inner levels should look different.

## Break it on purpose

Use a space on the menu with the list inside:

```css preview
<style>
  /* show */
  .menu li {
    margin-bottom: 16px;
  }
  /* /show */
</style>
<ul class="menu">
  <li>
    Drinks
    <ul>
      <li>Tea</li>
      <li>Juice</li>
    </ul>
  </li>
  <li>Snacks</li>
</ul>
```

Tea and Juice get the big margin too, and the inner list doesn't look like a group any more. When styles go into a list inside a list, try `>`.

---

## Mission: Spread out the decks

**What you will see**: on `crew.html`, the three decks stand apart, with space under each one. The rooms inside each deck stay close together.

The deck plan is hard to read: the decks and their rooms are all very close together.

- Every deck in `.decks` has at least 8 pixels of margin under it.
- The rooms inside the decks have no margin under them.
