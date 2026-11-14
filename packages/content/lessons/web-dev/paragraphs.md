A page with only a heading is like a book cover with no book inside. Now you need some text.

When you write an essay for school, you split it into **paragraphs**. A paragraph is a block of text about one idea. The next idea starts a new block. HTML has a tag for that: `<p>`, short for paragraph.

## The `<p>` tag

```html preview
<h1>My Favourite Games</h1>
<p>I play chess with my grandpa every Sunday.</p>
```

The paragraph shows in normal-size text. The browser adds a little empty space above it and below it, so the paragraph and the heading don't touch.

Now add a second paragraph:

```html preview
<h1>My Favourite Games</h1>
<p>I play chess with my grandpa every Sunday.</p>
<p>On rainy days we play cards instead.</p>
```

Each `<p>` starts on a new line, with some space between the two. You don't have to do anything for that. The tag does it for you.

Type this in `index.html`, under your heading, and look at the preview.

## Break it on purpose

What happens if you put both sentences in one paragraph?

```html preview
<p>I play chess with my grandpa every Sunday. On rainy days we play cards instead.</p>
```

You see both sentences on the same line, one after the other. The browser starts a new block only where you start a new `<p>`.

Now delete the closing `</p>` and look. Often the page looks the same, because the browser guesses where the paragraph ends. But the browser doesn't always guess right. Always close every tag you open.

---

## Mission: About the station

**What you will see**: under the heading, two or more short paragraphs about your station. Your page would show something like this, in your own words:

```text
Welcome to Orion Station        (big and bold)

The station goes round the Earth every 92 minutes.

Six people live here, with a garden full of tomatoes.
```

Open `index.html` from the last lesson. It already has the heading.

- Under the heading, add at least two paragraphs.
- Make each paragraph with its own `<p>`.
- Write a sentence of your own in each paragraph.
