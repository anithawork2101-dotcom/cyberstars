Imagine a notice board at school where anyone can pin a note. Most people pin "Lost: blue scarf". But one day, someone pins a note that says "everyone's homework is cancelled", with the head teacher's name under it. The board can't tell it's fake. `innerHTML` has the same problem.

## The danger

`innerHTML` turns **any** text into HTML, even HTML that runs a script. Most of the time, the text is yours, so it's fine. But often it comes from somewhere else: a name someone typed into a form, a message from another user. And people can type tags:

```js
const name = '<img src="x" onerror="alert(1)">';
document.querySelector("#note").innerHTML = `${name} joined the club`;
```

That "name" is a picture that doesn't load, with an `onerror` attribute: code that runs when a picture can't load. The browser builds the picture, the picture fails, and the code runs. Here it only shows a box. A real attacker's code could read what is on the page, or do things in the visitor's name. This kind of attack is called **XSS**.

## The safe way

Never put text you didn't write yourself into `innerHTML`. Build the elements yourself, and put the text in with `textContent`:

```js
const strong = document.createElement("strong");
strong.textContent = name;
const note = document.querySelector("#note");
note.textContent = "";
note.append(strong, " joined the club");
```

`textContent` never reads tags. The name shows as plain characters, with its angle brackets, and nothing runs. `append` can take several things at once, elements and plain strings, and adds them in order. `note.textContent = ""` empties the note first.

## Break it on purpose

Use the dangerous way with a name like `<b>Sam</b>`. Sam shows in bold, so a visitor could change your page only by choosing their name. With the safe way, the same name shows as `<b>Sam</b>`, with the tags. It looks strange, but it can't do any harm.

---

## Mission: Bold names, safely

**What you will see**: under `#latest`, the page shows every crew member's name in bold. For example:

```text
Welcome: Mara Vega! Tomas Okafor! Ines Lindqvist! Kenji Arano!      (each name in bold)
```

The crew directory shows a welcome list: every name of the crew list, in bold. The names come from the page, and one day they will come from a form that anyone can fill in. Build it the safe way.

- Add a paragraph with the id `welcome-list`.
- It shows `Welcome: `, then every name of the crew list.
- Each name is in a `<strong>`, followed by `! `.
- A name with tags in it shows them as plain characters, and never runs anything.
