Joining a sentence with `+` gets messy fast: `"Hi " + name + ", you have " + count + " messages"`. So many quotes and pluses, and it's easy to forget a space. There is a cleaner way: write the sentence once, and leave holes for the values.

## Template literals

A **template literal** is a string written between **backticks**, `` ` ``, not quotes. The backtick key is usually under the Esc key, on the left of 1.

Inside it, `${...}` is a hole. Whatever is in the curly brackets goes into the text right there:

```js
const name = "Sam";
const count = 3;
console.log(`Hi ${name}, you have ${count} new messages`);
```

```text
Hi Sam, you have 3 new messages
```

You write the sentence the way you would say it, with all its spaces, and the values go into their places.

## Anything in the hole

The hole can hold any value, not only a name: a number, or even a small sum:

```js
console.log(`Next year you'll be ${12 + 1}`);
```

```text
Next year you'll be 13
```

Look at the `'` in "you'll". Inside backticks, quotes are only characters, so there is no problem.

## Break it on purpose

Use normal quotes, not backticks:

```js
console.log("Hi ${name}, you have ${count} new messages");
```

```text
Hi ${name}, you have ${count} new messages
```

The holes stay holes: only backticks fill them. If you see `${` in what your script writes, check your quotes.

---

## Mission: A welcome message

**What you will see**: when `crew.html` opens, the console shows this line, with its other lines:

```text
Welcome aboard, Lena Park! You are crew member 7.
```

Welcome Lena Park in a nicer way, with one sentence written as a template.

- The console shows `Welcome aboard, Lena Park! You are crew member 7.`
- The sentence is one template literal.
- Her first name, her last name and the number 7 each go in through a `${...}`.
- The number 7 comes from its own name.
