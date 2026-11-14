A shop sign shows a small cup next to the word "Café". The cup helps you find the shop from across the street. But if a friend reads the sign to you on the phone, they say "Café", not "picture of a cup, Café". Some things on a page are only for the eye, and a screen reader should skip them.

## Icons are read too

A screen reader reads every character, symbols too:

```html preview
<button type="button">★ Favourites</button>
```

It says something like "black star, Favourites, button". The star helps people who see it, but read out loud, it's only noise. And an emoji often has a long name, like "smiling face with sunglasses".

## `aria-hidden="true"`

`aria-hidden="true"` hides an element from screen readers, and only from them. The page looks exactly the same. Put the icon in its own `<span>`, so you can hide it alone:

```html preview
<button type="button"><span aria-hidden="true">★</span> Favourites</button>
```

The eye still sees the star. A screen reader only says "Favourites, button".

## Only what the eye doesn't need to say

`aria-hidden` is for things that add nothing in words: an icon next to its word, a decoration, a line between parts. Never use it on something whose meaning only shows to the eye. An icon **alone** in a button, with no word next to it, would leave a button with no name at all.

For a picture, you know the other way: `alt=""` on an `<img>` that is only decoration. `aria-hidden` does the same for anything else.

## Break it on purpose

Put `aria-hidden="true"` on the whole button:

```html
<button type="button" aria-hidden="true">★ Favourites</button>
```

The button still shows, and still works with a mouse. But for a screen reader, it's gone: a blind visitor never learns it exists, and can even land on it with Tab and hear nothing. Then hide the word together with the icon, `<span aria-hidden="true">★ Favourites</span>`. Now the button has no name left. Hide only the icon.

---

## Mission: Icons for the themes

**What you will see**: the buttons read `☀ Light`, `☾ Dark` and `System`.

The theme buttons are plain words. An icon would make them easier to find, without making screen readers say more.

- The Light button and the Dark button each get an icon before their word. You choose the icons.
- A screen reader skips the icons.
- A screen reader still reads each button's word: Light, Dark, System.
- A screen reader can still read the buttons themselves, and the System button is still pressed.
