When you lend your tablet to a friend, you might log out of your games first, so they start new. The game doesn't forget everything forever: it only forgets **you**. A page can forget one thing it saved, and keep the rest.

## `removeItem`

`removeItem` deletes what is saved under one key:

```js
localStorage.setItem("nickname", "Speedy");
localStorage.removeItem("nickname");

console.log(localStorage.getItem("nickname"));
```

```text
null
```

After `removeItem`, the key is gone, as if it had never been saved: `getItem` gives `null` again, like on a first visit. Other keys stay where they are.

## Forget, then start again

Deleting the saved value doesn't change the page that is open: the variables still hold the old values. So a "forget" button usually does two things. It removes the saved value, and it puts the page back the way a first visit would see it:

```html preview
<p id="shown"></p>
<button type="button" id="forget">Forget my name</button>
<script>
  const show = () => {
    const name = localStorage.getItem("nickname") ?? "stranger";
    document.querySelector("#shown").textContent = `Hello, ${name}!`;
  };
  localStorage.setItem("nickname", "Speedy");
  show();

  document.querySelector("#forget").addEventListener("click", () => {
    localStorage.removeItem("nickname");
    show();
  });
</script>
```

The page says "Hello, Speedy!". Click the button: "Hello, stranger!", because nothing is saved any more.

## Not the same as saving an empty text

`setItem("nickname", "")` saves an empty text. The key is still there, and `getItem` gives `""`, not `null`. For `??`, that's a value, so the default never comes. To forget, remove the key.

## Break it on purpose

Remove the wrong key: `removeItem("nickname ")`, with a space at the end. Nothing fails: there was nothing under that key, so nothing happens. But the real nickname is still saved, and comes back on the next visit. Keys must be written exactly the same everywhere.

---

## Mission: Forget my settings

**What you will see**: under the text of the settings, a button like "Forget my settings". Click it: the page says `Theme: Same as my device` and `Motion: full`, and after a reload, it still does.

On a computer that many people use, a visitor may want the site to forget their choices.

- Under `#settings-text`, add a button with the id `reset-settings`.
- A click on it deletes the saved settings.
- It puts the page back as on a first visit: theme `system`, motion `full`, with the System button pressed, and the text of the settings showing them.
- It doesn't save anything.
- After a reload, nothing is saved.
- A theme chosen later is saved again.

Removing the saved settings doesn't change what the page shows: do both.
