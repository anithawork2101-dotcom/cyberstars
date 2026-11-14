At a train station, the person at the desk asks for your name, and writes it on your ticket. On a website, nobody asks out loud. The page gives you a box, and you type your name in it yourself.

## `<input>`

A box to type in is an `input` element:

```html preview
<p>Your name:</p>
<input />
```

Click in the box and type. The letters show inside it. You can delete them, move with the arrow keys and select them, like in any app. The page does nothing with them yet. For now, the box only holds what you typed.

Like `<img>` and `<br>`, `<input>` has no closing tag. The visitor writes what goes inside, not you.

## An id for each box

A form usually has more than one box: a name, an email, a date. Give each box an `id`, like you did with headings. Then later lessons, and your script, know which box is which:

```html preview
<p>First name:</p>
<input id="first-name" />
<p>Last name:</p>
<input id="last-name" />
```

You see two boxes, one under the other. They look the same, but each one has its own id in the HTML.

## Break it on purpose

Try to put the words inside the box, between two tags:

```html preview
<input>Your name</input>
```

The box is empty, and "Your name" shows next to it, as plain text. An `input` has no inside. The browser closes it at once, and everything after it is only more of the page.

---

## Mission: The boarding page

**What you will see**: a new page, `boarding.html`, on the site's night blue. It has a heading and a short line like "Your full name:", and under it an empty box to type in.

Passengers want to book a seat on a flight without going to the desk. Your site gets a fourth page for it: the boarding page.

- `boarding.html` is a whole page: in English, it can show any letter, and it has a name for its tab.
- It has one biggest heading, and it uses the site's `style.css`.
- It has a box to type the passenger's name in, with the id `passenger`.
- Above the box, a line says what to type.
- Every page's menu has a fourth link, to `boarding.html`.
