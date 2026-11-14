Think of a page in your science notebook. You color the key word with a highlighter pen. You write water as H₂O, with a small 2 down low. You write 10² for "ten squared", with the 2 up high. And at the bottom of a contract, there are always a few lines in very small letters.

HTML has a tag for each of these.

## `<mark>`: the highlighter

```html preview
<p>The test is on <mark>Friday</mark>.</p>
```

`<mark>` is text you highlight because it matters right now, like a word you searched for on the page.

## `<sub>` and `<sup>`: low and high

```html preview
<p>Water is H<sub>2</sub>O.</p>
<p>A square with sides of 3 cm covers 3<sup>2</sup> = 9 cm<sup>2</sup>.</p>
```

`<sub>` puts text a little lower and smaller, like in chemistry. `<sup>` puts it a little higher, like in powers and units.

## `<small>`: the small letters

```html preview
<p>Tickets cost 5 euros. <small>Children under 6 go free.</small></p>
```

`<small>` is for side notes: the small letters at the bottom, a copyright line, "prices may change".

All four tags go inside a paragraph, around the few letters or words they are about, like `<strong>` and `<em>`.

## Break it on purpose

Put the whole formula in `<sub>`:

```html preview
<p>Water is <sub>H2O</sub>.</p>
```

Now the H and the O are low too, and it doesn't look like water's formula any more. Only the 2 goes in `<sub>`.

---

## Mission: Notes on board

**What you will see**: in your Today on Board part, a few details with low, high, small and highlighted text. For example:

```text
Water left: 900 litres of H₂O.
Height: 4 × 10⁵ metres above the Earth.
Docking fee: 20 credits a day.        (smaller)
```

Your `index.html` has its parts. Add some details to the Today on Board part.

- Water's formula shows as H₂O, with the 2 in `<sub>`.
- A number is raised to a power, with the power in `<sup>`.
- A side note is in `<small>`.
- A word or two is highlighted with `<mark>`.
