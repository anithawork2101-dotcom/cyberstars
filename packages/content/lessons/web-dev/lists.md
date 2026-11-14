Before you go shopping, you write a list: milk, bread, apples. Each thing is on its own line, often with a dot before it. Nobody writes it as one long sentence. Web pages have lists too, made for exactly this.

## `<ul>` and `<li>`

A list is a `ul` element, short for **unordered list**. Each thing in it is an `li`: a **list item**.

```html preview
<ul>
  <li>Milk</li>
  <li>Bread</li>
  <li>Apples</li>
</ul>
```

The browser puts a dot, called a **bullet**, before each item, and moves the list a little to the right. "Unordered" means the order doesn't matter: apples before bread is just as good.

## Why not paragraphs?

You could write three paragraphs, and it might even look almost the same. But a list **says** that these things belong together, and how many there are. A screen reader says "list, 3 items" before it reads them, so the listener knows what is coming. Paragraphs don't tell them that.

## Only items inside

A `ul` holds `li` elements and nothing else. Whatever you want in the list goes **inside** an `li`: text, a link, even a picture.

```html preview
<ul>
  <li><a href="chess.html">Chess</a></li>
  <li>Cards</li>
</ul>
```

## Break it on purpose

Forget the `<li>`s:

```html preview
<ul>
  Milk
  Bread
  Apples
</ul>
```

No bullets, and all the words on one line. Without its items, a `ul` is only a box of loose words.

---

## Mission: The crew list

**What you will see**: on `crew.html`, under the page's heading and paragraph, a Crew part with a list of names. For example:

```text
Crew

• Mara Vega
• Tomas Okafor
• Ines Lindqvist
• Kenji Arano
```

`crew.html` needs its most important part: who is on board.

- Add a part called Crew, with a heading one level under the page's heading.
- Under it, add a list with the id `crew`. Later lessons use this id.
- The list has at least four crew members.
- Each item has one name.
