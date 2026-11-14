No new theory: this project uses everything from the first six parts. Grids that fit every width, media queries written phone first, and a script that works with arrays, objects, dates and timers. You build your own page from an empty folder: the status page of a **rover**, a small car that drives on Mars.

This project is separate from the station site. When you're not sure how to do a step, open the lesson it comes from again.

## Your files

The folder starts empty. Make three files with **New file**: `index.html`, `style.css` and `script.js`.

## What you will see

The rover team opens this page all day: on the big screen in the control room, and on their phones on the way home. The page shows the rover's readings in a grid of cards, a log of the day next to them, a clock, how many days the rover has been on Mars, and what to check. It's clear at every width.

## The steps

Build it in this order:

1. **The frame.** An English page that can show any letter and is made for the width of a phone, with one sentence about the rover for search engines. It's called **Rover Status** on its tab and in its only biggest heading. No heading level is skipped.
2. **The parts.** A header holds the biggest heading and a paragraph with the id `clock`. It also holds a paragraph with the landing day in a `span` with the id `landing`, written like `2031-02-18`, and an empty `span` with the id `days-on-mars`. Then a `main` with the class `layout` holds a section with the class `readings`, and an `aside` with the id `log`. The log has a heading, a list of what the rover did today, a button with the id `refresh`, and a paragraph with the id `updated` that says `Not updated yet`. After the main part, a section with the id `checks` has a heading and two paragraphs, with the ids `warnings` and `summary`. A footer ends the page.
3. **The readings.** The readings section holds at least four readings, each one an `article` with the class `reading`. Each reading has its name in an `h2`, and its number, from 0 to 100, in a `span` with the class `value`, followed by its unit. The battery's reading has the id `battery`. Each reading has its own background, with its name and its number in the middle across.
4. **A grid for every width.** The readings take as many columns as fit, each one at least 200 pixels wide, all the same width, across the whole section, with at least 16 pixels between them.
5. **The battery first.** When the readings stand in at least two columns, the battery's reading is as wide as two. When they stand in one column, on a phone, it takes one, like the others.
6. **The log next to them.** On a computer, the log stands to the right of the readings, between 250 and 350 pixels wide. In a window 700 pixels wide or narrower, it goes under them. On a phone, the readings stand one under the other, and nothing comes out sideways at any width.
7. **What to check.** The head loads `script.js`, which waits for the page. It makes an array of the readings, each one an object with its name and its number. `#warnings` says `Check: `, then the names of the readings under 20, in the page's order, with a comma and a space between them. When none is under 20, it says `All readings are fine`.
8. **The summary.** `#summary` says how many readings there are, then `readings, highest: `, the name of the reading with the highest number, and that number in brackets: `5 readings, highest: Wheels (91)`.
9. **Mission time.** `#clock` says `Mission time: `, then the time with hours from 00 to 23, minutes and seconds, each one in two digits, like `14:05:09`. It shows as soon as the page opens, and moves on every second.
10. **Days on Mars.** `#days-on-mars` says how many whole days have passed since the landing day, then ` days on Mars`. A day that has only started doesn't count yet.
11. **Refresh.** A click on `#refresh` makes `#updated` say `Updated at `, then the time of the click the way American English writes it, like `2:05 PM`.

The tests also try your `style.css` and `script.js` on pages with other readings and another landing day. Those pages only have the elements, ids and classes named in the steps. So style your page, and find its parts, by those names.

Run the tests when you like. They tell you which steps are still missing.
