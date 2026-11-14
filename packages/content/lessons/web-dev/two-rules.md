Your mum says "wear the blue sweater". Five minutes later, she says "no, wear the red one". Which one do you wear? The red one: the last thing she said is what counts.

CSS does the same when two rules of the same kind say different things about the same element.

## The later rule wins

An element can have two classes, with a space between them:

```html preview
<p class="tip">Bring water to every game.</p>
<p class="tip new">Snacks are allowed from this week.</p>
```

Both paragraphs are tips. The second one is also `new`. Now here are two rules:

```css preview
<style>
  /* show */
  .tip {
    color: darkgreen;
  }

  .new {
    color: darkorange;
  }
  /* /show */
</style>
<p class="tip">Bring water to every game.</p>
<p class="tip new">Snacks are allowed from this week.</p>
```

The second paragraph has both classes, so both rules want to give it a color. A class against a class is a tie. So the browser takes the rule that comes **later** in the file. `.new` is further down, so dark orange wins.

The first paragraph isn't `new`, so it stays dark green.

## Only where they disagree

The later rule only wins on the properties that both rules set. Say `.tip` also has `text-decoration: underline`, and `.new` says nothing about lines. Then the new tip keeps its underline from `.tip`, and gets its color from `.new`:

```css preview
<style>
  /* show */
  .tip {
    color: darkgreen;
    text-decoration: underline;
  }

  .new {
    color: darkorange;
  }
  /* /show */
</style>
<p class="tip">Bring water to every game.</p>
<p class="tip new">Snacks are allowed from this week.</p>
```

## Break it on purpose

Change the order of the two rules in the file:

```css preview
<style>
  /* show */
  .new {
    color: darkorange;
  }

  .tip {
    color: darkgreen;
  }
  /* /show */
</style>
<p class="tip">Bring water to every game.</p>
<p class="tip new">Snacks are allowed from this week.</p>
```

Now `.tip` is later, so it wins, and the new tip is dark green like the others. The class is still on the paragraph, but its rule loses. When a class seems to "do nothing", check if a rule further down changes it back.

---

## Mission: An urgent warning

**What you will see**: the Hatch 3 warning shows in its own color, and the badge warning keeps the warning color.

Your page has two warnings. The one about Hatch 3 is urgent: people must see it first.

- The Hatch 3 warning has the class `urgent`, and still has `warning`.
- A warning with the class `urgent` has a color the other warnings don't have.
