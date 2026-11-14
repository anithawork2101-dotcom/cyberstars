When you sign up for a game, the username box sometimes says "at least 6 characters". And on an airport screen, names often show in capitals: SAM GREEN. In both cases, a program needs to know something about a string: how long it is, or how it looks in capitals.

## `.length`

Every string knows how many characters it has:

```js
const name = "Sam Green";
console.log(name.length);
```

```text
9
```

The dot means "of": `name.length` is "the length of `name`". It counts every character, spaces too: S, a, m, space, G, r, e, e, n make 9.

`length` is a **property** of the string: a fact about it. It has no brackets after it.

## `.toUpperCase()` and `.toLowerCase()`

```js
console.log(name.toUpperCase());
console.log(name.toLowerCase());
```

```text
SAM GREEN
sam green
```

These are **methods**: things a string can **do**. A method has brackets after its name, `()`, even when nothing goes in them. They give you a new string, in capitals or in small letters. The first `name` stays exactly as it was.

## Break it on purpose

Forget the brackets:

```js
console.log(name.toUpperCase);
```

```text
function toUpperCase()
```

You don't see SAM GREEN. The console shows the method itself, not its result. A method only does its job with `()`. And it's the other way round for `length`: `name.length()` is an error, because you can't call a property.

---

## Mission: Badge and form

**What you will see**: when `crew.html` opens, the console shows these lines, with its other lines:

```text
Badge: LENA PARK
Letters in the name: 9
```

Lena Park needs a badge, with her name in capitals. And the crew form asks how many characters her full name has.

- The console shows `Badge: LENA PARK`.
- The capitals come from her full name, through a method. You don't type them.
- The console shows `Letters in the name: 9`.
- The 9 is counted from her full name.
