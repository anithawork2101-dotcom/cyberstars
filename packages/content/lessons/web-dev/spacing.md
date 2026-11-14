Look at a shelf in a supermarket. The cereals stand close together, then there is a gap, then the cookies. Nobody needs a sign that says "these belong together": the space says it. A form works the same way. A label stays close to its box, with more space before the next question.

## Space above, not below

Labels and boxes with no space between them all look like one long list:

```css preview
<style>
  /* show */
  label {
    display: block;
  }
  /* /show */
</style>
<label for="first">First name</label>
<input id="first" />
<label for="last">Last name</label>
<input id="last" />
<label for="city">City</label>
<input id="city" />
```

Now give each label some space above it, and only a little below it:

```css preview
<style>
  /* show */
  label {
    display: block;
    margin-top: 16px;
    margin-bottom: 4px;
  }
  /* /show */
</style>
<label for="first">First name</label>
<input id="first" />
<label for="last">Last name</label>
<input id="last" />
<label for="city">City</label>
<input id="city" />
```

Each label moves away from the box above it, and stays close to its own box. Your eye now reads pairs: "First name" and its box, "Last name" and its box.

## Groups need more space

A group (`fieldset`) holds several choices, so it needs space around it, more than a single label:

```css preview
<style>
  /* show */
  fieldset {
    margin-top: 24px;
    margin-bottom: 24px;
  }
  /* /show */
</style>
<fieldset>
  <legend>Pick a size</legend>
  <input type="radio" id="small" name="size" value="S" />
  <label for="small">Small</label>
  <input type="radio" id="large" name="size" value="L" />
  <label for="large">Large</label>
</fieldset>
<fieldset>
  <legend>Pick a color</legend>
  <input type="radio" id="red" name="color" value="red" />
  <label for="red">Red</label>
  <input type="radio" id="blue" name="color" value="blue" />
  <label for="blue">Blue</label>
</fieldset>
```

Remove the rule: the two frames touch, and they look like one block. With it, each group stands on its own. Inside a group, the choices stay close.

## Break it on purpose

Put the space under the label, not above it:

```css preview
<style>
  /* show */
  label {
    display: block;
    margin-bottom: 16px;
  }
  /* /show */
</style>
<label for="first">First name</label>
<input id="first" />
<label for="last">Last name</label>
<input id="last" />
<label for="city">City</label>
<input id="city" />
```

Now each label is far from its box, and right under the box before it. "Last name" seems to belong to the first box. Space in the wrong place is worse than no space at all.

---

## Mission: Room between the groups

**What you will see**: each label is close to its box, with a clear gap before the next question. The groups of seats, extras and the contact have space above and below them, and the buttons have space above them.

In your form, there is no space between a box and the next label, and the groups of choices touch each other.

- A label stays close to its box: at most 8 pixels between them.
- There are at least 16 pixels between a box and the next label, in the groups too.
- There are at least 16 pixels above and below each group.
- There are at least 16 pixels above the send button.
