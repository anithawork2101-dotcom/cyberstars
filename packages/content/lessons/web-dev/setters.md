At a library's desk, you don't put the books on the shelves yourself. You hand them over, and the librarian checks them first: is it ours, is a page missing, which shelf does it go on? Only then is the book put away. A value can have a desk like that too.

## Messy data

APIs aren't always tidy. A role might come as `"  Pilot  "`, with spaces around it, or as `""`, empty. Written as it is, the crew panel would show `Orion,   Pilot` or `Lyra, `. You could tidy it in the panel. But then every other page that uses a crew member must remember to tidy it too.

## A setter

A **setter** is a method that runs when a value is **written**. Write `set` in front of it. It gets the new value as its parameter, and decides what to keep:

```js
class Pupil {
  get nickname() {
    return this._nickname;
  }

  set nickname(value) {
    const clean = String(value ?? "").trim();
    this._nickname = clean === "" ? "No nickname" : clean;
  }
}

const mia = new Pupil();
mia.nickname = "  Mimi ";
console.log(mia.nickname);
mia.nickname = "";
console.log(mia.nickname);
```

```text
Mimi
No nickname
```

`mia.nickname = ...` looks like a plain assignment, but it runs the setter. The tidy value is kept under another name, `_nickname`, and the getter with the same name gives it back. A setter almost always comes with its getter.

The constructor's `this.nickname = nickname` goes through the setter too. So a new object is tidy from the start, and stays tidy after every change.

## Break it on purpose

Inside the setter, write `this.nickname = clean;` instead of `this._nickname`. Writing `nickname` runs the setter again, which writes `nickname` again, and again. The browser gives up: `too much recursion`, which means a function that calls itself with no end. That's why the value is kept under a name of its own. Then leave out the getter. `mia.nickname` is `undefined`, because there's no way left to read it.

---

## Mission: Tidy roles

**What you will see**: if the API sends Orion's role as `"  Pilot  "` and Lyra's as `""`, the crew panel shows `Orion, Pilot` and `Lyra, Crew`.

The crew panel should show every role tidy, whatever the API sends.

- `CrewMember` has a setter `role`.
- It keeps the role without the spaces at its ends.
- When nothing is left, it keeps `Crew`.
- `CrewMember` has a getter `role` that gives the role back.
- A role is tidied when a crew member is made, and every time it's written later.
- With tidy roles, the crew panel looks as before.

The setter keeps the value under another name, or it calls itself.
