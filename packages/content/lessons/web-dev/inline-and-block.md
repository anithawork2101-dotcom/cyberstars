Have you seen that a `<p>` always starts on a new line, but a `<strong>` stays in the middle of its sentence? That's not by chance. HTML elements are of two kinds.

Think of a shelf of books. Each **book** takes its own place on the shelf. The **sticky notes** inside a book sit in the middle of a page, between the words. Elements are like that.

## Block elements: a line of their own

A **block** element starts on a new line. It takes the whole width of the page, even when its text is short. `<h1>` to `<h6>` and `<p>` are blocks:

```html preview
<h2>Snacks</h2>
<p>Apples</p>
<p>Crisps</p>
```

Each one is on its own line, one under the other.

## Inline elements: inside the line

An **inline** element sits inside a line of text. It is as wide as its words, and it doesn't move anything to a new line. `<strong>`, `<em>`, `<mark>`, `<small>`, `<sub>`, `<sup>` and `<br>` are inline:

```html preview
<p>We have <mark>apples</mark>, <mark>crisps</mark> and <mark>juice</mark>.</p>
```

The three `<mark>`s stand side by side, inside the paragraph's line.

## Inline goes inside block

An inline element is a part of a sentence. So it goes **inside** a block, like `<strong>` inside `<p>`. A block doesn't go inside a `<p>`: a paragraph is text, and a heading inside it makes no sense.

## Break it on purpose

Try to put the three snacks side by side as paragraphs:

```html preview
<p>Apples</p> <p>Crisps</p> <p>Juice</p>
```

Writing them on one line of the file doesn't help. Each `<p>` is a block, so each one still takes its own line. To keep words on one line, put them in one paragraph, each in an inline tag.

---

## Mission: What's on board

**What you will see**: in About the Station, one line that says what the station has, with each thing highlighted. For example:

```text
On board: a gym, a greenhouse and a telescope.       (gym, greenhouse and telescope highlighted)
```

Your `index.html` has its parts.

- One paragraph has at least three highlighted words or groups of words.
- Each of them is in its own `<mark>`.
- They show side by side, on the same line.
