Imagine a book where a chapter title is smaller than the section titles inside it. And some chapters jump straight to tiny sections inside sections. You would get lost. The size of a title should tell you how big the part is that it starts.

On a web page, you may want to pick a heading by how it **looks**: "I want this a bit bigger, so `h2`". Don't. You pick a heading by what the part **means**. How big it looks is a job for CSS, which you will learn soon.

## Two rules

**One `h1` on each page.** The `h1` is the name of the whole page, like the title on a book's cover. A book has one cover.

**Never skip a level.** Under an `h2` comes an `h3`, not an `h4`. Going back up is fine: after an `h3`, you can start a new `h2`.

This page follows both rules:

```html preview
<h1>My Favourite Games</h1>
<h2>Board Games</h2>
<h3>Chess</h3>
<h4>Openings</h4>
<h3>Monopoly</h3>
<h2>Video Games</h2>
```

As a list of chapters:

```text
My Favourite Games
  Board Games
    Chess
      Openings
    Monopoly
  Video Games
```

Each step goes down one level at most. Openings is an `h4` because it's a part of Chess.

## Why it matters

People who can't see the screen use a **screen reader**: an app that reads the page out loud. It can list the headings and jump between them, like a list of chapters. Search engines read headings in the same way, to understand what a page is about. When the levels are right, the list makes sense. When levels are skipped or repeated, it doesn't.

## Break it on purpose

Here are both mistakes:

```html preview
<h1>My Favourite Games</h1>
<h2>Board Games</h2>
<h4>Chess</h4>
<h1>Video Games</h1>
```

On the page, you only see different sizes. But the list of chapters is broken:

- Chess is an `h4` right under an `h2`. Where is its `h3`?
- Video Games is a second `h1`, as if the page had two covers.

The fix: Chess becomes an `h3`, and Video Games an `h2`.

---

## Mission: The right level

**What you will see**: read as a list of chapters, your page looks something like this:

```text
Welcome aboard
  About the Station
    The Greenhouse
  Today on Board
    Morning Shift
    Night Shift
```

Your `index.html` has parts with `<h2>` and `<h3>` headings. Add a smaller part inside the first part, and keep every level right.

- Your first `<h2>` part has a smaller part inside it.
- The smaller part's heading is one level below `<h2>`.
- The smaller part has a paragraph under its heading.
- The page has exactly one `<h1>`.
- No heading skips a level.
