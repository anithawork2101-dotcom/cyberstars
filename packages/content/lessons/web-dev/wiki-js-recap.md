No new theory, just a challenge that uses the JavaScript of this part: arrow functions, default values, scope, `style`, bubbling, `closest`, one script for every page and `aria-expanded`. It needs the CSS of this part too, `position` most of all, and `keydown` from the boarding form.

This time, nobody tells you which lines to write. Read what the visitor needs, and put it together yourself. When you're not sure how to do a part, open the lesson it comes from again.

---

## Mission: A menu that opens from a button

**What you will see**: open any page. The header shows the station's name and the Menu button, and no links. Click **Menu**: the five links open one under the other, just under the header, over the page. The page under them doesn't move. Press Escape, or click somewhere on the page: the menu closes.

On a phone, the menu still takes space at the top of every page. Most sites keep their menu closed behind a button, and open it over the page only when the visitor asks for it.

- On every page, the menu starts closed.
- `#menu-button` opens and closes it, and its `aria-expanded` always says which.
- When it's open, the menu's links stand one under the other, under the header and over the page.
- The page doesn't move when the menu opens.
- The menu has its own background, so the page doesn't show through it.
- Escape closes the menu, wherever the focus is, on a link of the menu too.
- A click on the page outside the header closes it too.
- A page without the button still shows no error.
- Everything else works as before: the header sticks to the top, Back to top, the wiki's cards.

The click on the button goes up to the page too.
