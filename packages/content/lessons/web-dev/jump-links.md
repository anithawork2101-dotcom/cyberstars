A long page on a phone means a lot of scrolling. So many pages have a small list of contents at the top. You tap "Opening hours", and the page goes straight there. Those are **jump links**: links to another place on the same page.

## Give the place a name: `id`

First, the place you jump to needs a name. You give it a name with the `id` attribute:

```html preview
<h2 id="rules">Club Rules</h2>
```

An id is a name for **one** element on the page, like a name badge:

- two elements on a page can't have the same id;
- an id has no spaces. Put `-` between words: `id="club-rules"`.

The id doesn't change how the heading looks. It's only a name.

## Link to it with `#`

Then write a link whose `href` is `#` and the id:

```html preview scroll
<p><a href="#rules">See the rules</a></p>

<h2>Members</h2>
<p>Twelve students meet every Friday after school.</p>
<p>New members are always welcome.</p>

<h2 id="rules">Club Rules</h2>
<p>Shake hands before every game.</p>
<p>Touch a piece, move that piece.</p>
<p>Keep your voice down: others are thinking.</p>
```

Click **See the rules**, and the page scrolls down to the Club Rules heading. The `#` means "a place on this page".

You will see `id` again soon: CSS and JavaScript use it to find an element by its name.

## Break it on purpose

Make the names different:

```html preview scroll
<p><a href="#rule">See the rules</a></p>

<h2>Members</h2>
<p>Twelve students meet every Friday after school.</p>
<p>New members are always welcome.</p>

<h2 id="rules">Club Rules</h2>
<p>Shake hands before every game.</p>
<p>Touch a piece, move that piece.</p>
<p>Keep your voice down: others are thinking.</p>
```

`rule` isn't `rules`, so the click finds nothing, and the page doesn't move. The names must be exactly the same, capital letters too: `#Rules` doesn't find `id="rules"` either.

Now leave out the `#`:

```html preview
<a href="rules">See the rules</a>
```

Now the browser looks for a page called `rules` on your site, not for a place on this page.

---

## Mission: Jump to today

**What you will see**: near the top of your page, a link. A click on it scrolls down to Today on Board. For example:

```text
Welcome aboard

...

Jump to today        (a link; a click scrolls down to Today on Board)
```

Your `index.html` is getting long. Someone on a phone wants to see what's happening on board today, without scrolling past everything.

- The Today on Board heading has the id `today`. Later lessons use this name.
- Under your first paragraphs, before the first part, a link jumps to it.
