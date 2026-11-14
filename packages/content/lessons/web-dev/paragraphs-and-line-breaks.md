Write a text message and press Enter three times between two words. The message shows three empty lines, just as you typed them. You would expect a web page to do the same. It doesn't.

## The browser joins spaces

Try this in your editor:

```html preview
<p>I    like      chess.</p>
```

All those spaces became one. Now press Enter in the middle:

```html preview
<p>I like
chess
and cards.</p>
```

It's still one line. For the browser, an Enter is just another space. And many spaces in a row count as one.

The browser does this on purpose. You can place your HTML in the file as you like, with spaces at the start of lines and empty lines between parts, and the page doesn't change. So your file stays easy to read.

## So how do you get new lines?

With tags. Every `<p>` starts on a new line. So if you want things on different lines, put them in different paragraphs:

```html preview
<p>Clean your room.</p>
<p>Feed the cat.</p>
<p>Do your homework.</p>
```

## Break it on purpose

Write the same three lines in **one** paragraph, each on its own line in the file:

```html preview
<p>
  Clean your room.
  Feed the cat.
  Do your homework.
</p>
```

You see them on one line, one after the other. The Enters you typed are gone.

---

## Mission: Station rules

**What you will see**: at the end of your page, a heading and three rules, each rule on its own line. For example:

```text
Station Rules

Wear your badge at all times.

Close every hatch behind you.

No running in the greenhouse.
```

Your `index.html` has its parts. Add one more part at the very end of the page: the rules everyone on board must follow.

- The page ends with a new part, with an `<h2>` heading.
- Under the heading, there are three rules.
- Each rule shows on its own line on the page.
