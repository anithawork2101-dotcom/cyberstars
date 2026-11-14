Look at a paper form at school or at the doctor's. Each question is on its own line, with the space for the answer right under it. Your eye goes straight down the page. Until now, your form did this with `<br />`. But a line break is for text, like the lines of an address. Where things sit on the page is a job for CSS.

## Without `<br />`

A label sits inside a line, like a word. A box does too. Without `<br />`, they all sit on one line:

```html preview
<label for="first">First name</label>
<input id="first" />
<label for="last">Last name</label>
<input id="last" />
```

Everything is on one line, until there is no more space. It's hard to read.

## A label on its own line

You met `display: block` in the Display lesson: a block takes a line of its own. Give it to the labels:

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
```

Each label now has its own line. Its box goes on the next line, and the next label, a block too, starts a new line under the box. One box on each line, and not one `<br />`.

## A box for a longer text

A button after a `textarea` sits next to it, on the same line:

```css preview
<style>
  label {
    display: block;
  }

  /* show */
  textarea {
    display: block;
  }
  /* /show */
</style>
<label for="message">Your message</label>
<textarea id="message" rows="3"></textarea>
<button>Send</button>
```

With the rule, the button goes under the box. Remove the rule and look: the button moves up, to the right of the box.

## Choices stay side by side

A round button and its label belong together, on one line. But `label { display: block; }` chooses every label, their labels too:

```css preview
<style>
  /* show */
  label {
    display: block;
  }
  /* /show */
</style>
<p>Your size</p>
<input type="radio" id="small" name="size" value="S" />
<label for="small">Small</label>
<input type="radio" id="large" name="size" value="L" />
<label for="large">Large</label>
```

Each label falls under its round button, alone on its line. Which button is Small? It's hard to say. A label right after a round button must stay inline:

```css preview
<style>
  /* show */
  label {
    display: block;
  }

  input[type="radio"] + label {
    display: inline;
  }
  /* /show */
</style>
<p>Your size</p>
<input type="radio" id="small" name="size" value="S" />
<label for="small">Small</label>
<input type="radio" id="large" name="size" value="L" />
<label for="large">Large</label>
```

`input[type="radio"] + label` means "a label right after a round button": an attribute selector and `+`, from part 3. It's more specific than `label`, so it wins. The choices now stand side by side, each one next to its label.

## Break it on purpose

Keep the `<br />` and add the CSS:

```css preview
<style>
  /* show */
  label {
    display: block;
  }
  /* /show */
</style>
<label for="first">First name</label><br />
<input id="first" /><br />
<label for="last">Last name</label><br />
<input id="last" />
```

An empty line shows between each label and its box. The label already ends its line, so the `<br />` after it makes a second, empty line. When CSS does the job, the `<br />` must go.

---

## Mission: One question a line

**What you will see**: the page looks almost the same. Each label is on its own line, with its box right under it. Each seat and each extra stands next to its label, and the two buttons are under the notes box. The choices of a group may now share one line. The form has no `<br />` left.

Your booking form puts each label above its box with `<br />`. Give that job to CSS.

- Each label of a box is on its own line, with its box right under it.
- The next label starts under that box. In the contact's group too.
- Each round button and each box to tick stays on the same line as its label.
- The buttons are under the notes box.
- The form has no `<br />`: CSS does the work.

When every label is a block, look at the seats and the extras.
