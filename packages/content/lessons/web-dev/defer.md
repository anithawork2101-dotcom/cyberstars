Imagine you read a recipe out loud while someone cooks. If you say "now stir the sauce" before they make the sauce, they can't do it. A script can have the same problem, if it runs before the page it works on is there.

## When a script runs

The browser reads a page from top to bottom. When it gets to a `<script>`, it stops reading, runs the script, and only then goes on.

That's why you put your script at the end of the `<body>`. When the browser gets there, it has read the whole page above it. A script near the top would run before the headings, lists and cards exist.

Soon your scripts will change things on the page, and then this matters a lot: a script can't change a heading the browser hasn't read yet.

## `defer`

The end of the `<body>` works, but there is a cleaner way. Put the script in the `<head>`, with all the other information about the page, and add `defer`:

```html
<head>
  <meta charset="UTF-8" />
  <title>Game Club</title>
  <link rel="stylesheet" href="style.css" />
  <script src="games.js" defer></script>
</head>
```

`defer` means "load this script now, but wait until the whole page is read before you run it". The script sits in the head, and it still runs after everything in the body exists.

`defer` is an attribute with no value: only the word. Several scripts with `defer` run in the order you write them.

## Break it on purpose

Move the script into the head **without** `defer`. It runs as soon as the browser gets to it, before the body. Right now your script only writes to the console, so you won't see a difference yet. In a few lessons, your script will change the page. Try it again then, and the console fills with errors.

---

## Mission: Scripts in the head

**What you will see**: the page and the console look exactly as before.

Move the crew directory's scripts to where they belong.

- `crew.html` loads `crew.js` from its `<head>`, with `defer`.
- It loads `check.js` from its `<head>` too, with `defer`.
- `check.js` comes before `crew.js`.
- The console still shows `Crew directory loaded` and `All systems go`.
