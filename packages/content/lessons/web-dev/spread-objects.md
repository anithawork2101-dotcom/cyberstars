When you try on clothes in a game, the game shows your character in the new jacket, but your real clothes are saved. Press Undo, and the old jacket is back. The game never drew over the first one: it made a copy with one change.

## Changing an object changes it for everyone

An object in a variable isn't copied when you give it to other code. Change a value, and everyone who holds that object sees the change:

```js
const mia = { name: "Mia", team: "red" };
const player = mia;
player.team = "blue";

console.log(mia.team);
```

```text
blue
```

Mia changed team, though the code only touched `player`. Both names point at the same object.

## `...`: spreading an object

Three dots inside curly brackets spread an object's keys and values into a **new** object. Write the key you want to change after it:

```js
const tryOn = { ...mia, team: "blue" };

console.log(tryOn.team);
console.log(mia.team);
```

```text
blue
red
```

`tryOn` has Mia's name and a new team. `mia` doesn't change. The order matters: a key written later wins, so the change goes **after** the spread.

With `map`, you can make a changed copy of every object of an array:

```js
const allBlue = players.map((player) => ({ ...player, team: "blue" }));
```

The round brackets around the curly ones tell JavaScript the arrow returns an object, not a block of code.

## Break it on purpose

Write the change first: `{ team: "blue", ...mia }`. Mia's own team, written later by the spread, wins, and nothing changes. Then write `player.team = "blue"; return player;` inside the `map`. The page looks right, but the first objects changed too, and Undo has nothing left to go back to.

---

## Mission: Dock them all

**What you will see**: above the list, two buttons, `Dock them all` and `Undo`. Click the first: every card says `Docked`. Click `Undo`: each card says its own status again, Comet Runner `On the way`, Lunar Ferry `Boarding`, and so on.

The station's crew wants to see how the tracker would look with every starship docked, and then go back.

- Add two buttons of type `button`, with the ids `dock-all` and `undo-dock`.
- A click on `#dock-all` shows every starship again, with its status `Docked`.
- For that, it uses a copy of each starship with one change, never the starship itself.
- The cards and their titles say `Docked`.
- A click on `#undo-dock` shows every starship as the API sent it.
- Each click replaces the cards, so there are never more cards than starships.
