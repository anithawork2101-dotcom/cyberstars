Your mum sends you a message: "milk, bread, eggs, apples". At the shop, you read it as four things to find, not as one long line. In your head, you cut it at every comma. `split` cuts a text into an array in the same way.

## `split`

`split` cuts a text wherever it finds the separator you give it, and gives back an array of the pieces:

```js
const shopping = "milk, bread, eggs, apples";
const things = shopping.split(", ");

console.log(things);
console.log(things.length);
```

```text
["milk", "bread", "eggs", "apples"]
4
```

The separator itself is gone: no piece has the comma or the space. And the text stays as it was, because `split` gives a new array.

`split` is the opposite of `join`. `join(", ")` puts the separator between the items, and `split(", ")` cuts the text there.

## Other separators

The separator can be any text:

```js
console.log("10:45".split(":"));
console.log("Mia and Leo and Sara".split(" and "));
console.log("one two".split(" "));
```

```text
["10", "45"]
["Mia", "Leo", "Sara"]
["one", "two"]
```

When the separator isn't in the text, there is nothing to cut. You get an array with one item: the whole text.

## From a text to the page

With an array, a loop can put each piece on the page:

```html preview
<p id="colors">red, green, blue</p>
<ul id="color-list"></ul>
<script>
  const colors = document.querySelector("#colors").textContent.split(", ");
  for (const color of colors) {
    const item = document.createElement("li");
    item.textContent = color;
    document.querySelector("#color-list").append(item);
  }
</script>
```

The page shows the line, and under it, a list with three items: red, green, blue. Change the line to `red, green, blue, pink`: the list gets a fourth item by itself.

## Break it on purpose

Cut with only a comma: `"red, green, blue".split(",")`. You get `["red", " green", " blue"]`: the spaces after the commas are now at the start of the pieces. They don't show much on a page, but `" green" === "green"` is `false`. Then cut with only a space, on `"warm socks, a hat"`. You get four pieces, `["warm", "socks,", "a", "hat"]`, because the space is between the words too. Choose the separator that is only between your pieces.

---

## Mission: Wishes for the supply ship

**What you will see**: under the panels, a part like "For the next supply ship" shows the line, then a list with each wish, then the count:

```text
spare filters, coffee, warm socks, a football

- spare filters
- coffee
- warm socks
- a football

Wishes: 4
```

The crew writes its wishes for the next supply ship in one line, with commas. The dashboard should show them as a list, and count them.

- After the panels, add a new part with a heading.
- In it, a paragraph with the id `wish-list` holds the wishes in one line, with a comma and a space between two wishes.
- The wishes are the four of the example, in that order.
- Under it, add a list with the id `wishes`, empty in the HTML, then a paragraph with the id `wish-count`.
- The script puts each wish of `#wish-list` in a list item of `#wishes`, in the same order, without the commas.
- `#wish-count` says `Wishes: `, then how many wishes there are.
