At a train station, a voice says "The train to the airport leaves from platform 4". You don't have to look at a screen: the news comes to you. A screen reader reads a page from top to bottom. But when a script changes a line further up or down, it says nothing. Unless that line asks to be read out loud.

## Changes are silent

Click a button that writes "Saved!" in a paragraph. Someone who sees the page sees it. Someone with a screen reader hears "button" when they press it, and then nothing. The screen reader is still on the button, and doesn't know the paragraph changed.

## `aria-live`

`aria-live` turns an element into a **live region**: each time its text changes, the screen reader reads the new text out loud, wherever the visitor is on the page.

```html preview
<button type="button" id="save">Save</button>
<p id="note" aria-live="polite"></p>
<script>
  document.querySelector("#save").addEventListener("click", () => {
    document.querySelector("#note").textContent = "Your game is saved";
  });
</script>
```

The page looks the same as without it. But with a screen reader, a click on Save makes it say "Your game is saved".

`"polite"` means: wait until the screen reader finishes what it's saying, then read the change. `"assertive"` interrupts at once. Only use `"assertive"` for something urgent, like an error that stops everything. Being interrupted for every small change is tiring.

## Ready before it changes

A live region must be on the page, already empty, **before** its text changes. The screen reader watches it from the moment the page opens. A paragraph added by a script together with its text is often not read at all. So put the empty live region in the HTML, and let the script only change its text.

## Break it on purpose

Put `aria-live` on the button, not on the paragraph. The button's own text never changes, so nothing is ever read: the attribute goes on the element whose text changes. Then make every line of the page live. A screen reader now reads every small change, one after the other, and the visitor can't follow anything. Only make live what a visitor needs to hear.

---

## Mission: Heard, not only seen

**What you will see**: click Dark. Under the reset button, the page says `Saved in this browser`, and a screen reader reads both the new theme and that note. Click "Forget my settings": `Your settings are forgotten`.

On the settings page, a click changes the theme's line and saves the settings, but a screen reader says nothing about either.

- `#current-theme` is read out loud, politely, each time it changes.
- Under `#reset-settings`, add a paragraph with the id `saved-note`, empty when the page opens.
- It's also read out politely when it changes.
- Each time the settings are saved, `#saved-note` says `Saved in this browser`.
- When they are forgotten, it says `Your settings are forgotten`.

The live region is in the HTML from the start, empty.
