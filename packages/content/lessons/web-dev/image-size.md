On a slow connection, have you seen a page jump while you read it? You start a sentence, then a picture loads above it, and the text moves down out of sight. That happens when the browser doesn't know how big a picture is until it arrives.

## `width` and `height`

Two attributes tell the browser a picture's size before it loads:

```html preview
<img src="img/cat.svg" alt="A grey cat asleep in a shoebox" width="300" height="200" />
```

The numbers are in **pixels**: the tiny dots a screen is made of. Now the browser keeps a space of 300 by 200 pixels for the picture at once, and the text around it never jumps.

They also choose the size the picture **shows** at. The same picture can show smaller:

```html preview
<img src="img/cat.svg" alt="A grey cat asleep in a shoebox" width="150" height="100" />
```

The cat now takes a quarter of the space: half as wide, and half as tall.

## Keep its shape

A picture has a **shape**: how wide it is compared to how tall it is. The cat picture is 300 by 200, so it is 1.5 times as wide as it is tall. Change both numbers in the same way, and it keeps its shape:

- 300 by 200: the picture's own size;
- 150 by 100: half of each, the same shape;
- 450 by 300: one and a half times each, the same shape.

## Break it on purpose

Change only one number:

```html preview
<img src="img/cat.svg" alt="A grey cat asleep in a shoebox" width="300" height="100" />
```

The cat is pressed flat. It is as wide as before, but half as tall. The browser does what the numbers say, even when it spoils the picture. When you change the width, work out the height that goes with it.

---

## Mission: The right size

**What you will see**: the station picture, a little smaller, in the same shape. Nothing is pressed flat.

Your `index.html` shows the station picture at its own size: 320 pixels wide and 200 tall. That's a bit big for the top of the page.

- The station picture has a `width` and a `height`.
- It shows 240 pixels wide.
- It keeps its shape: its height goes with that width.

Work out the height the same way the lesson did for the cat.
