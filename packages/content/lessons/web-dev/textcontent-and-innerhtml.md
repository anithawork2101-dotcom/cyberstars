`textContent` writes plain words. Every character shows exactly as you typed it. Write `<strong>Hi</strong>`, and the page shows the tags themselves, with the angle brackets. Sometimes you want the tags to **work**, so a word shows in bold.

## `innerHTML`

`innerHTML` is like `textContent`, but the browser reads what you put in as **HTML**:

```js
document.querySelector("#note").innerHTML = "<strong>Sam</strong> joined the club";
```

```text
Sam joined the club        ("Sam" in bold)
```

The browser builds a real `<strong>` element inside `#note`, as if you had written it in the HTML file.

Now look at `textContent`:

```js
document.querySelector("#note").textContent = "<strong>Sam</strong> joined the club";
```

```text
<strong>Sam</strong> joined the club
```

The tags show as plain characters. Nothing is bold.

## Reading it

When you read `innerHTML`, you get the HTML inside the element, with its tags:

```js
console.log(document.querySelector("#note").innerHTML);
```

```text
<strong>Sam</strong> joined the club
```

But `textContent` gives only the words: `Sam joined the club`.

## Break it on purpose

Forget to close a tag:

```js
note.innerHTML = "<strong>Sam joined the club";
```

The browser closes it for you at the end, so the whole sentence is bold. Like in an HTML file, close what you open.

---

## Mission: Latest arrival

**What you will see**: under the rookie buttons, after a click on `Add a rookie`, a paragraph says:

```text
Rookie 1 just arrived        ("Rookie 1" in bold)
```

The crew directory says who arrived last, with their name in bold.

- Under the rookie buttons, add a paragraph with the id `latest`.
- Each click on `Add a rookie` writes in it the new rookie's name, in a `<strong>`.
- After the name comes ` just arrived`.
