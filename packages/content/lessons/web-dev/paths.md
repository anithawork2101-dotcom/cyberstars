On your computer, you keep files in folders: photos in one folder, homework in another, and folders inside folders. A website is the same. When it grows, its files go into folders so you can find them, like your pictures in `img`.

To get to a file, a link or a picture uses its **path**: the way to the file, from the page you are on.

## Into a folder

You already used one: `img/station.svg` means "go into the folder `img`, and take `station.svg` there". Each `/` is a step into a folder.

```html preview
<a href="games/chess.html">Chess</a>
```

From `index.html`, this goes into the folder `games` and opens `chess.html`.

## Out of a folder: `../`

Now you are **on** `games/chess.html`, inside the `games` folder. The style sheet is outside the folder, next to `index.html`. How do you get there?

`../` means "go up one folder, out of the folder I'm in":

```html
<link rel="stylesheet" href="../style.css" />
<img src="../img/logo.svg" alt="The club's logo" />
<a href="../index.html">Home</a>
```

From `games/chess.html`:

- `../style.css`: go out of `games`, and take `style.css`;
- `../img/logo.svg`: go out of `games`, then into `img`;
- `../index.html`: go out, and take the home page.

A path always starts **from the page it's written in**. So the same file can need different paths from different pages: `style.css` from `index.html`, but `../style.css` from `games/chess.html`.

To make a folder, use **New folder** in your file list. To put a page in it, make the file inside the folder.

## Break it on purpose

On `games/chess.html`, link to the style sheet as if you were on the home page:

```html
<link rel="stylesheet" href="style.css" />
```

The browser looks for `games/style.css`, and that file doesn't exist. The page shows plain, black on white, with no error. When a page in a folder loses its style or its pictures, check its paths. They probably need a `../`.

---

## Mission: The commander's page

**What you will see**: on the crew directory, a link opens the commander's page. It has her name as its heading, the station picture, the same night blue as the other pages, and a link back to the crew directory.

The station's commander gets her own page, in a new folder for crew pages.

- In a folder named `people`, there is a page `vega.html`.
- `vega.html` is a whole page, with a name for its tab.
- Its biggest heading is the commander's name.
- It uses the site's `style.css`.
- It shows the picture `img/station.svg`.
- `crew.html` links to it.
- It links back to `crew.html`.
