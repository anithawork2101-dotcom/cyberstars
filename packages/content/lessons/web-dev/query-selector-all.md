A teacher reads the class list and calls every pupil, not only the first one. `querySelector` finds only the **first** element that matches. To find all of them, there is a second tool.

## `querySelectorAll`

```js
const members = document.querySelectorAll("#members li");
console.log(members.length);
```

```text
4
```

`querySelectorAll` takes a selector, like `querySelector`. It gives you **every** element that matches, in their order on the page. `"#members li"` chooses every `li` inside the element with the id `members`.

What you get works like an array. It has a `length`, and its items have indexes from 0:

```js
console.log(members[0].textContent);
```

```text
Sam Green
```

## Counting what's on the page

This is the big use: the page itself says how many there are. Add a member to the HTML, and the script counts one more, without changing any JavaScript.

```js
const count = document.querySelectorAll(".card").length;
document.querySelector("#total").textContent = `${count} cards`;
```

## Nothing found

If nothing matches, you don't get `null`, like with `querySelector`. You get an empty list, with a `length` of 0.

## Break it on purpose

Use `querySelector` by mistake:

```js
const members = document.querySelector("#members li");
console.log(members.length);
```

```text
undefined
```

`querySelector` gave only the first `li`: one element, which has no length. Without `All`, the count is gone.

---

## Mission: Count the crew

**What you will see**: `crew.html` shows this line under the crew list:

```text
4 crew members on board
```

The number of crew members should come from the crew list itself, not from a number you type.

- Under the crew list, add a paragraph with the id `roster`.
- The script writes in it how many items the crew list has, then ` crew members on board`.
- Add a name to the list, and the number changes too.
