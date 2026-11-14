No new theory: this project uses everything from the first three parts. Tables, the selectors of part 3, and a script that reads data, decides, filters, sorts and switches classes. You build your own page from an empty folder: a launch board for the station's rocket pads.

This project is separate from the station site. When you're not sure how to do a step, open the lesson it comes from again.

## Your files

The folder starts empty. Make three files with **New file**: `index.html`, `style.css` and `script.js`.

## What you will see

The launch crew watches this board all day. Make it clear, and make it keep itself up to date. A launch can be `Scheduled` (planned), `Scrubbed` (called off for today) or `Launched`.

## The steps

Build it in this order:

1. **The frame.** An English page that can show any letter, called **Launch Board** on its tab and in its only biggest heading.
2. **The table.** A table with the id `launches`, with a caption of your choice. Its header row, in a `thead`, has **Rocket**, **Pad**, **Time** and **Status**. Each one is a header that says it's the label of its column.
3. **The launches.** The table's body has at least five launches, with at least one of each status: `Scheduled`, `Scrubbed` and `Launched`. You write a time like `09:15`. Every cell of a launch has the class of its column: `rocket`, `pad`, `time` and `status`.
4. **Lines and stripes.** In `style.css`, the table is as wide as its column. It has single lines between its cells, and zebra stripes in its body.
5. **The mouse.** A row lights up when the mouse is over it, unlike any other row.
6. **Statuses.** Every status cell is bold, and no other cell is. A scrubbed launch's row has a line through it.
7. **Easy to read.** Everything is easy to read, and nothing comes out sideways on a phone.
8. **Status classes.** The head loads `script.js`, which waits for the page. It gives every row the class of its status, in small letters: `scheduled`, `scrubbed` or `launched`.
9. **The summary.** A paragraph with the id `summary` counts the launches by status: `3 scheduled, 1 scrubbed, 1 launched`.
10. **The next launch.** A paragraph with the id `next-launch` names the earliest scheduled launch: `Next launch: Falcon at 09:15`. When there is none, it says `No launch scheduled`.
11. **A toggle.** A button with the id `hide-scrubbed` says **Hide scrubbed**, and isn't pressed for a screen reader. A click hides the scrubbed launches, with the class `hide-scrubbed` on the table. Then the button says **Show scrubbed** and is pressed. A second click brings them back.

Both paragraphs follow the table: change a launch in the HTML, and they change too.

Run the tests when you like. They tell you which steps are still missing.
