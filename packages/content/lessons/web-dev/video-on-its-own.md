Open the website of a shop or a hotel, and there is often a short video at the top: waves on a beach, a busy kitchen, a city at night. It starts by itself, it makes no sound, and when it ends, it starts again. Three attributes of `<video>` do that.

## `autoplay`

`autoplay` asks the browser to start the video as soon as the page opens. Try it alone:

```html preview
<video src="video/launch.webm" autoplay controls></video>
```

Nothing moves! The video waits on its first picture, as if `autoplay` weren't there. Browsers don't let a page start a video with sound by itself. Think of a page that suddenly makes noise while you are in class or on a bus. The browser stops that.

## `muted`

`muted` turns the video's sound off. A video with no sound **may** start by itself:

```html preview
<video src="video/launch.webm" autoplay muted controls></video>
```

Now the rocket goes up by itself, and you hear nothing. Look at the sound button in the bar: it shows the sound is off. A visitor can still press it to hear the video.

## `loop`

The video is five seconds long. Then it stops on its last picture: an empty sky. `loop` starts it again from the beginning each time it ends:

```html preview
<video src="video/launch.webm" autoplay muted loop controls></video>
```

Watch it for ten seconds: the rocket leaves again and again.

All three have no value, like `controls`. Their order doesn't matter.

## Keep the buttons

A video that moves by itself can make it hard to read the page next to it. For some people, it's much worse than that. So even a video that plays by itself keeps `controls`. That way, anyone can pause it.

## Break it on purpose

Take `muted` out of the last example. The video stops moving: the browser refuses to start a video with sound, and `loop` has nothing to repeat. If a video with `autoplay` stays still, check for `muted` first.

Then put `muted` back, and take out `loop`. The rocket leaves once, and the video stops on the empty sky.

---

## Mission: The pad camera

**What you will see**: on the dashboard, a second video, with a heading like "The launch pad, live". It starts by itself when the page opens, makes no sound, and starts again each time it ends. The launch video under it stays on its first picture until someone presses play.

The station has a camera on the launch pad, and the crew wants to see it on the dashboard all the time. The course has one video, so the pad camera shows `video/launch.webm` too.

- On the dashboard, in its main part, add a video of `video/launch.webm` with the id `pad-camera`.
- It plays by itself when the page opens, with no sound.
- It starts again each time it ends.
- The pad camera has its buttons, so a visitor can pause it.
- The launch video (`#launch-video`) still waits for a click on play.
