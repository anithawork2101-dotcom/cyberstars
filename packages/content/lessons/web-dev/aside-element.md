In a school book, next to the long text about a country, there is often a small box: the capital, how many people live there, the longest river. You can read the text without it. But when you only want a number, the box finds it for you in a second. That box is an **aside**.

## `<aside>`

`<aside>` holds something next to the main text. It goes with the text, but the text makes sense without it: a box of quick facts, a tip, links to read next.

```html preview
<main>
  <article>
    <h1>The North School Team</h1>
    <p>Our football team plays every Saturday. This year we won six games and lost two.</p>
  </article>
  <aside>
    <h2>Quick facts</h2>
    <ul>
      <li>Players: 14</li>
      <li>Coach: Lena Park</li>
      <li>Home games: Saturday, 10:00</li>
    </ul>
  </aside>
</main>
```

For now, the facts show under the article. A later lesson puts them next to it, with CSS.

An aside is a landmark too. A screen reader calls it **complementary**: something extra that goes with the page. The listener can skip it, and still gets the whole story.

## Inside or next to the article?

An aside inside an `<article>` goes with that article only. An aside next to the article, inside `<main>`, goes with the whole page. A fact box next to the article, like above, is also easy to put beside it later, on a wide screen.

## Break it on purpose

Move the team's results into the aside:

```html preview
<main>
  <article>
    <h1>The North School Team</h1>
    <p>Our football team plays every Saturday.</p>
  </article>
  <aside>
    <p>This year we won six games and lost two.</p>
    <p>Coach: Lena Park</p>
  </aside>
</main>
```

The page shows the same words. But someone who skips the aside never learns how the season went, and that was the news. Only what the reader could skip goes in an aside.

---

## Mission: Quick facts

**What you will see**: under the greenhouse article, a small box:

```text
Facts
Plants: 4 kinds
Light: 16 hours a day
Water: 60 liters a day
Warmth: 24 °C
```

The airlock's facts are: 2 doors, 4 space suits, 15 minutes to take the air out, 3 m long.

Your two wiki pages have their articles. A reader in a hurry wants the numbers, without reading every part.

- On each wiki page, a fact box with the class `fact-box` comes after the article, inside `<main>`.
- It's next to the text, not part of it.
- Each fact box has a small heading.
- Each fact box has at least three short facts about its topic.
