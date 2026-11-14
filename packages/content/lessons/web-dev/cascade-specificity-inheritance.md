Your parents say "be home by 9". Your grandmother, who is looking after you tonight, says "be home by 8". Whose rule counts? Usually the more **specific** one: the one for this evening, not for every evening. When two CSS rules disagree about one element, the browser also chooses the more specific one.

## Specificity: a score

Every selector gets a score from what is in it. This score is called its **specificity**:

- an **id**, like `#scores`: the biggest weight;
- a **class**, like `.tip`, or a pseudo-class like `:hover`: a medium weight;
- a **tag**, like `td`: the smallest weight.

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
  }

  /* show */
  #scores td {
    color: white;
  }

  .winner td {
    color: gold;
  }
  /* /show */
</style>
<table id="scores">
  <tr class="winner"><td>Sam</td><td>12</td></tr>
  <tr><td>Lea</td><td>9</td></tr>
</table>
```

```html preview
<table id="scores">
  <tr class="winner"><td>Sam</td><td>12</td></tr>
</table>
```

Both rules are about Sam's cells. `#scores td` has an id and a tag. `.winner td` has a class and a tag. An id wins over any number of classes. So the cells stay **white**, even though the gold rule comes later.

## Winning

To make the winner gold, the gold rule needs a higher score:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
  }

  #scores td {
    color: white;
  }

  /* show */
  #scores .winner td {
    color: gold;
  }
  /* /show */
</style>
<table id="scores">
  <tr class="winner"><td>Sam</td><td>12</td></tr>
  <tr><td>Lea</td><td>9</td></tr>
</table>
```

An id, a class and a tag: that's more than an id and a tag. Now Sam's row is gold.

## Break it on purpose

Make the selector much more specific than it needs to be: `body #scores tbody tr.winner td`. It works. But the next time you want to change a winner's cell, you will need an even longer selector to win. Keep selectors as short as possible: only enough to win.

---

## Mission: Cancelled in red

**What you will see**: the row of SL-104, the cancelled flight, shows its words in a light red. The other flights keep their color.

The cancelled flight should stand out in the table. But the flight table's cells already have a rule with an id in it.

- The flight table's cells get a text color of your own, from your `#flights td` rule.
- The row of the cancelled flight has the class `cancelled`. Later lessons use this name.
- Its cells have a text color the other flights' cells don't have.

Remember: a class alone can't win over an id.
