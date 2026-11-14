Lift one book a little off a shelf to read its title. The book moves, but the gap it leaves stays the size of the book, and the other books don't move at all. CSS can move a box like that: it shows somewhere else, and the page keeps its place for it.

## `transform: translate()`

`transform` changes how a box is drawn, without changing the layout. `translate()` moves it: the first number across, the second down:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
    font-family: Verdana, sans-serif;
  }

  .book {
    background-color: #1e3a5f;
    display: inline-block;
    padding: 24px 12px;
  }

  /* show */
  .picked {
    transform: translate(10px, -20px);
  }
  /* /show */
</style>
<p>
  <span class="book">Maths</span>
  <span class="book picked">Art</span>
  <span class="book">Music</span>
</p>
```

Art moved 10 pixels to the right and 20 pixels up. A minus number means up, and a plus number means down. And look at Maths and Music: they didn't move at all. The page still keeps Art's old place.

To move in only one direction, there are `translateX()`, across, and `translateY()`, up and down: `translateY(-20px)` is 20 pixels up.

## Moving on hover, slowly

`transform` can change slowly with a transition, like a color. A card that goes up a little under the mouse feels like something you can pick up:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
    font-family: Verdana, sans-serif;
  }

  .book {
    background-color: #1e3a5f;
    display: inline-block;
    padding: 24px 12px;
  }

  /* show */
  .book {
    transition: transform 0.3s ease-out;
  }

  .book:hover {
    transform: translateY(-8px);
  }
  /* /show */
</style>
<p>
  <span class="book">Maths</span>
  <span class="book">Art</span>
  <span class="book">Music</span>
</p>
```

Point at a book: it goes up, and the others stay where they are.

## Why not a margin?

A margin moves a box too, but it changes the layout: the boxes around it make space or come closer. Moving a box with a margin on hover makes the whole line jump. `transform` only moves the drawing, so nothing else moves, and the browser can do it very smoothly.

## Break it on purpose

Write two transforms in two rules: `transform: translateY(-8px)` on hover, and somewhere later `transform: none` on the same box. Only the later one counts, so the box never moves. A box has one `transform` property, like one `color`. Then write `translateY(8px)`, without the minus: the book goes down, not up.

---

## Mission: Cards you can pick up

**What you will see**: move the mouse over a card. It goes up 4 pixels and gets its yellow border. The cards around it stay where they are.

The cards light up under the mouse. The crew would like them to go up a little too, like a card picked up from a table.

- With the mouse over it, every card of the dashboard moves up 4 pixels.
- It comes back down when the mouse leaves.
- It moves slowly, with the same timing and wait as its border.
- The cards around it don't move.

A transition can name two properties, with a comma between them.
