At a café, you ask for a hot chocolate, but you don't say the size. You get a medium one. Medium is the **default**: what you get when you don't choose.

A parameter of a function can have a default too. Remember: a **parameter** is a name between a function's brackets. It holds the value you give when you call the function.

## A parameter's default value

After the parameter's name, write `=` and a value:

```js
const order = (drink, size = "medium") => `One ${size} ${drink}, please`;

console.log(order("tea", "large"));
console.log(order("tea"));
```

```text
One large tea, please
One medium tea, please
```

The first call gives a size, so `size` is `"large"`. The second call gives no size, so `size` gets its default, `"medium"`.

When a call gives nothing for a parameter, the parameter is `undefined`. The default takes the place of that `undefined`. Without `= "medium"`, the second line would say `One undefined tea, please`.

## Only when nothing comes

Now give an empty text as the size:

```js
console.log(order("tea", ""));
```

```text
One  tea, please
```

The default doesn't come, and you see two spaces between `One` and `tea`. Why? An empty text is still a value. A default only takes the place of a value that is missing.

`||` is different. It takes the place of every falsy value, and the empty text is one of them.

## A message with a default

Here, one function writes every message on a game page. When the page opens, the script calls it with no text, so it writes its default:

```html preview
<p id="game-status"></p>
<button type="button" id="save">Save the game</button>
<script>
  const gameStatus = document.querySelector("#game-status");

  const showStatus = (text = "Nothing saved yet") => {
    gameStatus.textContent = text;
  };

  showStatus();

  document.querySelector("#save").addEventListener("click", () => {
    showStatus("Game saved");
  });
</script>
```

The page opens with `Nothing saved yet`. Click **Save the game**, and it says `Game saved`.

## Break it on purpose

Give `showStatus` straight to `addEventListener`, with no `() => { ... }` around it:

```js
document.querySelector("#save").addEventListener("click", showStatus);
```

Click the button. The page says:

```text
[object PointerEvent]
```

Why? On each click, the browser calls the function and gives it the **event object**, the value that tells what happened. So `text` is not missing. It is the event object, and the default never comes.

To call a function with your own text, or with no text, call it inside `() => { ... }`.

---

## Mission: A word for the reader

**What you will see**: under the wiki's last line, a button that says `Thank the writers`. Under the button, the page says:

```text
Happy reading!
```

Click the button, and the message changes to:

```text
Thank you! The writers will be glad.
```

The article count above stays as it was.

The front page of your wiki already counts its articles. Now it greets the reader too, and lets them thank the people who wrote it. Open `wiki.html` and `wiki.js`.

- After the wiki's last line, add a button with the id `thank`.
- Add an element with the id `wiki-message` too.
- One function writes every message in `wiki-message`.
- When the function gets no text, it writes `Happy reading!`.
- When the page opens, the script calls the function with no text.
- A click on the button makes the same function write `Thank you! The writers will be glad.`
- The article count still works.

If the page shows `[object PointerEvent]` after a click, read Break it on purpose again.
