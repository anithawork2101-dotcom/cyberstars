At a wedding, the speech **right after** the bride's speech is often the best man's. Not any speech: the one that comes next. CSS can choose an element by what comes right before it, on the same level: its **sibling**.

Siblings are elements with the same parent, side by side in the HTML, like the headings and paragraphs of a page's `<body>`.

## `+`: the very next sibling

```css preview
<style>
  /* show */
  h1 + p {
    font-size: 1.25rem;
  }
  /* /show */
</style>
<h1>Game Club</h1>
<p>Welcome to the club! We play every week.</p>
<p>New members are always welcome.</p>
<h2>Our Games</h2>
<p>Chess and cards.</p>
<p>Puzzles on rainy days.</p>
```

This means "a `p` that comes **right after** an `h1`": the first paragraph under the page's title, often the introduction. Other paragraphs don't change, and a paragraph after an `h2` doesn't either.

## `~`: any sibling after it

```css preview
<style>
  /* show */
  h2 ~ p {
    color: gray;
  }
  /* /show */
</style>
<h1>Game Club</h1>
<p>Welcome to the club! We play every week.</p>
<p>New members are always welcome.</p>
<h2>Our Games</h2>
<p>Chess and cards.</p>
<p>Puzzles on rainy days.</p>
```

This means "every `p` that comes **after** an `h2`, on the same level", not only the first one. Paragraphs before the first `h2` stay as they were.

## Break it on purpose

Put something between them:

```html preview
<style>
  h1 + p {
    font-size: 1.25rem;
  }
</style>
<!-- show -->
<h1>Game Club</h1>
<img src="img/station.svg" alt="The space station" />
<p>Welcome to the club!</p>
<!-- /show -->
```

`h1 + p` doesn't match any more. The `p` comes right after the `img`, not after the `h1`. `+` means **right** after, with nothing between. `h1 ~ p` would still match it.

---

## Mission: The introduction

**What you will see**: under Flight Schedule, the paragraph "Every departure from the station today." is in italic, and so is the crew directory's first paragraph. The other paragraphs aren't.

On every page of your site, the first paragraph under the biggest heading introduces the page. Make it look like an introduction.

- The paragraph right after the biggest heading is in italic.
- The other paragraphs of the crew directory aren't in italic.
