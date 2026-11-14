A shopping list changes. You remember the eggs and add them at the bottom. Or you cross out the last thing, because you already have it. Arrays can change in the same way, at their end.

## `push`: add to the end

```js
const shopping = ["milk", "bread"];
shopping.push("eggs");
console.log(shopping);
console.log(shopping.length);
```

```text
["milk", "bread", "eggs"]
3
```

`push` is a method, so it has brackets, and the new item goes inside them. The array grows by one, and its `length` grows too.

## `pop`: take the last one off

```js
const last = shopping.pop();
console.log(last);
console.log(shopping);
```

```text
eggs
["milk", "bread"]
```

`pop` takes the last item off the array, and gives it to you, in case you want to use it. The array is one item shorter.

## `const` arrays can still change

Wait: `shopping` is a `const`, and it changed? You can't give a `const` another value: you can't write `shopping = ["tea"]`. But the array itself, the list inside, can still get longer and shorter. The name always points at the same list. Only what is on the list changes.

## Break it on purpose

Put the item in the wrong place:

```js
shopping.push();
shopping.push = "eggs";
```

The first line adds nothing: `undefined` goes at the end. The second line breaks `push` itself, so the next `push` gives an error. You **call** a method, with the value in its brackets: `shopping.push("eggs")`.

---

## Mission: An evening shift

**What you will see**: when `crew.html` opens, the console shows these lines, with its other lines:

```text
Shifts: 4
Cancelled: Evening
Shifts: 3
```

The station adds a fourth shift, then changes its mind.

- An `Evening` shift is added to the end of your shifts array.
- The console shows `Shifts: 4`, counted from the array.
- Then the last shift is taken off.
- The console shows `Cancelled: Evening`, with the shift that was taken off.
- Then the console shows `Shifts: 3`, counted again.
