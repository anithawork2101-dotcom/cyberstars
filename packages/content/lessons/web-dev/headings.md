Open a school textbook. There's the book's title on the cover, then chapters, and smaller sections inside each chapter. You can see quickly which is which: the bigger the heading, the bigger the part it starts.

A web page has the same kind of levels. You already know the biggest one, `<h1>`. There are five more.

## Six levels

```html preview
<h1>My Favourite Games</h1>
<h2>Board Games</h2>
<h3>Chess</h3>
<h4>Openings</h4>
<h5>The Italian Game</h5>
<h6>Its first move</h6>
```

The page shows six headings. Each one is a little smaller than the one above it.

The number is the **level**. `h1` is level 1: the name of the whole page. `h2` starts a big part of the page. `h3` starts a smaller part inside an `h2`, and so on, down to `h6`. Most pages only need the first three.

## Headings with text under them

A heading starts a part, and the text of that part comes after it:

```html preview
<h1>My Favourite Games</h1>

<h2>Board Games</h2>
<p>We keep them in the cupboard by the window.</p>

<h3>Chess</h3>
<p>I play with my grandpa every Sunday.</p>

<h3>Monopoly</h3>
<p>Our games last for hours.</p>

<h2>Video Games</h2>
<p>Only at weekends.</p>
```

Read it like the list of chapters at the start of a book:

```text
My Favourite Games
  Board Games
    Chess
    Monopoly
  Video Games
```

Chess and Monopoly are both `h3`, because both are parts of Board Games. Video Games is an `h2` again. It is a new big part, next to Board Games, not inside it.

The empty lines between the parts don't show on the page. They only make the file easier to read.

## Break it on purpose

Make Video Games an `h3`:

```html preview
<h1>My Favourite Games</h1>

<h2>Board Games</h2>
<p>We keep them in the cupboard by the window.</p>

<h3>Chess</h3>
<p>I play with my grandpa every Sunday.</p>

<!-- show -->
<h3>Video Games</h3>
<!-- /show -->
<p>Only at weekends.</p>
```

On the page, it only looks a little smaller. But now the page says Video Games is a part of Board Games, and that isn't true. Some people listen to the page with a screen reader, an app that reads the page out loud. They jump from heading to heading, so they get the wrong idea of how the page is built.

---

## Mission: Parts of the station

**What you will see**: read as a list of chapters, your page looks something like this:

```text
Welcome aboard
  About the Station
  Today on Board
    Morning Shift
    Night Shift
```

Your `index.html` has the heading and a few paragraphs. Give the page some parts.

- Under your paragraphs, add at least two parts.
- Each part starts with an `<h2>` heading.
- The second part has at least two smaller parts inside it.
- Each smaller part starts with an `<h3>` heading.
- Each `<h3>` has a paragraph right under it.
