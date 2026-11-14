Look at the top of your browser right now. Each open page has a **tab**, and each tab has a short name: "YouTube", "Maps", "CyberStars". When you have ten tabs open, you use that name to find the one you want.

That name comes from the page itself, from a tag called `<title>`.

## The `<title>` tag

The title is information **about** the page, so it goes in the `<head>`, the envelope:

```html preview
<!DOCTYPE html>
<html>
  <head>
    <title>Game Club</title>
  </head>
  <body>
    <h1>My Favourite Games</h1>
  </body>
</html>
```

The page itself looks the same as before. The words `Game Club` don't show anywhere on it. They show on the browser's tab, and in a bookmark when someone saves the page.

Your preview has no tabs. So it shows the title in the bar over the page, next to the file's name: `Game Club · index.html`.

Change it to `Chess Corner`, and the tab's name changes too.

The title and the `<h1>` are two different things:

- the `<title>` is the name on the **tab**. It is short, so it fits;
- the `<h1>` is the heading **on the page**, and it can be longer.

They often say something similar, but they don't have to be the same.

## Break it on purpose

Move the `<title>` down into the `<body>`:

```html preview
<body>
  <title>Game Club</title>
  <h1>My Favourite Games</h1>
</body>
```

The tab loses its name. A title only works in the `<head>`.

Now delete the `</title>` too, and look. The browser takes everything after it as part of the title, and your heading is gone from the page. Put it back.

---

## Mission: Name the tab

**What you will see**: the bar over your preview shows a short name of your own for the page. For example:

```text
Orion Station · index.html
```

Your `index.html` has its frame, with an empty `<head>`.

- The `<head>` has a `<title>`.
- The title has a short name of your own for the page.
