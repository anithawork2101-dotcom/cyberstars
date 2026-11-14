Imagine a teacher who ends every instruction with "and this is the MOST important rule". After a week, nothing is more important than anything else. And nobody can change a rule without shouting even louder. CSS has a way to shout, and it causes exactly that.

## `!important`

`!important` after a value makes that declaration win over every normal rule, whatever their scores and their order:

```css preview
<style>
  /* show */
  p {
    color: gray !important;
  }

  .tip {
    color: darkgreen;
  }
  /* /show */
</style>
<p>The club meets on Tuesdays.</p>
<p class="tip">Bring water to every game.</p>
```

A paragraph with the class `tip` should be dark green, because `.tip` has a higher score. But `gray !important` wins anyway. It goes around the whole score system.

## Why not use it

It feels like a quick fix: "this doesn't work, add `!important`". But next time you want to change that color, a normal rule can't do it. You need another `!important`, with a higher score. Soon your style sheet is all shouting, and nobody can tell which rule really works.

When a rule doesn't win, find out why: a missing class, a score too low, a rule further down. Fix that instead. Inspect shows you which rule won, and which rules have a line through them.

Sometimes you will find `!important` in other people's style sheets. When it breaks your page, the best fix is usually to take it out.

## Break it on purpose

Add `!important` to one of your own rules. Then try to win over it with a more specific rule. Nothing works until you add `!important` there too. That's the trap.

---

## Mission: The notice board's style sheet

**What you will see**: once `board.css` is linked, the flight table's caption is in italic, and your paragraphs keep their own light color.

The station's notice team sent a small style sheet, `board.css`, for the schedule page. It puts the flight table's caption in italic. It also has a rule that shouts, and makes every paragraph grey.

- `schedule.html` links to `board.css`, after `style.css`.
- The flight table's caption is in italic, from `board.css`.
- Every paragraph has a contrast of at least 4.5:1.
- No rule of yours uses `!important`.

The best fix for a rule that shouts is in the file that shouts.
