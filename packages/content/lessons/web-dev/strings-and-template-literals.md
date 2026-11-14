On a name badge at a party, someone writes your first name, a space, and your last name: two pieces of text put together. Programs put text together all the time: a greeting and a name, a label and a number.

## Strings

A piece of text in JavaScript is a **string**. You write it in quotes, double or single:

```js
const firstName = "Sam";
const lastName = 'Green';
```

Both kinds work the same. Only start and end with the same kind.

## Joining with `+`

`+` between two strings joins them into one:

```js
const fullName = firstName + " " + lastName;
console.log(fullName);
```

```text
Sam Green
```

Look at the `" "` in the middle: a string with only a space in it. Without it, you would get `SamGreen`. JavaScript never adds a space by itself.

You can join a label and a variable in the same way:

```js
console.log("Member: " + fullName);
```

```text
Member: Sam Green
```

## Strings and numbers

`+` also adds numbers. So what happens when you mix them?

```js
console.log("Table " + 4);
console.log(2 + 2);
console.log("2" + "2");
```

```text
Table 4
4
22
```

With a string on one side, `+` joins: the number becomes text and is added at the end. With two numbers, it adds. `"2" + "2"` is two strings, so you get `22`, not 4. Watch the quotes.

## Break it on purpose

Forget the space:

```js
console.log("Member:" + fullName);
```

```text
Member:Sam Green
```

The words touch. Spaces only show where you put them, inside the quotes.

---

## Mission: A new arrival

**What you will see**: when `crew.html` opens, the console shows this line, with its other lines:

```text
New arrival: Lena Park
```

A new crew member arrives. Her first name is `Lena` and her last name is `Park`.

- In `crew.js`, her first name and her last name are kept under two names.
- The console shows `New arrival: Lena Park`.
- That line is joined from those two names with `+`.
