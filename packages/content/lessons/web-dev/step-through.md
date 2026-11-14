You follow a cooking video one step at a time. You pause after each step to catch up. When the cook says "now make the sauce, I showed it in another video", you open that video and follow it too. The debugger lets you follow code the same way: one line at a time, and into the functions it calls.

## Stepping

Once the code has stopped on a breakpoint, you don't have to jump to the next breakpoint. The buttons next to Resume move one step at a time:

- **Step over** (F10): run this line, and stop on the next one. If the line calls a function, the whole function runs, and you don't watch it.
- **Step into** (F11): if the line calls a function, go inside it, and stop on its first line. Now you watch the function work.
- **Step out** (Shift+F11): run the rest of this function, and stop where it was called from.

Watch the Scope part as you step: the values change as the lines run.

## Where the bug hides

When a function gives a wrong answer, often the function itself isn't wrong. It calls another function, and that one gives it a wrong value. So you stop where the wrong answer is made, step into the function it calls, and watch that one, line by line.

```js
function sum(numbers) {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}

function average(numbers) {
  return sum(numbers) / numbers.length;
}
```

Stop on the `return` of `average`, step into `sum`, and step over each line of its loop. You see `total` grow with each number, and you see where it stops.

## Break it on purpose

Use Step over on the line that calls the function you want to see. The function runs all at once, and you're already on the next line, with its wrong result. Step into it instead. Then press Step into on a line like `console.log(...)`. You land in code that isn't yours. Step out to get back.

---

## Mission: The average crew

**What you will see**: under the total, a line:

```text
Average crew: 4.8
```

24 people on 5 starships make 4.8 people per starship, on average. Before the fix, the line says much less.

The lesson brings a file, `average-crew.js`. Its function gives the average crew of the starships. It has a bug, and not where you'd look first.

- Between `#crew-total` and the list with the id `ships`, add a paragraph with the id `average-crew`.
- Once the starships are in, it says `Average crew: `, then what the function of `average-crew.js` gives for them, rounded to one decimal.
- `average-crew.js` gives the right average for any starships.
- Step into its functions to find the bug, and fix it in that file.

You learned how to round to one decimal in the lesson Rounding.
