A TV remote has one big button. Press it, and the film plays. Press it again, and it pauses. The video's own buttons on a page are like a tiny remote stuck to the screen. A script can make its own remote, anywhere on the page.

## `play()` and `pause()`

A `<video>` or an `<audio>` element has methods to control it: `play()` starts it, and `pause()` stops it where it is:

```html preview
<video id="film" src="video/launch.webm" width="320"></video>
<button type="button" id="start">Play</button>
<button type="button" id="stop">Pause</button>
<script>
  const film = document.querySelector("#film");
  document.querySelector("#start").addEventListener("click", () => {
    film.play();
  });
  document.querySelector("#stop").addEventListener("click", () => {
    film.pause();
  });
</script>
```

The video has no `controls`, so these two buttons are the only way to start and stop it. Press Play, then Pause, then Play again: it goes on from where it stopped.

## `paused`: is it stopped?

The element's `paused` property is `true` while it isn't playing, and `false` while it plays. With it, one button can do both:

```html preview
<video id="film" src="video/launch.webm" width="320"></video>
<button type="button" id="remote">Play</button>
<script>
  const film = document.querySelector("#film");
  const remote = document.querySelector("#remote");
  remote.addEventListener("click", () => {
    if (film.paused) {
      film.play();
      remote.textContent = "Pause";
    } else {
      film.pause();
      remote.textContent = "Play";
    }
  });
</script>
```

The button says what it will do next: "Play" while the video is stopped, "Pause" while it plays. That's what visitors expect from a remote.

## A click lets the sound play

Browsers don't let a page start a video with sound by itself: you saw it with `autoplay`. But `play()` called from a click is fine, because the visitor asked for it. So a play button can start a video with its sound.

## Break it on purpose

Call `play()` without a click, straight in the script, on a video with sound. Nothing plays, and the console says the browser refused: `play() failed because the user didn't interact with the document first`. It's the same rule as `autoplay`: sound waits for the visitor.

Then write `film.play` without brackets in the button's function. The click does nothing: without `()`, you only name the method, you don't call it.

---

## Mission: A remote for the launch

**What you will see**: under the last launch's caption, a button that says `Play`. A click plays the video, and the button says `Pause`. Another click pauses it, and the button says `Play` again.

The crew wants a big, clear button to play the launch video, under its caption.

- In the last launch's panel, add a button with the id `play-launch`, which says `Play`.
- A click while the launch video is stopped plays it, and the button says `Pause`.
- A click while it plays pauses it, and the button says `Play`.
- The video keeps its own buttons.

`paused` tells you which of the two the click should do.
