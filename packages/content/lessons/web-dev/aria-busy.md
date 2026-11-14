You call a friend and ask a question. They say: "Wait, I'm looking it up." You don't hang up. And you don't think the quiet means "I don't know". You wait, because your friend told you they're busy. A page can say the same thing to a screen reader.

Remember: a **screen reader** is an app that reads the page out loud, for people who can't see the screen.

## A list that isn't ready

Soon the tracker will get its starships from far away, over the internet. That takes a moment: half a second, sometimes more. During that moment the list is empty. Then it fills up, maybe one card at a time.

If you can see the page, you just wait for the cards. A screen reader is different. It reads what is on the page as soon as it is there. It could read an empty list, or only the first card. The listener would think that's all there is.

## `aria-busy`

`aria-busy="true"` means: this part of the page is still changing, so wait before you read it.

```html
<ul id="results" aria-busy="true"></ul>
```

When a screen reader finds it, it waits until the part is no longer busy. Then it reads the whole part. Once everything has arrived, a script changes the value to `aria-busy="false"`. You will write that script in a later lesson.

`aria-busy` changes nothing on the screen:

```html preview
<!-- show -->
<p aria-live="polite">Loading the results...</p>
<ul aria-busy="true"></ul>
<!-- /show -->
```

What do you see? Only the line "Loading the results...". The list is there, but it is empty, and your eyes can't tell that it's busy. That's why the page needs the line too. The line has `aria-live`, which you met on the settings page. So a screen reader also reads the line out each time a script changes it.

The two work together. The line tells **everyone** what is happening. `aria-busy` tells a screen reader to wait for the list.

## Break it on purpose

Put `aria-busy="true"` on the whole `<main>`, not on the list. The screen doesn't change. But now a screen reader waits for everything in `<main>`: the heading, the loading line and the list. While the page loads, it says nothing at all. So mark only the part that is still changing.

Then write `aria-busy="yes"`. Again, the screen doesn't change. But the browser only knows `"true"` and `"false"`. For any other value, it acts as if the part is not busy, so the screen reader doesn't wait.

---

## Mission: The tracker is loading

**What you will see**: under the tracker's first sentence, a line that says something like `Loading the starships...`. Under it, the list of starships, still empty.

The starships don't come yet, but the tracker can already say they're on the way. Open `tracker.html`.

- Above the list with the id `ships`, add a paragraph with the id `tracker-status`.
- The paragraph's text has the word `Loading`.
- A screen reader reads the paragraph out each time it changes, politely: it first finishes what it is saying.
- The list with the id `ships` says it is still loading.
- Nothing else on the page says it is busy.
- The list stays empty for now, and the starship card stays in its `<template>`.
