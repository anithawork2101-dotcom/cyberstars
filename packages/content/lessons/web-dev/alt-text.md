Imagine you call a friend and tell them about a photo on your screen: "it's our cat, asleep in a shoe box". Your friend can't see it, but now they know what's in it.

Some people visit web pages without seeing them. They are blind, and a **screen reader**, an app, reads the page out loud for them. When it comes to a picture, what should it say? The page tells it, with the `alt` attribute.

## `alt`: the picture in words

```html preview
<img src="img/cat.svg" alt="A grey cat asleep in a shoebox" />
```

`alt` is short for **alternative**: words that take the picture's place when you can't see it. A screen reader says "A grey cat asleep in a shoebox". And sometimes the picture can't load, on a slow phone or with a wrong path. Then the browser shows the alt words where the picture should be.

Search engines read it too, to know what a picture shows.

## Good alt words

Write what you would say to your friend on the phone. Keep it short, and say what matters in the picture:

- good: `alt="A grey cat asleep in a shoebox"`
- not helpful: `alt="cat.svg"`, `alt="picture"`, `alt="image of a cat"`

You don't need to say "picture of". The screen reader already says it's a picture.

## A picture that's only decoration

Some pictures have no meaning: a pretty line between two parts, a little star in a corner. Reading them out loud would only be in the way. For those, write an **empty** alt:

```html preview
<img src="img/line.svg" alt="" />
```

`alt=""` says "this is only decoration, skip it". That's not the same as no `alt` at all. With no `alt`, a screen reader may read the file's name instead: "line dot s v g".

## Break it on purpose

Break the picture's path and look at the preview:

```html preview
<img src="img/kat.svg" alt="A grey cat asleep in a shoebox" />
```

You don't see the picture. You see a broken icon with the words "A grey cat asleep in a shoebox". The alt did its job. Now take the alt away too: only the broken icon is left, and nobody knows what should be there. Fix the path again.

---

## Mission: Pictures in words

**What you will see**: the station picture, as before, and a thin line with a star between two parts of the page.

Your `index.html` shows the station's picture. There is also a new picture in your `img` folder, `divider.svg`: a thin line with a star, only for decoration.

- The station picture has `alt` words that say what it shows.
- The picture `img/divider.svg` shows between two of your parts.
- The divider has an empty `alt`.
