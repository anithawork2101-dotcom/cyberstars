A coffee machine has one "make coffee" button... but first you choose small or large. The steps are the same, and only one detail changes. A function can take details like that too. They are called **parameters**.

## A function that takes something

```js
function showNote(message) {
  document.querySelector("#note").textContent = message;
}
```

`message` in the brackets is a **parameter**: a name for a value that the function gets when you call it. Inside the function, `message` works like a variable.

When you call the function, you put the value in the brackets:

```js
showNote("The club is open today");
showNote("Bring your own board");
```

The first call writes "The club is open today". The second one replaces it with "Bring your own board". One function, any message.

## Several parameters

Put commas between them, and give the values in the same order when you call:

```js
function showScore(name, points) {
  console.log(`${name}: ${points} points`);
}
showScore("Sam", 12);
showScore("Lea", 9);
```

```text
Sam: 12 points
Lea: 9 points
```

## On a click

A button's click calls the function with nothing in its brackets. To give it a detail, call your function from inside a small arrow function:

```js
document.querySelector("#open").addEventListener("click", () => {
  showNote("The club is open today");
});
```

## Break it on purpose

Forget to give the value:

```js
showNote();
```

The note says `undefined`. The function got no message, so `message` holds "nothing". A parameter only has a value when the call gives it one.

---

## Mission: The intercom

**What you will see**: under the alarm, two buttons: `Call to dinner` and `Call to the bridge`. A click on the first makes the intercom say `Dinner is ready`. A click on the second makes it say `Report to the bridge`.

The intercom gets two more buttons, and they share one function.

- Add a button with the id `call-dinner` and a button with the id `call-bridge`.
- A click on `call-dinner` writes `Dinner is ready` in `#intercom`.
- A click on `call-bridge` writes `Report to the bridge` in `#intercom`.
- Before any click, the intercom stays empty.
- Both buttons use one function. It takes the message as a parameter and writes it.
