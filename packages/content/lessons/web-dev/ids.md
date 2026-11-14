In your class, many people can wear the same team shirt. But only one person has your name on the class list. A class is like the shirt: many elements can share it. An **id** is like a name: one element, and only one, has it.

You already gave Today on Board an id, `today`, so a link could jump to it. CSS can use that same name.

## Style an id

In CSS, you choose an id with a `#` before its name, the same `#` as in the jump link:

```css preview
<style>
  /* show */
  #rules {
    color: firebrick;
  }
  /* /show */
</style>
<h2>Members</h2>
<h2 id="rules">Club Rules</h2>
```

```html preview
<h2>Members</h2>
<h2 id="rules">Club Rules</h2>
```

Only the element with `id="rules"` changes. There is exactly one on the page, so this rule is for that one element.

## An id and a rule for its tag

Now say there is also a rule for every `h2`:

```css preview
<style>
  /* show */
  h2 {
    color: teal;
  }

  #rules {
    color: firebrick;
  }
  /* /show */
</style>
<h2>Members</h2>
<h2 id="rules">Club Rules</h2>
```

Club Rules is an `h2`, so the first rule wants it teal. It also has the id, so the second rule wants it firebrick. It shows **firebrick**. A rule for one exact element is stronger than a rule for every element of its kind. You will learn exactly how the browser decides in a later lesson. For now: the id wins over the tag.

## Break it on purpose

Use a dot instead of the `#`:

```css preview
<style>
  /* show */
  .rules {
    color: firebrick;
  }
  /* /show */
</style>
<h2>Members</h2>
<h2 id="rules">Club Rules</h2>
```

A dot means a class, and nothing has `class="rules"`, so nothing changes. A `#` is for an id, and a dot is for a class.

---

## Mission: Today stands out

**What you will see**: Today on Board shows in its own color, and the other part headings keep their color.

All your part headings have the same look. People look for Today on Board the most, so it should be different from the others.

- The Today on Board heading, with the id `today`, has a color the other part headings don't have.
