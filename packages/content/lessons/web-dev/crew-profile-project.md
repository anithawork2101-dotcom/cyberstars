No new theory: this project uses everything from the first part, HTML and CSS. You built a whole home page, one piece at a time, with a lesson next to you for each piece. Now you build a page on your own, from an empty folder: the profile of one crew member.

This project is separate from the station site, so nothing here changes the pages you built. When you're not sure how to do a step, open the lesson it comes from again.

## Your files

The folder starts empty. Make two files with **New file**: `index.html` for the page, and `style.css` for its look.

## What you will see

New crew members arrive every month, and the others want to know who they are. Choose a crew member, real or made up. A finished profile could show something like this:

```text
Ada Okafor                       (big, centered)
Chief engineer, Docking Ring B   (italic)

Skills
Fixes solar panels in the dark and speaks four languages.

Last Mission
Forty hours outside the station to replace a cracked antenna.   (the first part in bold)

Write to Ada                     (a link)
```

## The steps

Build the profile in this order:

1. **The frame.** `index.html` starts with `<!DOCTYPE html>`. It says it's in English, and it can show any letter. Its tab is named **Crew Profile**.
2. **The name.** The crew member's name is the page's one biggest heading.
3. **The job.** Right under the name, a paragraph has their job on board. It has the class `role`.
4. **Two parts.** At least two parts about them, each with its own heading, one level under the name. For example: their skills, their last mission, their favourite place on the station.
5. **Something important.** Somewhere in those parts, one thing a visitor must not miss is in `<strong>`.
6. **An email link.** A link starts an email to them.
7. **The style sheet.** The head links to `style.css`, and every rule of the page's look is in it.
8. **Centered and leaning.** The name is centered, and the job is in italic.
9. **Colors.** Colors and fonts are your choice. Every paragraph has a contrast of at least 4.5:1, and every heading at least 3:1.
10. **Sizes.** Text sizes are in `rem`, so the page grows when a visitor makes their browser's text bigger.
11. **A phone.** On a phone 375 pixels wide, nothing scrolls sideways.

Run the tests when you like. They tell you which steps are still missing.
