Every website you have ever opened is made of **web pages**. And a web page is just a **text file**, like a note on your phone. Your browser reads that file and turns it into what you see: headings, text, pictures, buttons.

The file is written in a language called **HTML**. HTML doesn't do math like a calculator. It only **says what each piece of the page is**: "this is a heading", "this is some text".

Think of a school notebook. You write the title of a lesson bigger, and you underline it, so anyone can see it's a title. HTML does the same with **tags**.

New words in this lesson:

| Word    | What it means                                                     |
| ------- | ----------------------------------------------------------------- |
| HTML    | The language web pages are written in.                            |
| tag     | A word between `<` and `>` that says what a piece of the page is. |
| element | An opening tag, what is inside it, and the closing tag.           |

## A tag

A tag is a word between `<` and `>`. Here is the tag for the biggest heading of a page:

```html preview
<h1>My Favourite Games</h1>
```

`h1` is short for **heading 1**, the most important heading. Under the code you see the page it makes: the words, big and bold.

Every example in these lessons works like this: the code on top, and the page it makes under it. Change the code and the page changes too, so try things right there. Some examples show only the part that matters. Press **View all the code** to see the whole page.

Look at the two tags around the words:

- `<h1>` is the **opening tag**. It says "a heading starts here".
- `</h1>` is the **closing tag**. It's the same word with a `/` in front. It says "the heading ends here".

The opening tag, the words and the closing tag together make an **element**: one piece of the page.

## The editor and the preview

On the right you have your own small editor:

- the **files** of your site are on the left. For now there is one, `index.html`. It is the page a browser opens first;
- the **editor** is where you type;
- the **preview** shows your page. It changes a moment after you stop typing.

Type this in `index.html` and look at the preview:

```html preview
<h1>Hello</h1>
```

Now change `Hello` to your name. The preview changes too. That's how you work here: type, look, change, look again.

## Break it on purpose

What if you forget the `/` in the closing tag?

```html preview
<h1>Hello<h1>
```

The browser thinks you opened a second heading, and you never closed either of them. On this page you may not see much change. But when you write more under it, everything after it becomes a big heading too. Try it, then put the `/` back.

What if you leave the tags out?

```html preview
Hello
```

The word still shows, but small and plain. Without the tag, the browser doesn't know it should be a heading.

---

## Mission: Name your station

**What you will see**: one big, bold heading that welcomes people to your station, in your own words. For example:

```text
Welcome to Orion Station        (big and bold)
```

You are building the home page of a space station, one lesson at a time. Every lesson adds something to it. Your `index.html` is empty for now.

- The page has a heading made with `<h1>`.
- The heading has your own words in it.
