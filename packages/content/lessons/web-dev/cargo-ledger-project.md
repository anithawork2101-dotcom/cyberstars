No new theory: this project uses everything from parts 1 and 2. Lists, boxes and layout, and scripts that read the page, count, loop, use functions and build elements. You build your own page from an empty folder: the ledger of the cargo bay, the list where every crate is written down.

This project is separate from the station site. When you're not sure how to do a step, open the lesson it comes from again.

## Your files

The folder starts empty. Make three files with **New file**: `index.html`, `style.css` and `script.js`.

## What you will see

The cargo master writes down every crate that comes on board, and she wants a page that does the sums for her. A finished ledger could show something like this:

```text
Cargo Ledger

• Water: 120 kg
• Seeds: 15 kg
• Tools: 230 kg
• Medicine: 85 kg

Total: 450 kg in 4 crates
Average: 113 kg

[New crate]
```

## The steps

Build it in this order:

1. **The frame.** `index.html` is in English and can show any letter. It is called **Cargo Ledger** on its tab and in its only biggest heading.
2. **The crates.** A list with the id `cargo` has at least four crates. Each crate says what is inside, in a `span` with the class `item`. It also has its weight in kilograms: only the number, in a `span` with the class `weight`. For example: **Water: 120 kg**.
3. **The script.** The head loads `script.js`, and the script waits for the whole page.
4. **The total.** Under the list, a paragraph with the id `total` says something like `Total: 450 kg in 4 crates`. It's worked out from the weights on the page.
5. **The average.** A paragraph with the id `average` shows the average weight, rounded to the nearest whole number: `Average: 113 kg`.
6. **A new crate.** A button with the id `new-crate` says **New crate**. It adds a crate of `Spare parts` that weighs `25` kg at the end of the list, built with `createElement`. The total and the average change with it.
7. **A column.** In `style.css`, every element counts its border and padding in its width. The page sits in a column in the middle of the window, at most `640px` wide.
8. **A panel.** The list is a panel of its own: a background the page doesn't have, space inside, a border and round corners.
9. **Easy to read, on a phone too.** Everything is easy to read, and nothing comes out sideways on a phone.

Run the tests when you like. They tell you which steps are still missing.
