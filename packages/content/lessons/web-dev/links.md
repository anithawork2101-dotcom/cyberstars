The web is called a web because pages lead to each other, like the threads of a spider's web. You read about a game, click its name, and you're on the game's own site. What takes you there is a **link**.

## The `<a>` tag

A link is an `a` element. The `a` stands for **anchor**:

```html preview
<a href="https://en.wikipedia.org/wiki/Chess">Read about chess</a>
```

It has two parts:

- the `href` attribute says **where** the link goes. Here it's a **full address**: it starts with `https://`, then the site's name, then the page on the site;
- the words between the tags are what the visitor **sees and clicks**.

Browsers show links in blue and underlined, so people know they can click them.

A link is **inline**, like `<strong>`. It goes inside a paragraph, as part of a sentence:

```html preview
<p>New to the game? <a href="https://en.wikipedia.org/wiki/Chess">Read about chess</a> before you start.</p>
```

In your preview, a link to another site doesn't open. Instead, the console tells you where it would go. On a real website, it opens the page.

## Words that say where it goes

Look at these two:

```html preview
<p>To learn the rules, <a href="https://en.wikipedia.org/wiki/Chess">click here</a>.</p>
<p>Learn the <a href="https://en.wikipedia.org/wiki/Chess">rules of chess</a>.</p>
```

Both work. But a screen reader can list all the links on a page, without the sentences around them. (A screen reader is an app that reads the page out loud.) Ten links all called "click here" tell the listener nothing. "Rules of chess" says exactly where the link goes. Search engines read the words of links too.

## Break it on purpose

Leave out the `https://`:

```html preview
<a href="en.wikipedia.org/wiki/Chess">Read about chess</a>
```

Now the browser doesn't know it's another site. It looks for a file called `en.wikipedia.org` inside **your** site, and finds nothing. Links to other sites always need the full address.

Now forget the closing `</a>`. Everything after it becomes one long link. Try it, then close it.

---

## Mission: Learn more

**What you will see**: a sentence with a link that sends visitors to read about space stations. For example:

```text
Curious how real stations work? Read about space stations        ("Read about space stations" is a link)
```

Your `index.html` has its About the Station part. Some visitors want to know how real space stations work. Send them somewhere to read about it.

- A paragraph has a link to a page on another site.
- The link's address is a full address that starts with `https://`.
- The link's words say where it goes.
