Think of the floors of a school. The ground floor has the gym and the canteen. The first floor has the labs and the library. That's a list of floors, and each floor has its own small list of rooms: a list inside a list.

## A list inside an item

A list can sit **inside a list item**, after the item's own text:

```html preview
<ul>
  <li>
    Ground floor
    <ul>
      <li>Gym</li>
      <li>Canteen</li>
    </ul>
  </li>
  <li>
    First floor
    <ul>
      <li>Labs</li>
      <li>Library</li>
    </ul>
  </li>
</ul>
```

The inner list belongs to its floor. It starts after the floor's name, and it ends before that floor's `</li>`. The browser moves it further to the right and gives it another kind of bullet.

In your file, start the inner list one step further to the right than its item. Then you can see quickly what is inside what.

## Break it on purpose

Put the inner list straight into the outer list, between two items:

```html preview
<ul>
  <li>Ground floor</li>
  <ul>
    <li>Gym</li>
  </ul>
  <li>First floor</li>
</ul>
```

It looks almost the same. But a `ul` may only hold `li`s. And now the gym doesn't belong to the ground floor any more: it sits between two floors. A screen reader can't tell what goes with what. The inner list always goes **inside** an `<li>`, before its `</li>`.

---

## Mission: Deck plan

**What you will see**: on `crew.html`, after the morning routine, a Decks part. Each deck has its own small list of rooms. For example:

```text
Decks

• Upper Deck
    ◦ Bridge
    ◦ Observatory
• Living Deck
    ◦ Galley
    ◦ Gym
• Lower Deck
    ◦ Cargo bay
    ◦ Greenhouse
```

New crew members get lost on the station. Show them where everything is.

- Add a part called Decks, with a heading at the same level as Crew.
- Under it, add a list with the class `decks`.
- The list has at least three decks.
- Each deck has at least two rooms.
- A deck's rooms are in a list inside that deck's item.
