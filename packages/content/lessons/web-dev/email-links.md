At the bottom of a shop's website, there is often a "Contact us" link. You click it, and your email app opens with a new message to the shop. You only type and send. That's an email link.

## `mailto:`

It's a normal `<a>` link, but its `href` starts with `mailto:`, then the email address:

```html preview
<p><a href="mailto:club@school.example">Write to the chess club</a></p>
```

When you click it, the browser doesn't open a page. It opens the email app, with a new message to `club@school.example`.

Click it in the example: a line under it tells you where the email would go. In your site's preview, the console tells you.

## Words for an email link

Like with any link, the words should say what happens: "Write to the chess club", "Email us". Some sites show the address itself as the words, so people can also copy it:

```html preview
<p>Questions? Write to <a href="mailto:club@school.example">club@school.example</a>.</p>
```

Both are fine.

## Break it on purpose

Forget the `mailto:`:

```html preview
<a href="club@school.example">Write to the chess club</a>
```

Now the browser thinks `club@school.example` is a file on your site, and it tries to open it. No email app, only a page that isn't there. The `mailto:` tells the browser "this is an email address". And there is no `//` after it, not like `https://`.

---

## Mission: Write to the crew

**What you will see**: at the end of your page, a link that starts an email to the crew. For example:

```text
Write to the crew        (a link)
```

Your `index.html` ends with the Station Rules. Visitors with a question should be able to write to the crew.

- At the end of the page, a link starts an email to `crew@station.example`.
- The link's words say that it's for writing to the crew.
