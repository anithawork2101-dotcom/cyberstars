An address on an envelope is one thing, but you write it on several lines: the name, the street, the town. A poem is the same: one poem, many short lines.

Here, it would be wrong to make each line its own paragraph. It's one address, not three ideas. What you want is a new line **inside** a paragraph.

## `<br>`

`<br>` is short for **break**: a line break. It's like pressing Enter, but the browser listens to this one:

```html preview
<p>
  Sam Green<br />
  12 Oak Street<br />
  Bristol
</p>
```

One paragraph, three lines. Like `<meta>`, `<br>` has nothing inside it, so it has no closing tag. You can write the `/` before `>`, or leave it out.

There is no `<br>` after the last line. The paragraph ends there anyway.

## When not to use it

`<br>` is for line breaks that are part of the text itself: an address, a poem, the lines of a song. It's **not** for adding space between things.

```html preview
<p>Clean your room.</p>
<br />
<br />
<p>Feed the cat.</p>
```

This moves the second paragraph further down, but it's the wrong tool. The paragraphs are different ideas, so `<p>` already puts space between them. Later, CSS will let you choose exactly how much space. Many `<br>`s are hard to change, and they mean nothing.

And if each line is its own idea, like your station's rules, keep them as different paragraphs.

## Break it on purpose

Write the address with Enters only, and no `<br>`:

```html preview
<p>
  Sam Green
  12 Oak Street
  Bristol
</p>
```

You saw this in the last lesson: the Enters become spaces, and the whole address shows on one line.

---

## Mission: The station's address

**What you will see**: in your first part, under About the Station, the station's address on three lines. For example:

```text
Orbital Station 7
Docking Ring B
Low Earth Orbit
```

Your `index.html` has its parts, and the rules at the end. Visitors also need to know where to find you.

- Your first `<h2>` part has the station's address.
- The whole address is in one paragraph.
- The address shows on at least three lines.
