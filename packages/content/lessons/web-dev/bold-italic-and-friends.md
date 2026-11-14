When you tell a friend something important, your voice changes. "Don't touch the oven, it's **hot**." Or you say one word more strongly: "I said _Tuesday_, not Thursday." When you write, you show that with bold and italic text.

HTML has two tags for it. They don't only change how the text looks. They say what it **means**.

## `<strong>`: this is important

```html preview
<p><strong>Don't touch the oven</strong>, it's still hot.</p>
```

`<strong>` means "this part is important". Browsers show it in **bold**, and a screen reader may say it more strongly. (A screen reader is an app that reads the page out loud.)

## `<em>`: say this word differently

```html preview
<p>I said <em>Tuesday</em>, not Thursday.</p>
```

`<em>` is short for **emphasis**: the word you say more strongly when you read the sentence out loud. Browsers show it in _italic_.

Move the `<em>`, and the sentence means something else:

```html preview
<p><em>I</em> said Tuesday, not Thursday.</p>
```

Now the point is who said it, not which day.

Both tags go **inside** a paragraph, around the words they are about. The rest of the paragraph stays as it was.

## What about `<b>` and `<i>`?

You may see `<b>` (bold) and `<i>` (italic) on other pages. They only change the look. They say nothing about the meaning. When something is important, or said more strongly, use `<strong>` and `<em>`.

## Break it on purpose

Forget to close the `<strong>`:

```html preview
<p><strong>Don't touch the oven, it's still hot.</p>
<p>Dinner is at seven.</p>
```

Now everything after it may be bold, even the next paragraph. The browser doesn't know where the important part ends. Close it, and only the words inside stay bold.

---

## Mission: A warning

**What you will see**: in your Today on Board part, a warning with its most important words in bold. For example:

```text
Hatch 3 stays closed while the panels are repaired.     ("Hatch 3 stays closed" in bold)
```

Your `index.html` has its parts. Something on board needs a warning.

- A paragraph has a warning.
- The warning's most important words are in `<strong>`.
- Somewhere on the page, a word you would say more strongly is in `<em>`.
