No new theory here, just a challenge. It uses modules, `export` and `export default`, `import`, a class with a constructor and a method, and destructuring.

---

## Mission: Tidy reports

**What you will see**: the report form works exactly as before. Type `Comet Runner`, pick `Explorer`, press the button, and `Comet Runner Explorer` shows in the reports. Rest the mouse on it, and a small box says `Report 6`, with the id the API gave it.

The report form is the last part of the tracker that still does everything in `tracker.js`. It sends the starship, then builds the report item itself. Give each job its own place.

- `reportShip` moves from `tracker.js` to `api.js`, which exports it.
- `tracker.js` imports `reportShip` from `api.js`.
- A new file, `report.js`, exports by default a class `Report`.
- The constructor of `Report` takes a starship, as the API answers it. It keeps its `id`, its `name`, and its class as `kind`.
- The method `toItem()` of `Report` returns a copy of the template `report-template`, with the name and the class filled in.
- The item's `title` is `Report `, then the id.
- When the form is sent, `tracker.js` makes a `Report` from the API's answer. It puts what `toItem()` returns in the list with the id `reports`.
- `tracker.js` doesn't fill in the template itself any more.
- A report that fails still says why in `#report-status`.
- The rest of the tracker works as before.

The report is made from the API's answer, not from the form's boxes.
