On a shelf, push the last book all the way to the far end. The other books stay where they are, and all the empty space is now between them and that last book.

## `margin-left: auto`

In a flex container, a margin of `auto` takes all the space left on its side. On an item's left, it pushes that item to the far end of the line. A shop's top bar keeps its name and links on the left, and its cart on the far right:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
    font-family: Verdana, sans-serif;
  }

  .bar a,
  .logo {
    color: #f0f4ff;
    padding: 8px;
    margin: 0;
  }

  .logo {
    font-weight: bold;
  }

  /* show */
  .bar {
    display: flex;
    align-items: center;
  }

  .cart {
    margin-left: auto;
  }
  /* /show */
</style>
<div class="bar">
  <p class="logo">Hat Shop</p>
  <a href="#">Hats</a>
  <a href="#">Caps</a>
  <a href="#" class="cart">Cart</a>
</div>
```

The name and the two links stay together on the left. The cart's margin takes all the space that is left, so the cart sits on the far right of the bar.

The same works in other directions. `margin-right: auto` on an item pushes the items after it to the far right. And in a column, `margin-top: auto` pushes an item down to the bottom.

## Not the same as `space-between`

`justify-content: space-between` spreads every item over the line:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
    font-family: Verdana, sans-serif;
  }

  .bar a,
  .logo {
    color: #f0f4ff;
    padding: 8px;
    margin: 0;
  }

  .logo {
    font-weight: bold;
  }

  /* show */
  .bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  /* /show */
</style>
<div class="bar">
  <p class="logo">Hat Shop</p>
  <a href="#">Hats</a>
  <a href="#">Caps</a>
  <a href="#" class="cart">Cart</a>
</div>
```

Now the two links move far away from the name, and from each other. An auto margin only moves where the empty space goes: on one side of one item. The items on each side of it stay together.

## Break it on purpose

Give the auto margin to the bar, not to the cart:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
    font-family: Verdana, sans-serif;
  }

  .bar a,
  .logo {
    color: #f0f4ff;
    padding: 8px;
    margin: 0;
  }

  .logo {
    font-weight: bold;
  }

  /* show */
  .bar {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
  /* /show */
</style>
<div class="bar">
  <p class="logo">Hat Shop</p>
  <a href="#">Hats</a>
  <a href="#">Caps</a>
  <a href="#" class="cart">Cart</a>
</div>
```

Nothing moves. The bar already takes the whole width of the page, so there is no space left for its margin. The auto margin goes on the item that should move, on the side where the empty space should be.

---

## Mission: The menu at the far right

**What you will see**: on a computer, every page starts like this:

```text
Orbital Station 7                        Home  Crew  Schedule  Boarding  Wiki
```

In your header, the menu comes right after the station's name, and empty space is left at the right end of the header.

- On a computer, on every page, the station's name stays on the left of the header.
- The menu sits on its far right.
- On a phone, the header still fits, with the name on one line.
