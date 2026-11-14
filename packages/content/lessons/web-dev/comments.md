Have you ever written a note on the side of a book page, or a reminder on a sticky note on your homework? It's for you, not for the people who read the book. HTML has notes like that too. They are called **comments**.

## A comment

A comment starts with `<!--` and ends with `-->`. The browser doesn't show anything between them:

```html preview
<h1>My Favourite Games</h1>
<!-- Add the new games after the summer holiday -->
<p>I play chess with my grandpa every Sunday.</p>
```

The note is in the file, but not on the page. Comments are for people who read the code: you in a month, or a friend who helps you.

## Turning something off

A comment can also hide a piece of the page for a while, without deleting it:

```html preview
<p>I play chess with my grandpa every Sunday.</p>
<!-- <p>Tournament this Saturday!</p> -->
```

The second paragraph is still in the file. To bring it back, you only take away the `<!--` and the `-->`. That's useful for something that comes and goes, like a notice for one week.

A comment can be as long as you like, on many lines, until its `-->`.

## Break it on purpose

Forget the end of the comment:

```html preview
<!-- Add the new games after the summer holiday
<p>I play chess with my grandpa every Sunday.</p>
<p>On rainy days we play cards instead.</p>
```

Now the page is empty from that line on. Without `-->`, the browser thinks the whole rest of the file is one long comment. If part of your page is suddenly gone, look for a comment with no end.

Anyone who looks at the page's code can read your comments. So never write a password or a secret in one.

---

## Mission: Off for now

**What you will see**: the paragraph with the side note shows only its other words. For example:

```text
Next supply ship: Friday.
```

Your `index.html` has a side note in `<small>` about the docking fee. The fee is going to change, so the note shouldn't show for now. But you will need it again later, so don't delete it.

- The side note in `<small>` no longer shows on the page.
- Everything else on the page still shows.
