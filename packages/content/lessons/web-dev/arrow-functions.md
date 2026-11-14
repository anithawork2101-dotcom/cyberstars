In a message to a friend, you may write "tmrw" for "tomorrow". The same meaning, with fewer letters. JavaScript has a shorter way to write a function too: the **arrow function**. You have used it already, in `addEventListener("click", () => { ... })`.

## An arrow function in a variable

Here is a function you know how to write:

```js
function double(number) {
  return number * 2;
}
```

The same function, written with an arrow:

```js
const double = (number) => {
  return number * 2;
};

console.log(double(21));
```

```text
42
```

Read it from left to right:

- `const double =` makes a variable, as always. What goes in it is a function;
- `(number)` holds the parameters, like after a function's name;
- `=>` is the arrow: "this goes to". Type it as `=` and `>`;
- between `{` and `}`: the steps, with `return`, as before.

You call it in the same way: `double(21)`. The line ends with `;`, like every line that makes a `const`.

## The short one that returns

Many functions only work out one value and give it back. For those, the arrow has a short form: no curly brackets, and no `return`.

```js
const double = (number) => number * 2;

console.log(double(5));
```

```text
10
```

With no curly brackets after the arrow, the function gives back the value after `=>`, by itself. It works for a text too:

```html preview
<p id="price"></p>
<script>
  const priceLine = (tickets) => `${tickets} tickets cost ${tickets * 4} euros`;

  document.querySelector("#price").textContent = priceLine(3);
</script>
```

The page says:

```text
3 tickets cost 12 euros
```

Change `priceLine(3)` to `priceLine(5)`, and it says `5 tickets cost 20 euros`. A function with no parameters keeps its empty brackets: `const hello = () => "Hello!";`.

## Break it on purpose

Keep the curly brackets, but leave out `return`:

```js
const double = (number) => {
  number * 2;
};

console.log(double(21));
```

```text
undefined
```

No error, but no answer. With curly brackets, the steps are a normal block, and a block gives back nothing without `return`. So choose one of the two forms: no curly brackets and no `return`, or curly brackets with `return`.

---

## Mission: How many articles?

**What you will see**: under the wiki's first paragraph, the page says:

```text
3 articles in the wiki
```

The wiki's front page, `wiki.html`, has no script yet. The editor has a new, empty file for it: `wiki.js`.

- `wiki.html` loads `wiki.js` from its head, with `defer`, like your other pages load theirs.
- Under the wiki's first paragraph, an element with the id `article-count` says how many articles the list `.wiki-list` holds, then ` articles in the wiki`.
- The script counts the articles on the page. When a writer adds an article to the list, the line is right, with no change to `wiki.js`.
- An arrow function, kept in a variable, takes the number and returns the whole line.
