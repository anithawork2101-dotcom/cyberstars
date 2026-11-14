A doorbell does nothing until someone presses it. Then it rings. Most things on a web page work like that: nothing happens until the visitor does something, like a click, a tap or a key. Then the page reacts.

## A button

First, you need something to click. HTML has a tag for it:

```html preview
<button type="button" id="hello">Say hello</button>
<p id="answer"></p>
```

A button by itself does nothing when you click it. `type="button"` says it's a plain button. You will meet other kinds with forms, later.

## `addEventListener`

A click is an **event**: something that happens. You ask an element to listen for it, and you say what to do when it happens:

```js
const button = document.querySelector("#hello");
const answer = document.querySelector("#answer");

button.addEventListener("click", () => {
  answer.textContent = "Hello there!";
});
```

Read it like a sentence: "button, listen for a click, and when it happens, do this". The `() => { ... }` is the "do this" part. It's a small block of lines that doesn't run now, but **later**, every time someone clicks the button.

When the page opens, nothing happens. Click the button, and the paragraph says "Hello there!".

## Break it on purpose

Write the event's name wrong:

```js
button.addEventListener("clik", () => {
  answer.textContent = "Hello there!";
});
```

No error, and nothing happens on a click. The button now listens for an event called "clik", and that event never happens. Event names must be exact: `"click"`.

---

## Mission: Wake the crew

**What you will see**: under the status line, a button says `Wake the crew`. Click it, and the status line changes to:

```text
The crew is awake
```

The morning alarm on the crew directory is a button.

- `crew.html` has a button with the id `wake`.
- The button says `Wake the crew`.
- A click on it writes `The crew is awake` in the status line, `#status`.
- Before the click, the status line still says `Directory checked`.
