Two teachers give you homework for Friday, and both have the same power. Which one counts? Usually the one that came last: it's the newest news. In CSS, when two rules have **exactly the same score**, the one further down the file wins.

## A tie

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
  }

  /* show */
  #scores .winner td {
    color: gold;
  }

  #scores .late td {
    color: gray;
  }
  /* /show */
</style>
<table id="scores">
  <tr class="winner"><td>Sam</td><td>12</td><td>winner</td></tr>
  <tr class="late"><td>Lea</td><td>9</td><td>late</td></tr>
  <tr class="winner late"><td>Ana</td><td>12</td><td>winner and late</td></tr>
</table>
```

Both selectors have an id, a class and a tag: the same score. A row that is only `winner` is gold, and a row that is only `late` is gray. And a row with **both** classes, `class="winner late"`? It's a tie, so the later rule wins: gray.

Change the order of the two rules in the file, and the same row turns gold.

## Order on purpose

That's useful. Put the general rules first, and the special cases after them. The special case is further down, so it wins the ties. A style sheet often reads like that: the whole page first, then the parts, then the special cases.

Remember, the order only decides a **tie**. A rule with a higher score wins, wherever it is in the file.

## Break it on purpose

Put the special case first:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
  }

  /* show */
  #scores .late td {
    color: gray;
  }

  #scores .winner td {
    color: gold;
  }
  /* /show */
</style>
<table id="scores">
  <tr class="winner"><td>Sam</td><td>12</td><td>winner</td></tr>
  <tr class="late"><td>Lea</td><td>9</td><td>late</td></tr>
  <tr class="winner late"><td>Ana</td><td>12</td><td>winner and late</td></tr>
</table>
```

A late winner is now gold: the gray rule lost the tie. When a rule you know is right does nothing, look for a rule with the same score further down.

---

## Mission: Delayed, and cancelled after all

**What you will see**: SL-103's row is amber. A row that is both delayed and cancelled looks like a cancelled one, not like a delayed one.

SL-103 is delayed. And a flight can be delayed first, then cancelled. Then it must show as cancelled.

- The row of the delayed flight has the class `delayed`.
- Its cells have a text color that flights which are neither delayed nor cancelled don't have.
- A row with both classes, `delayed` and `cancelled`, shows its cells differently from a row that is only delayed.
