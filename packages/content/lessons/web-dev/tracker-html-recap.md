No new theory, just a challenge that uses a template, a form with labels, a required box, and a list to choose from.

---

## Mission: Report a starship

**What you will see**: under the list of starships, a part with a heading like "Report a starship", a box for the starship's name, a list to choose its class from, and a button that sends the form. Under the form, an empty list, and a template for one report in it. Later, a report shows something like `Comet Runner Explorer`.

Sometimes the crew sees a starship before the tracker knows about it. They want to report it from the tracker page, and see their reports in a list under the form.

- Under the list `ships`, add a form with the id `sighting-form`.
- In it, add a box for the starship's name, with the id and name `sighting-name`. It can't be left empty.
- Add a list to choose its class, with the id and name `sighting-class`, and the options `Cargo`, `Shuttle` and `Explorer`.
- Each one has a label that takes you to it.
- A button in the form sends it. A form without a name isn't sent, and a form with one is sent.
- Under the form, add an empty list with the id `reports`.
- Add a template with the id `report-template`, which holds one list item with the class `report`.
- Inside the item: the name (class `report-name`) and the class (class `report-class`), each one with some text that shows where the real one goes.
