Your oxygen numbers are in `crew.js` for now. But when the crew gets new tanks, they would rather change the page than look inside a script. The numbers can be on the page, and the script can read them from there. But there is one problem.

## Everything on the page is text

`textContent` always gives a string, even when it looks like a number:

```html preview
<p>Members: <span id="members">12</span></p>
```

```js
const members = document.querySelector("#members").textContent;
console.log(members + 1);
```

```text
121
```

`members` is the string `"12"`, so `+ 1` joins: `"121"`. To do math with it, it must become a real number first.

## `Number()`

```js
const members = Number(document.querySelector("#members").textContent);
console.log(members + 1);
```

```text
13
```

`Number("12")` turns the string into the number 12. Now `+` adds.

## `NaN`: not a number

What if the text isn't a number at all?

```js
console.log(Number("twelve"));
```

```text
NaN
```

`NaN` means **Not a Number**: JavaScript tried, and it couldn't. Any sum with `NaN` in it gives `NaN` too. When you see `NaN` on your page, look at the text you turned into a number. Maybe it has a word in it, or it's the wrong element.

## Break it on purpose

Read the whole paragraph, not the span:

```js
const members = Number(document.querySelector("p").textContent);
```

You get `NaN`. The text is "Members: 12", and "Members:" isn't a number. That's why numbers on a page sit in their own `span`: so a script can read only the number.

---

## Mission: Oxygen on the page

**What you will see**: `crew.html` shows these lines under the status line:

```text
Oxygen tanks: 7, each lasting 20 hours.
Oxygen lasts 140 hours
```

The oxygen numbers move from `crew.js` to `crew.html`, where the crew can change them.

- `crew.html` has a paragraph with the number of tanks in a `span` with the id `tanks`.
- The same paragraph has the hours for each tank in a `span` with the id `tank-hours`.
- Under it, the script writes in a paragraph with the id `oxygen` how long the oxygen lasts: `Oxygen lasts 140 hours`.
- The script works it out from the two numbers on the page. When they change, the sentence changes too.
