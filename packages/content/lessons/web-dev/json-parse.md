Your friend got your message: "red car, 4 wheels, a 7 on the door". When they read it, they can build the same car with their own blocks. A JSON text is the message. To work with the data again, a program has to read it back.

## A JSON text is only letters

A JSON text looks like an object, but it's a text:

```js
const text = '{"name":"Mia","score":12}';
console.log(text.name);
```

```text
undefined
```

A text has no property `name`. To use the data, turn the text back into an object.

## `JSON.parse`

`JSON.parse` reads a JSON text, and gives back the data it describes:

```js
const text = '{"name":"Mia","score":12}';
const player = JSON.parse(text);

console.log(player.name);
console.log(player.score + 1);
```

```text
Mia
13
```

`player` is an object again, with its properties. The score is a real number, so `+ 1` adds to it. `JSON.parse` is the opposite of `JSON.stringify`: one turns data into a text, and the other turns a text into data.

Look at the quotes in the first line. The JSON text uses double quotes inside, so the JavaScript text around it uses single quotes. A JSON text you get from a page or a box doesn't need that: it's already a text.

## From a box

What a visitor types in a box is a text, through `.value`. If it's JSON, `JSON.parse` turns it into data:

```html preview
<textarea id="pasted">{"pet":"cat","name":"Tom"}</textarea>
<button type="button" id="read">Read it</button>
<p id="answer"></p>
<script>
  document.querySelector("#read").addEventListener("click", () => {
    const data = JSON.parse(document.querySelector("#pasted").value);
    document.querySelector("#answer").textContent = `A ${data.pet} called ${data.name}`;
  });
</script>
```

Click the button: the page says "A cat called Tom". Change the name in the box, and click again.

## Break it on purpose

Write the JSON with single quotes in the box: `{'pet':'cat'}`. Click, and the console says something like `SyntaxError: Expected property name or '}' in JSON`. JSON is strict: only double quotes, keys in quotes, and no comma after the last item. `JSON.parse` refuses anything else, and the script stops at that line.

---

## Mission: Bring your settings

**What you will see**: a third card, "Bring your settings", with a box and a button. Paste `{"theme":"light","motion":"less"}` and click. The page says `Theme: Light` and `Motion: less`, and the Light button is pressed.

Someone who chose their settings in one browser should be able to bring them to another: copy the text under the settings, and paste it here.

- Among the settings, add a new card with a heading.
- In it, add a box to type in with the id `import`, with its label.
- Add a button with the id `import-button`.
- A click on `#import-button` reads the JSON text in `#import`.
- It keeps the text's motion in the `settings` object, and shows it in `#current-motion`.
- Then it chooses the text's theme, like a click on that theme's button would.
- The text under the settings then shows the new settings too.
