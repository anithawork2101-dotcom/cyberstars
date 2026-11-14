In a thick book, you don't read every page to find a chapter. You look at the list of chapters, and jump there. People who can't see the screen do the same with a web page. A **screen reader**, an app that reads the page out loud, can jump from one big part of the page to the next.

## Landmarks

These big parts are called **landmarks**. The tags of the last lessons each make one, and a screen reader calls them by these names:

```text
<header>   banner
<nav>      navigation
<main>     main
<footer>   content info
```

So on a page with all four, the screen reader can list them, and the listener chooses where to go: straight to `main` to skip the menu, or to `content info` to find the address.

A `<div>` makes no landmark. A page built only of `<div>`s may look the same, but for a screen reader, it's one long text with no chapters.

## Two menus, two names

Some pages have two menus: the site's menu at the top, and a few links to parts of this page. A screen reader then lists "navigation" and "navigation". Which one is which?

`aria-label` gives a landmark a name that a screen reader says out loud:

```html preview
<nav aria-label="Main menu">
  <a href="index.html">Home</a>
  <a href="teams.html">Teams</a>
</nav>
<h1>Our Team</h1>
<nav aria-label="On this page">
  <a href="#players">Players</a>
  <a href="#games">Games</a>
</nav>
<h2 id="players">Players</h2>
<p>Ida, Noah and Sofia.</p>
<h2 id="games">Games</h2>
<p>Every Saturday at 10:00.</p>
```

The page looks the same: `aria-label` never shows on the screen. But a screen reader now says "Main menu, navigation" and "On this page, navigation". The name says what the menu is for, in a few words. Don't put the word "navigation" in it, because the screen reader already says that.

## Break it on purpose

Put the name on a paragraph of links, not on a `<nav>`:

```html
<p aria-label="On this page">
  <a href="#players">Players</a>
  <a href="#games">Games</a>
</p>
```

A paragraph isn't a landmark. The screen reader doesn't list it, so the name has nothing to name, and most screen readers never say it. A name only helps on a landmark.

---

## Mission: Names for the menus

**What you will see**: the page looks the same as before. A screen reader on the home page lists:

```text
banner
Main menu, navigation
main
On this page, navigation
content info
```

Every page has a menu in its header. The home page has two more links, **Jump to today** and **Visiting hours**, which go to parts of that same page. They are a menu too, but nothing says so.

- On every page, the menu in the header has a name for screen readers.
- On the home page, the two jump links are a second menu, inside `<main>`.
- That second menu has its own name.
- The jump links still go to their parts of the page.
