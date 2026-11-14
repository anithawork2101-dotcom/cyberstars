A town has one water tower, and every house gets its water from it. Nobody builds a water tower of their own. If the water needs cleaning, it's cleaned once, at the tower, and every tap in town gets clean water. A module that many pages use is the site's water tower.

## One module, more than one page

A module doesn't belong to one page. Any page can load a module of its own, and that module can import the same file:

```js
// news.js, on the home page
import { getJson } from "./api.js";

// scores.js, on the games page
import { getJson } from "./api.js";
```

Both pages now ask in the same way, with the same checks and the same errors. Change how `getJson` works, for example to add a time limit, and both pages get the change. You don't touch either of them.

The browser loads `api.js` once per page, however many modules of that page import it. And each module still keeps its own names: `news.js` and `scores.js` can both have a `showList`, and nothing breaks.

## A module of its own for each page

Each page keeps its own module for its own job, and imports what it shares. That's the shape of a tidy site: small files with one job each, and a few shared files in the middle.

## Break it on purpose

Load the home page's module without `type="module"`. The browser reads its first line, `import`, as an error: `Cannot use import statement outside a module`. Then, in the home page's module, write the address and the `fetch` again, instead of importing them. It works, until the address changes. Then the home page is the one place you forgot.

---

## Mission: Starships on the home page

**What you will see**: at the end of the home page's main part, a line:

```text
5 starships near the station right now
```

When the tracker can't be reached, the line says `The tracker can't be reached right now.`

Visitors who open the home page should see at once how busy the sky is.

- In the home page's main part, add a paragraph with the id `nearby`.
- A new module, `nearby.js`, is loaded by the home page only.
- It gets the starships with `getJson` from `api.js`.
- It writes their number, then ` starships near the station right now`, in the paragraph with the id `nearby`.
- When it can't get them, the paragraph says `The tracker can't be reached right now.`, and no error is thrown.
- The tracker still works as before.

`import` works only in a script loaded as a module.
