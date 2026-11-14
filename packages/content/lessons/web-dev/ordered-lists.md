A recipe's steps come in a fixed order. You break the eggs before you beat them, and you beat them before they go in the pan. Change the order of two steps, and the cake goes wrong. That's why recipe steps have numbers.

## `<ol>`

When the order matters, use an `ol`: an **ordered list**. Its items are `li`s, like in a `ul`:

```html preview
<ol>
  <li>Crack the eggs</li>
  <li>Whisk them</li>
  <li>Pour them in the pan</li>
</ol>
```

The browser numbers the items by itself.

## Never type the numbers

Say you forgot a step, and you add it in the middle:

```html preview
<ol>
  <li>Crack the eggs</li>
  <li>Add a pinch of salt</li>
  <li>Whisk them</li>
  <li>Pour them in the pan</li>
</ol>
```

Every number after it goes up by one, by itself. If you had typed "1.", "2.", "3." in the items, you would have to fix each number by hand.

## `ul` or `ol`?

Ask yourself: if I changed the places of two items, would it be wrong?

- A shopping list, the members of a club: no. Use `ul`.
- Steps, a top ten, a timetable in order: yes. Use `ol`.

## Break it on purpose

Type the numbers yourself, inside an `ol`:

```html preview
<ol>
  <li>1. Crack the eggs</li>
  <li>2. Whisk them</li>
</ol>
```

Now every number shows twice. The `ol` already numbers its items.

---

## Mission: Morning routine

**What you will see**: on `crew.html`, after the crew list, a Morning Routine part with numbered steps. For example:

```text
Morning Routine

1. Check the oxygen readings
2. Water the greenhouse
3. Report to the commander
```

Every morning, the crew does the same things, in the same order. New crew members need to know them.

- Add a part called Morning Routine, with a heading at the same level as Crew.
- Right under its heading, the routine is a numbered list.
- The list has at least three steps.
