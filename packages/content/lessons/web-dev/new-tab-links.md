You are reading a recipe online, and it has a link to "how to beat eggs". You click it and read. And then... where was the recipe? If the link opened in a **new tab**, the recipe is still there in its own tab, waiting for you.

## `target="_blank"`

Add the `target` attribute with the value `_blank`, and the link opens in a new tab:

```html preview
<a href="https://en.wikipedia.org/wiki/Chess" target="_blank">Read about chess</a>
```

The link looks exactly the same. Only the click works differently: a new tab opens with the other site, and your page stays open in its own tab.

A link can have several attributes. They all go in the opening tag, one after the other, with a space between them. Their order doesn't matter.

## `rel="noopener"`

When you add `target="_blank"`, add `rel="noopener"` next to it:

```html preview
<a href="https://en.wikipedia.org/wiki/Chess" target="_blank" rel="noopener">Read about chess</a>
```

Without it, the page in the new tab can reach your tab and change it. For example, it can send your tab to a fake copy of your site. New browsers protect you anyway, but old browsers don't. `noopener` cuts that connection.

## When to use it

A new tab is good for a link to **another site**, when you want the visitor to come back to your page after.

For links between your own pages, keep the same tab. Visitors expect that, and then the browser's Back button works as they think. If every link opens a new tab, people end up with lots of tabs they never wanted.

## Break it on purpose

Write `target="blank"`, without the `_`:

```html preview
<a href="https://en.wikipedia.org/wiki/Chess" target="blank">Read about chess</a>
```

The first click seems to work: it opens a new tab. But now that tab is called "blank". Every other link with `target="blank"` opens in that **same** tab, and replaces what was there. The `_` matters.

---

## Mission: Stay on the page

**What you will see**: the link looks the same as before. On a real website, a click opens the other site in a new tab, and your page stays open.

Your `index.html` has a link to a page about space stations. A visitor who follows it shouldn't lose your station's page.

- The link to the other site opens in a new tab.
- The link also has `rel="noopener"`.
