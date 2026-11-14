Think about the clothes you wear. You are the same person in a school uniform or in a football shirt. Only the look changes. A web page is the same. The HTML says **what** is on the page. A second language decides how it **looks**: the colors, the fonts, the space between things.

That language is **CSS**. Your station's page is still plain black on white. Time to give it some style.

## A first rule

You write CSS as **rules**. Here is one:

```css preview
<style>
  /* show */
  h1 {
    color: steelblue;
  }
  /* /show */
</style>
<h1>Game Club</h1>
<p>We meet every Friday after school.</p>
```

It says: "every `h1` on the page has steel-blue text". Look at the page under it: the biggest heading is blue, and the rest of the page doesn't change.

**View all the code** shows the whole page. There, the CSS is at the top, inside a `<style>` tag. That only keeps the example in one piece. Your own site keeps its CSS in its own file, as you will see in a moment.

`steelblue` is one of the color names CSS knows. Some others: `red`, `green`, `teal`, `indigo`, `firebrick`. You will learn more about colors in a later lesson. For now, any of these is fine.

## A file of its own

Your HTML and your CSS are in different files. Look at the files of your site: there is a new one, `style.css`, empty for now. Your CSS goes there.

The page needs to know about the file. You tell it with a `<link>` in the `<head>`:

```html preview
<!DOCTYPE html>
<html lang="en">
<!-- show -->
<head>
  <meta charset="UTF-8" />
  <title>Game Club</title>
  <link rel="stylesheet" href="style.css" />
</head>
<!-- /show -->
<body>
  <h1>Game Club</h1>
  <p>We meet every Friday after school.</p>
</body>
</html>
```

- `rel="stylesheet"` says what kind of file it is: a **style sheet**, a file of CSS;
- `href` says where the file is, like a link's `href`.

Like `<meta>`, `<link>` has no closing tag.

Why a different file? Later, your site gets more pages. They can all link to the same `style.css`, so they all look the same. And when you change a color in that one file, it changes on every page at once.

## Break it on purpose

Write the rule in `style.css`, but leave out the `<link>`. Nothing changes on the page. The browser never opens a file that no page links to.

Now put the `<link>` back, but write the file's name wrong:

```html preview
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Game Club</title>
<!-- show -->
<link rel="stylesheet" href="styles.css" />
<!-- /show -->
</head>
<body>
  <h1>Game Club</h1>
  <p>We meet every Friday after school.</p>
</body>
</html>
```

Again, nothing happens, and the browser shows no error. When your CSS seems to do nothing at all, check the link first.

---

## Mission: A first coat of paint

**What you will see**: the page looks as before, but the biggest heading has a color, like steel blue or teal.

Your `index.html` is ready, and your site has an empty `style.css`.

- The `<head>` of `index.html` links to `style.css`.
- In `style.css`, a rule gives the biggest heading a color of your own.
