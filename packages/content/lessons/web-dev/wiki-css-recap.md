No new theory, just a challenge that uses the CSS of this part: flex (side by side, a new row, growing, a size to start from, where the items sit) and position (a place inside a box, which one is on top), with what you know about colors and contrast.

Open a news website on a computer. A picture often stands next to the first lines of the story. It has a short **caption** (a few words about the picture) printed on the picture itself, along its bottom edge. On a phone, there is no space next to the picture, so the text goes under it.

This time, nobody tells you which property goes on which box. Look at how the page should look, and decide yourself which box gets which property. If something goes to a strange place, Inspect it: the browser draws the box where it really is.

---

## Mission: A picture with a caption

**What you will see**: on a computer, the picture stands on the left, and the two sentences stand next to it. On the picture, along its bottom edge, a small label says something like `Seen from a supply ship`, in its own colors. On a phone, the picture sits above the sentences.

Your home page, `index.html`, starts with the station's picture. On a computer, it stands alone on its line, with empty space on its right, and the two sentences come after it.

First, the HTML:

- Put the picture in a `div` with the class `photo`: the picture box.
- After the picture, in the same `div`, add the caption: a `span` with the class `caption`.
- Put the two sentences under the picture (about the Earth and the six people) in a `div` with the class `welcome-text`.
- Put both `div`s in one more `div`, with the class `welcome`.

Then the look:

- The caption sits inside the picture box, along its bottom edge.
- The caption has its own background, and its words are easy to read on it: a contrast of at least 4.5:1.
- On a computer, the picture box stands on the left of the sentences, with at least 16 pixels between them.
- On a phone (375 pixels wide), the picture box sits above the sentences, and nothing comes out sideways.
- The picture box ends where its picture ends, even next to a long text, so the caption stays on the picture. The tests also try other pictures, with other sentences, short and long.
- When the page scrolls, the header stays over the picture and its caption.
- The rest still works: the wiki's cards go on to a new row when there's no space, the fact box comes first on the wiki pages, and Back to top waits in its corner.

In a row, an item grows to the height of the tallest one, unless you say something else.
