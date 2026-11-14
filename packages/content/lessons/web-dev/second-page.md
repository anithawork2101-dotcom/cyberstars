A website is almost never one page. A school's site has a page for news, one for the timetable, one for clubs. Each page is its own file, and links take you from one page to the next.

Your station has a home page. Now it gets a second page: the crew directory.

## A second file

A new page is a new `.html` file, next to `index.html`. Make it with **New file** in the file list. Give it a name that says what is in it, in small letters with no spaces: `crew.html`, `club-rules.html`.

The new page is a whole page on its own. It needs everything a page needs: the doctype, `<html lang="en">`, the `<head>` with its `<meta charset>` and `<title>`, and the `<body>`. Nothing comes over from `index.html` by itself.

To make it look like the rest of the site, link to the same style sheet in its `<head>`:

```html
<link rel="stylesheet" href="style.css" />
```

One `style.css` for two pages: they share every rule, the night blue, the fonts, the colors. Change a color once, and both pages change.

## A link to it

A link to a page on your own site needs only the file's name:

```html preview
<p><a href="games.html">See all our games</a></p>
```

No `https://`, no site name. `games.html` means "the file `games.html` next to this page". In your preview, a click opens it, and the name over the preview changes to show which page you are on.

And the new page needs a way back:

```html preview
<p><a href="index.html">Back to the home page</a></p>
```

## Break it on purpose

Link to `Games.html` with a capital G, while the file is `games.html`. Click it: the console says the page isn't there. On many web servers, names must be exactly the same, capital letters too. Keep file names in small letters, and copy them exactly into your links.

---

## Mission: The crew directory

**What you will see**: on the home page, a link like "Meet the crew". It opens a new page with the heading Crew Directory, on the same night blue as the home page. A link on the new page goes back home.

Your site has one page. Give it a second one: `crew.html`, the crew directory.

- `crew.html` is a whole page: it starts with `<!DOCTYPE html>`, it's in English, and it can show any letter.
- `crew.html` has a name for its tab.
- It uses the same `style.css` as the home page.
- Its biggest heading says what the page is.
- A link on the home page opens `crew.html`.
- A link on `crew.html` goes back to the home page.
