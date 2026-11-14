In a book, when someone speaks, their words go in quotation marks: Sam said, "I'm hungry." Now try to put that whole sentence in a JavaScript string. The string starts and ends with quotes... and it has quotes inside it. Which quote ends the string?

## The problem

```js
console.log("Sam said, "I'm hungry."");
```

JavaScript reads `"Sam said, "` as the whole string, because the second `"` closes it. Then it finds `I'm` outside any string. It can't understand it, so it stops with a `SyntaxError`.

## Use the other kind of quote

A string in double quotes can hold single quotes, and the other way round:

```js
console.log("It's raining");
console.log('Sam said, "Hello"');
```

```text
It's raining
Sam said, "Hello"
```

The quotes inside are only characters, as long as they are not the kind that started the string.

## Both kinds at once: backticks

"Sam said, "I'm hungry."" has both kinds. A template literal, in backticks, can hold both:

```js
console.log(`Sam said, "I'm hungry."`);
```

```text
Sam said, "I'm hungry."
```

## Or escape it

A backslash, `\`, before a quote means "this one is only a character, it doesn't end the string". This is called **escaping** the quote:

```js
console.log("Sam said, \"I'm hungry.\"");
```

The result is the same. The backslash doesn't show. It's useful, but backticks are easier to read.

## Break it on purpose

Write an apostrophe in a string with single quotes:

```js
console.log('It's raining');
```

You get a `SyntaxError`: the `'` in "It's" ends the string too early. Use double quotes or backticks instead.

---

## Mission: Lena says hello

**What you will see**: when `crew.html` opens, the console shows this line, with its other lines:

```text
Lena says: "Hi everyone, I'm so happy to be here!"
```

Lena Park sends a message to the whole crew, and the directory writes it in the console, word for word.

- The console shows exactly that line, with both kinds of quotes.
- The console shows no errors.
