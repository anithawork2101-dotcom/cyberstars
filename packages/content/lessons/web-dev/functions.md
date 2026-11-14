A microwave has a "popcorn" button. You don't type the power and the minutes every time. Someone set it up once and gave it a name, and now one press does it all. In a program, a group of steps with its own name is a **function**.

## Making a function

```js
function showWelcome() {
  document.querySelector("#note").textContent = "Welcome to the club!";
  console.log("Welcome shown");
}
```

- `function` says "here is a new function";
- `showWelcome` is its name. You make it like a variable's name, in camelCase. Function names usually start with a verb, because a function **does** something;
- `()` after the name: always there;
- between `{` and `}`: the steps.

Making a function doesn't run it. It's like setting up the popcorn button: nothing happens yet.

## Calling it

To run the steps, you **call** the function, with its name and brackets:

```js
showWelcome();
```

Now the note says "Welcome to the club!", and the console says "Welcome shown". Call it again, and the steps run again.

## A function for a click

Remember `() => { ... }` in `addEventListener`? That was a function too, one with no name. You can give the click a function with a name instead:

```js
document.querySelector("#hello").addEventListener("click", showWelcome);
```

Here there are no brackets after `showWelcome`. You give the function to the button, so the button can call it **later**, on each click. With brackets, `showWelcome()` would run it right now instead.

## Break it on purpose

Give it to the button with brackets:

```js
button.addEventListener("click", showWelcome());
```

The welcome shows at once, when the page opens, and clicks do nothing. The brackets called the function right away, so the button got nothing to call later.

---

## Mission: The alarm

**What you will see**: under the oxygen line, a button says `Sound the alarm`. Click it, and a paragraph under it says:

```text
Alarm! All crew to the bridge
```

And the console shows `Alarm sounded`.

The crew directory gets an alarm button.

- Add a button with the id `alarm`.
- Under it, add an empty paragraph with the id `intercom`.
- A function, with a name you choose, writes `Alarm! All crew to the bridge` in `#intercom`.
- The same function writes `Alarm sounded` in the console.
- A click on the button calls that function. Before the click, nothing is written.
