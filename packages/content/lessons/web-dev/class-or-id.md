You now have two ways to name an element: a class and an id. So which one do you use? Think of a football team again. "Goalkeeper" is a job. Every team has one, and next year someone else may do it. "Number 10, Silva" is one player. You would put "GK" on every goalkeeper's shirt, but there is only one Silva.

## A class: for a kind of thing

Use a class when **more than one** element shares a look, or could one day:

```html preview
<p class="tip">Bring water to every game.</p>
<p class="tip">Arrive ten minutes early.</p>
```

Two tips today, maybe ten next month. With a class, each new tip only needs `class="tip"`.

## An id: for one place

Use an id for **one** element that is the only one of its kind on the page. Most of all, for one that a link jumps to:

```html preview
<h2 id="rules">Club Rules</h2>
```

There is one Club Rules part, and a link goes to `#rules`.

If you're not sure, choose a class. It never breaks when a second element comes. An id does.

## One element, both

An element can have a class and an id at the same time. It can even have several classes, with spaces between them:

```html preview
<h2 id="rules" class="important">Club Rules</h2>
```

## Break it on purpose

Give two elements the same id:

```html preview
<h3 id="match">Saturday's match</h3>
<h3 id="match">Sunday's match</h3>
```

The page may even look right, because many browsers still style both. But a link to `#match` always goes to the first one. Later, JavaScript that looks for the element called `match` finds only the first one too. An id must be the only one with its name. Two things of the same kind need a class.

---

## Mission: The shifts belong together

**What you will see**: Morning Shift and Night Shift show in the same color, and The Greenhouse doesn't have that color.

Your page has three small headings: The Greenhouse, Morning Shift and Night Shift. Two of them are shifts, and the station may add an Evening Shift one day.

- Both shift headings have the class `shift`.
- Headings with the class `shift` have a color the other small headings don't have.
