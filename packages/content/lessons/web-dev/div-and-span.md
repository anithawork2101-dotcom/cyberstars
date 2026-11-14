When you move house, you put things in boxes: one box for the kitchen, one for books. The box itself isn't a book or a plate. It only keeps things together, so you can carry them as one.

Every element you have used so far **means** something: a heading, a paragraph, a list. Sometimes you need a box that means nothing at all, only to hold other elements together. That's a `div`.

## `<div>`

```html preview
<div class="member">
  <h3>Sam Green</h3>
  <p>Plays chess on Sundays.</p>
</div>
```

The `div` holds a heading and a paragraph together, as one "member" box. By itself, it changes nothing you can see: the heading and the paragraph look exactly as before. A `div` is a **block**, like a paragraph. It starts on a new line and takes the whole width.

The class makes it useful. With `class="member"`, CSS can later give every member box a background and a border, so they look like cards. JavaScript can find them all, count them, and add new ones.

## Boxes inside a box

A `div` can hold other `div`s:

```html preview
<div id="members">
  <div class="member">
    <h3>Sam Green</h3>
    <p>Plays chess on Sundays.</p>
  </div>
  <div class="member">
    <h3>Lea Park</h3>
    <p>Runs the card games.</p>
  </div>
</div>
```

One big box, `members`, holds all the member boxes. Later, CSS can place them side by side, all at once, through the big box.

## Only when nothing else fits

Before you use a `div`, ask: is this a heading, a paragraph, a list? If HTML has an element that says what it is, use that one. A `div` is for when you only need a box.

## Break it on purpose

Close a `div` too early:

```html preview
<div class="member">
  <h3>Sam Green</h3>
</div>
  <p>Plays chess on Sundays.</p>
```

The page looks the same for now. But the paragraph is out of its box. Later, when CSS gives every member box a background, Sam's text will be outside it. If you start what is inside a `div` further to the right in your file, you see this kind of mistake quickly.

---

## Mission: Crew cards

**What you will see**: on `crew.html`, after the decks, each crew member's name and job, one after the other. It doesn't look like cards yet. For example:

```text
Mara Vega
Job: Commander

Tomas Okafor
Job: Engineer
...
```

The crew directory gets a card for each crew member. Later lessons turn them into real cards with CSS, and fill them with JavaScript.

- One `div` with the id `cards` holds all the cards.
- Inside it, there are at least four `div`s with the class `card`, one for each crew member.
- Each card has the crew member's name, as a heading one level under the part headings.
- Under the name, each card has a paragraph with their job, like Job: Pilot.
