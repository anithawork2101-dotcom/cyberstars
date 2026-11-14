The library's books are on the lending shelf. Now a class goes to get one: it names the book it wants, and where to find it. Using another file's code works the same way.

## `import`

At the top of a module, `import` takes names from another file's shelf:

```js
import { SCHOOL, greet } from "./school.js";

console.log(greet("Mia"));
```

```text
Welcome to Hill Street School, Mia!
```

- The curly brackets list the names you take. They must be exported, and written exactly the same way.
- The path after `from` is the file, from where this file is: `./` means "in my folder", and `../` means "one folder up", like with links. It starts with `./`, even for a file next to it.
- `import` only works in a module, so the page must load this file with `type="module"`. The imported file is a module too: the page doesn't load it itself.

Now `greet` is written once, in `school.js`, and every file that imports it gets the same one. Fix a mistake in it, and it's fixed everywhere.

## Break it on purpose

Write `from "school.js"` without `./`. The browser refuses: without `./`, it doesn't know the name is a file of your site. Then import a name the file doesn't export: `import { secret } from "./school.js"`. The whole module stops, and the console says `school.js` has no export named `secret`.

---

## Mission: One way to ask

**What you will see**: the tracker works exactly as before. And if `api.js` gave other data, the tracker would show that data: the tests try it with their own `api.js`.

The tracker still asks the API itself, three times. Let it use `api.js` instead.

- `tracker.js` imports `SHIPS_URL`, `CREW_URL` and `getJson` from `api.js`.
- It doesn't make the addresses itself any more.
- It loads the starships, the crew count and the crew panel with `getJson`.
- It still loads the starships and the crew at the same time.
- Every error is said as before.
- The report form still sends its starship to the practice API.

A file of your site starts with `./` in an `import`.
