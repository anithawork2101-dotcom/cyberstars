Open a newspaper on any page. The paper's name is at the top, and at the bottom there is the date and the page number. Every page is the same at the top and the bottom, so you always know which paper you are reading. Websites do the same, and HTML has a tag for the top and one for the bottom.

## `<header>`

A **header** is the top part of a page: the site's name, and often its menu. It goes at the very top of the `<body>`:

```html preview
<header>
  <p>Chess Club</p>
  <nav>
    <a href="index.html">Home</a>
    <a href="games.html">Games</a>
  </nav>
</header>
<h1>Welcome</h1>
<p>We meet every Friday after school.</p>
```

You see the club's name, the menu, then the page. It looks exactly as it would without the `<header>`. Like `<nav>`, a header has no look of its own. It tells the browser what this part **is**: the top of the page, the part that is the same everywhere.

## `<footer>`

A **footer** is the bottom part of a page: who made the site, an address, a way to write to them. It goes at the very end of the `<body>`, after everything else:

```html preview
<h1>Welcome</h1>
<p>We meet every Friday after school.</p>
<footer>
  <p>Chess Club · Room 12 · North School</p>
  <p>Made by the club's members.</p>
</footer>
```

Again, there is nothing new to see. But now the page has a clear end, and the browser knows the last two lines are about the site, not about this page.

## The same on every page

Like the menu, the header and the footer are copied to every page of the site. Visitors learn once where the name and the address are, and find them in the same place on every page.

A header holds more than a menu, so the menu goes **inside** it:

```html
<header>
  <p>Chess Club</p>
  <nav>...</nav>
</header>
```

## Break it on purpose

`<header>` and `<head>` look alike, but they are very different. `<head>` is the hidden part of the page, with the title and `<meta>`. Write `<head>` in the body instead of `<header>`. The page looks the same, but the browser throws the tag away, so there is no header now.

Then put `<header>` back, but forget its closing tag `</header>`. The page still looks the same. Right-click it and choose **Inspect**: the header now holds the **whole page**, down to the footer. The browser only closes a tag where you tell it to, or at the very end.

---

## Mission: The same top and bottom

**What you will see**: every page looks like this at the top and the bottom, with its own content between them:

```text
Orbital Station 7
Home  Crew  Schedule  Boarding

(the page)

Orbital Station 7 · Docking Ring B · Low Earth Orbit
Written by the crew, for everyone on board and back on Earth.
```

Every page of your site starts with the menu, but nothing says which site this is. And the pages just stop after their last line.

- Every page starts with a header.
- The header holds the station's name, `Orbital Station 7`, in an element with the class `site-name`, and the menu.
- Every page ends with a footer.
- The footer holds the station's address (Orbital Station 7, Docking Ring B, Low Earth Orbit) and a line of your own about the site.
- The menu's links still work, on every page.

The header goes in the `<body>`, not in the `<head>`.
