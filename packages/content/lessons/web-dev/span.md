A `div` is a box for whole blocks. But sometimes you want to mark only a few words **inside** a sentence: a price, a date, a name. Think of a pencil circle around one word on a page. The word stays where it is, in its line, but now it's marked.

## `<span>`

`span` is a box for a few words, inside a line:

```html preview
<p>The next match is on <span class="date">Saturday</span>.</p>
```

Nothing changes on the page. The sentence reads the same, on one line. A `span` is **inline**, like `<strong>` or `<mark>`, so it never starts a new line.

But now CSS can give `.date` a color. And JavaScript can find it and read "Saturday", or change it to "Sunday", without touching the rest of the sentence.

## `span` or `strong`?

Like `div`, `span` means nothing. If the words are **important**, use `<strong>`. If you say them more strongly, use `<em>`. Use `span` when you only need a way to reach some words, for their look or for a script.

## Break it on purpose

Use a `div` instead:

```html preview
<p>The next match is on <div class="date">Saturday</div>.</p>
```

A `div` is a block, so it cuts the sentence into pieces. And a block inside a `<p>` isn't allowed, so the browser even closes the paragraph early. For a few words in a line, always use `span`.

---

## Mission: Jobs in the cards

**What you will see**: the cards look exactly as before.

Each card says something like Job: Pilot. Later, a script needs to read only the job, without the word "Job:".

- In every card, the job itself, like Pilot, without the word Job, is in a `span` with the class `role`. Later lessons use this name.
- The job stays on the same line as Job:.
