A recipe card says what dish it's for, then a list of what goes in it: "Pancakes: 2 eggs, 1 cup of milk, a little salt". A CSS rule is built the same way: what it's for, then a list of how it looks.

New words in this lesson:

| Word        | What it means                                          |
| ----------- | ------------------------------------------------------ |
| selector    | The part of a rule that says which elements it is for. |
| property    | A thing you can change, like the color of the text.    |
| value       | What you change the property to, like `teal`.          |
| declaration | One property with its value: `color: teal;`.           |

## The parts of a rule

```css preview
<style>
  /* show */
  h2 {
    color: teal;
  }
  /* /show */
</style>
<h1>Game Club</h1>
<h2>Board Games</h2>
<p>Chess, Monopoly and cards.</p>
<h2>Video Games</h2>
<p>Only at weekends.</p>
```

- `h2` is the **selector**: which elements the rule is for. A tag's name chooses every element of that kind, so this rule is for every `h2`.
- Between `{` and `}` come the **declarations**: how those elements look.
- A declaration is a **property**, `color`, then `:`, then its **value**, `teal`, and a `;` at the end.

A property is a thing you can change: the color of the text, its size, its font. The value says what to change it to.

## Several declarations in one rule

A rule can say many things about its elements, one declaration on each line:

```css preview
<style>
  /* show */
  h2 {
    color: teal;
    text-decoration: underline;
  }
  /* /show */
</style>
<h1>Game Club</h1>
<h2>Board Games</h2>
<p>Chess, Monopoly and cards.</p>
<h2>Video Games</h2>
<p>Only at weekends.</p>
```

Now every `h2` is teal **and** underlined. `text-decoration` draws a line on the text: `underline` under it, `line-through` through the middle, and `none` for no line.

Change the order of the two lines, and nothing changes. They are both about `h2`, and they don't fight.

## Comments in CSS

CSS has comments too, but they look different from HTML comments:

```css preview
<style>
  /* show */
  /* The headings of each part */
  h2 {
    color: teal;
  }
  /* /show */
</style>
<h1>Game Club</h1>
<h2>Board Games</h2>
<p>Chess, Monopoly and cards.</p>
<h2>Video Games</h2>
<p>Only at weekends.</p>
```

Everything between `/*` and `*/` is a note for you.

## Break it on purpose

Leave out one `;`:

```css preview
<style>
  /* show */
  h2 {
    color: teal
    text-decoration: underline;
  }
  /* /show */
</style>
<h1>Game Club</h1>
<h2>Board Games</h2>
<p>Chess, Monopoly and cards.</p>
<h2>Video Games</h2>
<p>Only at weekends.</p>
```

The browser reads `teal text-decoration: underline` as the value of `color`. That makes no sense, so it drops that whole declaration. Your headings lose their color **and** their underline. You see no error anywhere. When a style doesn't work, look for a missing `;` or `:` first.

---

## Mission: Part headings

**What you will see**: About the Station, Today on Board, Visiting Hours and Station Rules all show in the same color, each with a line under it.

Your `style.css` gives the biggest heading a color. Now give the headings of the parts their own look.

- Every `<h2>` has a color of your own.
- Every `<h2>` is underlined.
