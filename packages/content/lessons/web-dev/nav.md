Walk into any shop or open any app. The way around is always in the same place: a menu bar at the top, the same on every screen, so you never get lost. Websites do the same, with a **menu** at the top of every page.

## `<nav>`

A menu is a few links in a `<nav>` element, short for **navigation**:

```html preview
<nav>
  <a href="index.html">Home</a>
  <a href="games.html">Games</a>
  <a href="members.html">Members</a>
</nav>
```

`<nav>` doesn't look special. The links are inline, so they stand side by side. But it **means** "this is the way around the site". A screen reader can jump straight to it, or jump over it to the page's content.

The menu goes at the very top of the `<body>`, before the page's heading. So it's the first thing visitors find.

## The same menu on every page

Copy the same menu to every page, so it's always in the same place. Only the paths change, because each page is in a different place:

```html preview
<!-- on games/chess.html -->
<nav>
  <a href="../index.html">Home</a>
  <a href="../games.html">Games</a>
  <a href="../members.html">Members</a>
</nav>
```

From inside the `games` folder, every link needs a `../` first.

A page may link to itself in the menu: on the home page, Home goes to the home page. That's normal, and it keeps the menu the same everywhere.

## Break it on purpose

Put the menu at the end of the page, not at the top. It still works, but someone who wants another page has to scroll past everything first. Now copy the home page's menu to `games/chess.html` without the `../`. None of the links work there. Try it, then fix it.

---

## Mission: A menu on every page

**What you will see**: at the top of every page, before its heading, the same menu:

```text
Home Crew
```

Your site has three pages now: the home page, the crew directory and the commander's page. Moving between them should work the same way on every page.

- Each of the three pages starts with a `<nav>`, right at the top of its `<body>`.
- Each menu has a link to the home page.
- Each menu has a link to the crew directory.
- Both links work from every page.
