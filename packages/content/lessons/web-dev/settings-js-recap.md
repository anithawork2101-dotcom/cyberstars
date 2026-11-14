No new theory, just a challenge that uses the JavaScript of this part: methods and `this`, `null`, `undefined`, `?.` and `??`, JSON, `localStorage`, Map and Set, the focus and live regions, and a script on every page that runs before the page shows.

The settings page has had two Motion buttons, Full and Less, since the beginning of this part. They still do nothing. The site already knows how to stand still for a device that asks for less movement. Now a visitor can ask for it too.

---

## Mission: Less motion, on request

**What you will see**: click Less. The page says `Motion: less`, the Less button is pressed, and the settings are saved. Open the dashboard: the LIVE label stands still, and the cards don't go up with the mouse over them. Click Full on the settings page, and everything moves again.

- A click on a motion button chooses its motion.
- The `settings` object keeps it and saves the settings.
- `#current-motion` and the text of the settings show it.
- Only that motion's button says it's pressed.
- With the motion `less`, `<html>` has the class `less-motion`: on the settings page at once, and on every page after it, before the page shows.
- With `full`, it doesn't have that class.
- With the class `less-motion`, the site stands still like it does when the device asks for less movement.
- That means: the LIVE label doesn't move, the cards have no transition and don't go up with the mouse over them, and the theme icons don't turn.
- Bringing settings, or forgetting them, sets the motion buttons and the class too.

The saved settings already hold the motion: `theme.js` can read it with the theme.
