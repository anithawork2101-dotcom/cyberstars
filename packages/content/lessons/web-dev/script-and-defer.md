Your pages can show things and look good. But they can't **do** anything: no button reacts, and nothing changes by itself. A page that does things needs a third language: **JavaScript**.

Think of a page as a theatre stage. HTML is the stage and the actors. CSS is the clothes and the lights. JavaScript is the story the actors follow: what happens, and when.

## A script file

JavaScript goes in its own file, ending in `.js`, like CSS goes in `.css`. The page loads it with a `<script>` tag:

```html
<body>
  <h1>Game Club</h1>
  <p>Welcome!</p>
  <script src="games.js"></script>
</body>
```

- `src` says which file to run, like `href` for a style sheet.
- Not like `<link>`, a `<script>` always has a closing tag, `</script>`, even with nothing between them.
- For now, put it at the very end of the `<body>`, after everything else. You will see why in a later lesson.

## A first line

Here is a whole script, one line long:

```js
alert("Welcome to the club!");
```

When the page opens, a small box opens with the message and an OK button. `alert` shows a message box. The message goes between `(` and `)`, in quotes, and the line ends with `;`.

Every time the page loads, the browser reads the script from top to bottom, and does what each line says.

## Break it on purpose

Forget the quotes:

```js
alert(Welcome to the club!);
```

No box at all. Without quotes, JavaScript thinks `Welcome` is a name it should know. It can't understand the line, and it stops. In the next lessons, you will see where it tells you what went wrong.

A file name written wrong, `src="game.js"`, gives no box either. The browser never finds the script to run.

---

## Mission: Hello from the crew directory

**What you will see**: when `crew.html` opens, a message box says `Crew directory ready`. Click OK, and the page is there as before.

Your site has a new empty file, `crew.js`. Make the crew directory say hello to its visitors.

- `crew.html` loads `crew.js`, with a `<script>` tag at the end of its `<body>`.
- When the page opens, a message box says `Crew directory ready`.
