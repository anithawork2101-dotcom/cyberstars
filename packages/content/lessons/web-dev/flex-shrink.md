On a full bus, everyone moves a little closer to make space. But the driver's seat never gets smaller. When there isn't enough space, some things should give up space, and others should keep their size.

## When the line is too small

When the items of a flex container don't fit in their line, they all get narrower, the wide ones more than the narrow ones. In a chat app, that presses the round picture next to a long message:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
    font-family: Verdana, sans-serif;
  }

  .avatar {
    background-color: #ffd166;
    color: #0b1d3a;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    text-align: center;
    line-height: 48px;
  }

  .text {
    background-color: #1e3a5f;
    padding: 0 12px;
    margin: 0;
  }

  /* show */
  .message {
    display: flex;
    gap: 8px;
  }
  /* /show */
</style>
<div class="message">
  <div class="avatar">L</div>
  <p class="text">Lena: the bus leaves at 7:30 tomorrow, so be at the school gate by 7:15, and bring your ticket.</p>
</div>
```

The picture should be a circle, 48 pixels wide. But the message is long, so the line is too small, and the picture gives up space too: it becomes a narrow oval.

## `flex-shrink`

`flex-shrink` says if an item gives up space when the line is too small. Without it, you get `1`: the item gets narrower with the others. With `0`, it never gets smaller than its size:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
    font-family: Verdana, sans-serif;
  }

  .avatar {
    background-color: #ffd166;
    color: #0b1d3a;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    text-align: center;
    line-height: 48px;
  }

  .text {
    background-color: #1e3a5f;
    padding: 0 12px;
    margin: 0;
  }

  /* show */
  .message {
    display: flex;
    gap: 8px;
  }

  .avatar {
    flex-shrink: 0;
  }
  /* /show */
</style>
<div class="message">
  <div class="avatar">L</div>
  <p class="text">Lena: the bus leaves at 7:30 tomorrow, so be at the school gate by 7:15, and bring your ticket.</p>
</div>
```

The picture keeps its 48 pixels and stays round. The message gives up the space instead: its text goes on to more lines.

An item can't get narrower than its longest word, because a word never breaks in the middle. So when everything is already as narrow as it can be, the line comes out of its box.

## Break it on purpose

Give `flex-shrink: 0` to the message too:

```css preview
<style>
  body {
    background-color: #0b1d3a;
    color: #f0f4ff;
    font-family: Verdana, sans-serif;
  }

  .avatar {
    background-color: #ffd166;
    color: #0b1d3a;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    text-align: center;
    line-height: 48px;
  }

  .text {
    background-color: #1e3a5f;
    padding: 0 12px;
    margin: 0;
  }

  /* show */
  .message {
    display: flex;
    gap: 8px;
  }

  .avatar,
  .text {
    flex-shrink: 0;
  }
  /* /show */
</style>
<div class="message">
  <div class="avatar">L</div>
  <p class="text">Lena: the bus leaves at 7:30 tomorrow, so be at the school gate by 7:15, and bring your ticket.</p>
</div>
```

Now nothing gives up space. The message stays on one long line, and comes out of its box, so you scroll sideways to read it. Something in the line has to give up space. Keep `flex-shrink: 0` for the item that must keep its size.

---

## Mission: The name in one piece

**What you will see**: on a phone, `Orbital Station 7` stays on one line on the left of the header. The menu next to it takes the space that is left, and its links go on to more lines.

Make the panel of your preview as narrow as a phone, and look at the header. There isn't space for the station's name and the whole menu, so both get narrower, and the name breaks onto two lines.

- On a phone, the station's name stays on one line, next to the menu.
- The menu gives up space instead.
- Nothing comes out sideways.
- On a computer, the header looks as before.
