On a poster, the most important words are thick and heavy. A quote leans to the side. A big title is sometimes in CAPITAL LETTERS. The same letters and the same font, just written in another way. CSS has a property for each of these.

## `font-weight`: thick or thin

```css preview
<style>
  /* show */
  .highlight {
    font-weight: bold;
  }

  h2 {
    font-weight: normal;
  }
  /* /show */
</style>
<h2>Board Games</h2>
<p>We keep them in the cupboard by the window.</p>
<p class="highlight">Games start at five sharp.</p>
```

`bold` makes letters thick, and `normal` takes the thickness away. Headings are bold because the browser makes them bold. `normal` changes that.

You can also use numbers, from `100` (very thin) to `900` (very thick). `400` is the same as `normal`, and `700` is the same as `bold`. Many fonts only have those two.

## `font-style`: leaning letters

```css preview
<style>
  /* show */
  .quote {
    font-style: italic;
  }
  /* /show */
</style>
<p>My grandpa always says:</p>
<p class="quote">Think twice, move once.</p>
```

`italic` makes the letters lean to the side. `normal` makes them straight again, for example on an `<em>` you don't want in italic.

Remember: `<strong>` and `<em>` say what text **means**. These properties only change how it **looks**. A heading you want thinner is still a heading.

## `text-transform`: capitals

```css preview
<style>
  /* show */
  h3 {
    text-transform: uppercase;
  }
  /* /show */
</style>
<h3>Chess</h3>
<p>I play with my grandpa every Sunday.</p>
```

`uppercase` shows every letter as a capital. `lowercase` shows small letters. `capitalize` makes the first letter of every word a capital. The text in your HTML doesn't change, only how it shows. That's better than typing in capitals: screen readers sometimes read words in capitals one letter at a time.

## Break it on purpose

Write the value wrong:

```css preview
<style>
  /* show */
  h3 {
    text-transform: upper;
  }
  /* /show */
</style>
<h3>Chess</h3>
<p>I play with my grandpa every Sunday.</p>
```

CSS doesn't know the value `upper`, so it drops the declaration, and the heading stays as you typed it. The value is `uppercase`, in one word.

---

## Mission: Signs and labels

**What you will see**: MORNING SHIFT and NIGHT SHIFT in capitals and not bold, like small signs on a door. The address leans to the side, like a note written by hand.

- The shift headings show in capital letters.
- The shift headings aren't bold.
- The address is in italic.
