You fill in a long sign-up form and press the button at the bottom. A red line shows: "Something is wrong." Which box? You scroll up and down to look for it. A good form puts each message right next to the box it's about, so you see at once what to fix, and where.

## A place for the message

Give the message its own element, right after its box, empty at first:

```html
<label for="nickname">Nickname</label>
<input id="nickname" name="nickname" required />
<p id="nickname-error"></p>
```

An empty paragraph shows nothing. The script writes in it when the answer is wrong.

## Write it, and remove it

The club wants nicknames with no spaces in them. The browser can't check that with `required`, so the script does it, when the form is sent:

```html preview
<form id="join">
  <label for="nickname">Nickname</label>
  <input id="nickname" name="nickname" required />
  <p id="nickname-error"></p>
  <button type="submit">Join</button>
</form>
<p id="welcome"></p>
<script>
  const nickname = document.querySelector("#nickname");
  const nicknameError = document.querySelector("#nickname-error");
  const welcome = document.querySelector("#welcome");

  document.querySelector("#join").addEventListener("submit", (event) => {
    event.preventDefault();
    if (nickname.value.includes(" ")) {
      nicknameError.textContent = "A nickname has no spaces";
      welcome.textContent = "";
    } else {
      nicknameError.textContent = "";
      welcome.textContent = `Welcome, ${nickname.value}!`;
    }
  });
</script>
```

Type `Space Rocket` and click **Join**. Under the box, the page says `A nickname has no spaces`. Change it to `SpaceRocket` and click again. The message is gone, and the page says `Welcome, SpaceRocket!`.

The `else` does two jobs. It welcomes the visitor, and it empties the message, with `textContent = ""`. The `if` does two jobs too. It writes the message, and it empties the welcome of an earlier try, so the page never says both at once.

## Break it on purpose

Leave out the line that empties the message:

```js
} else {
  welcome.textContent = `Welcome, ${nickname.value}!`;
}
```

Type `Space Rocket` and click. Then change it to `SpaceRocket` and click again. The page says `Welcome, SpaceRocket!`, and still `A nickname has no spaces` under the box. The visitor fixed it, but the page says they didn't. When you write a message, you must also remove it.

---

## Mission: Next to the name

**What you will see**: book with three spaces as the name. Right under the name box, the page says `Please write your name`, and nothing shows under the buttons. Type `Ida Moreau` and book again: the message is gone, and under the buttons, the page says `Seat booked for Ida Moreau on SL-102`.

When a passenger books with a name of only spaces, your page says `Please write your name` under the buttons, far from the name box. A passenger may not even see it there.

- Right after the name box, add an element with the id `passenger-error`. It's empty when the page opens.
- It says `Please write your name` when a passenger books with a name of only spaces.
- Then `#confirmation` is empty, even after an earlier booking.
- When a passenger books with a real name, `#passenger-error` is empty again.
