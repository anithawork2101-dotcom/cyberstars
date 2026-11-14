Think of a letter you send by post. On the envelope there is information **about** the letter: who it's for, and the stamp. Inside is the letter itself, the part the person reads.

A web page works the same way. Every real page sits inside a **frame** with two parts. One part has information about the page. The other part has everything you see.

## The frame

```html preview
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <h1>My Favourite Games</h1>
    <p>I play chess with my grandpa every Sunday.</p>
  </body>
</html>
```

Line by line:

- `<!DOCTYPE html>` goes on the very first line. It tells the browser "this is a modern web page". It isn't a tag like the others, and it never closes.
- `<html>` holds the whole page, from the start to `</html>` at the end.
- `<head>` is the envelope: information **about** the page. Nothing in it shows on the page. It's empty for now. You will put things in it in the next lessons.
- `<body>` is the letter: everything you **see**. Your heading and your paragraphs go here.

The page still shows the same thing.

So why do you need it? Because now the browser knows exactly what kind of page this is, and where each part belongs.

## Elements inside elements

Look again: `<h1>` is **inside** `<body>`, and `<body>` is **inside** `<html>`. Elements sit inside other elements, like boxes inside boxes.

A box inside another box must close before the outer box closes. This is right:

```html preview
<body>
  <p>Hello</p>
</body>
```

The `<p>` opens and closes inside the `<body>`.

The spaces at the start of the lines don't matter to the browser. They are there for **you**. A line that starts further to the right is inside the line above it. So you can see quickly what holds what.

## Break it on purpose

Delete the `<!DOCTYPE html>` line from your page. Most of the time, you see no change. But now the browser shows your page the way pages were shown in the 1990s. Later, some things, like sizes, start to work differently. Put the line back, always on the first line.

---

## Mission: Frame the page

**What you will see**: the preview looks exactly as before. Only the file changes: the frame is now around what you wrote.

Your `index.html` has your heading and your paragraphs. Put the frame around them.

- The file starts with `<!DOCTYPE html>`.
- After it comes `<html>`, with a `<head>` and a `<body>` inside it.
- The `<head>` is empty for now.
- Your heading and your paragraphs are inside the `<body>`.
