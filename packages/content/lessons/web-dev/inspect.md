When a car breaks, a mechanic doesn't guess what's wrong. They open it and look. Browsers let you look inside too. The tool is called **Inspect**, and it shows every box of a page, with its padding, border and margin.

## Opening it

In Chrome, Edge or Firefox, right-click any part of a page and choose **Inspect**. A panel opens with two halves:

- on one side, the page's HTML. Move the mouse over a line, and the browser lights up that element's box on the page;
- on the other side, the **Styles** of the element you chose: every CSS rule for it, yours and the browser's.

It works in your preview too: right-click inside it.

## The box picture

Under the styles, or in a tab called **Computed** or **Layout**, there is a picture of the element's box, as rectangles inside rectangles:

```text
margin
  border
    padding
      content  (width × height)
```

Each layer shows its numbers on each side. When you move the mouse over the page, the browser colors the layers in the same way: the content blue, the padding green, the margin orange.

## Finding a gap you didn't make

Here Inspect is very useful. Say there is space above a heading, and you never wrote any. Inspect the heading: you see the orange margin above it, and the styles say where it comes from. Often it comes from the **browser's own styles**: headings and paragraphs have margins that nobody wrote.

Once you know, you can change it in your own CSS:

```css preview
<style>
  /* show */
  h2 {
    margin-top: 0;
  }
  /* /show */
</style>
<p>Our club has two parts.</p>
<h2>Board Games</h2>
<p>We keep them in the cupboard by the window.</p>
```

You can even try values right there, in the Styles panel. They change the page at once, but only until you reload it. So copy the value that works into your file.

## Break it on purpose

Change a value in Inspect's Styles panel, then reload the page. It's gone! Inspect is for trying things and finding out. The real change always goes in your files.

---

## Mission: The gap under the menu

**What you will see**: on every page, the biggest heading sits right under the menu, with no gap.

On every page of your site, there is a gap between the menu and the page's biggest heading. You never wrote it. Use Inspect on the biggest heading and look at the orange layer above it.

- The biggest heading has no margin at its top.
