No new theory, just a challenge that uses the CSS of this part: grids with their columns, shares and rows, items over several cells, where an item sits in its cell, the layout drawn in words, `repeat()`, `minmax()` and `auto-fit`, flex or grid, media queries and their breakpoints, the phone first, and pictures for each screen.

At the end of the dashboard, the station's picture and the photo of the Earth come one under the other. On a computer, there is a lot of empty space next to them.

---

## Mission: The gallery

**What you will see**: on a computer, the two parts stand side by side, each one half of the page's width: the station on the left, with its picture and caption in the middle of its part, and the Earth on the right. On a phone, they are one under the other, like now.

- A box with the class `gallery` holds the two parts, the station's and the Earth's.
- Each part is a `section`, with its heading and its figure.
- The two parts stand side by side, as wide as each other and across the whole gallery, with at least 16 pixels between them.
- That's as long as each part can be at least 300 pixels wide. Narrower than that, they stand one under the other.
- In the station's part, the picture and its caption stand in the middle across, each one only as wide as it is.
- The photo of the Earth is still as wide as its figure, and still the square one on a phone.
- Nothing comes out sideways, on a phone too.

Two parts of 300 pixels, a gap, and the page's padding: work out the breakpoint before you write it.
