No new theory, just a challenge that uses the CSS of this part: custom properties and a theme, transitions, transforms, animations, dark mode and less movement, and text only for screen readers, with the grids and flex you already know.

The settings page works, but it doesn't look finished: two headings with their buttons one under the other, on a big empty page.

---

## Mission: A settings page that looks finished

**What you will see**: on a computer, the Theme and the Motion settings are two cards side by side, each one with its buttons in a row. On a phone, one card is under the other. Point at a button: its border lights up in the accent color.

- The two settings are each a `section` with the class `setting`, both inside a box with the class `settings`.
- Each setting is a card, with round corners and a background that stands out from the page (`--card-bg`), in both themes.
- The cards stand side by side and fill the box when each one has space for at least 280 pixels.
- When there is less space, they stand one under the other, and nothing comes out sideways.
- In each card, the buttons stand in a row, with at least 8 pixels between them.
- The buttons go on to a new line when there is no space.
- With the mouse over it, a button's border slowly turns the accent color.
- When the system asks for less movement, the border changes at once.

A card that is a `section` keeps its heading, and the heading keeps the page's outline.
