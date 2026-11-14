A page with only words is like a school project with no pictures in it. A photo or a drawing says in a second what a paragraph needs many words for.

## The `<img>` tag

A picture is an `img` element, short for **image**:

```html preview
<img src="img/cat.svg" />
```

`src`, short for **source**, says which picture file to show. Here it's `img/cat.svg`: the file `cat.svg` inside a folder called `img`, next to your page. This way of writing where a file is, is called a **path**.

The page shows the picture exactly where the tag is.

Like `<br>` and `<meta>`, `<img>` has no closing tag: there are no words to put inside a picture.

## Where the picture goes

An image is **inline**, like a word: it sits in the line of text where you put it. Most of the time, you want it on its own line. So put it between paragraphs:

```html preview
<h1>Our Cat</h1>
<img src="img/cat.svg" />
<p>Her name is Pixel and she sleeps all day.</p>
```

You see the heading, then the picture, then the paragraph, one under the other.

## Your pictures

Look at the files on the left of your editor. There is a new folder, `img`, with a picture in it: `station.svg`, a drawing of the space station. This course gives you its pictures, so you don't need to make your own. You can't change them, but you can show them on your pages as often as you like.

## Break it on purpose

Write the path wrong:

```html preview
<img src="img/stations.svg" />
```

The browser looks for `stations.svg` and finds nothing. It shows a small broken picture icon, or nothing at all. The name must be exactly the file's name, with the folder, the dot and the capital letters.

Leave out the folder, and it breaks too:

```html preview
<img src="station.svg" />
```

The file is inside `img`, so the path must start with `img/`.

---

## Mission: A picture of the station

**What you will see**: at the top of your page, the heading, then the drawing of the station, then your first paragraph. For example:

```text
Welcome aboard

(the drawing of the station)

The station goes round the Earth every 92 minutes.
```

Your `index.html` starts with a heading and a few paragraphs. Visitors should see the station as soon as they arrive.

- The picture `img/station.svg` shows on the page.
- It is right under the heading, before the first paragraph.
