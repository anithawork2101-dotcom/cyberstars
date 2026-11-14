Your phone has a "read aloud" button that reads a page to you. How does it know if it should use an English voice or a Spanish one? And how does the browser know when to offer "Translate this page"? The page tells them which language it's written in.

To say that, a tag needs a little **extra information**. That extra information is called an **attribute**.

## An attribute

You write an attribute **inside the opening tag**, after the tag's name:

```html preview
<!DOCTYPE html>
<!-- show -->
<html lang="en">
<!-- /show -->
  <head>
    <title>Game Club</title>
  </head>
  <body>
    <h1>My Favourite Games</h1>
  </body>
</html>
```

It has three parts:

- a **name**: `lang`, short for language;
- an `=` sign;
- a **value** in quotes: `"en"`, the code for English.

This one says: "everything in this page is in English". The page looks exactly the same. The attribute is for the browser, for search engines, and for screen readers. A **screen reader** is an app that reads pages out loud for people who can't see them.

Other languages have other codes: `es` is Spanish, `de` is German, `ro` is Romanian. If your page were in Spanish, you would write `lang="es"`.

## Where it goes

An attribute goes only in the **opening** tag, never in the closing one:

```html preview
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Game Club</title>
  </head>
  <body>
    <h1>My Favourite Games</h1>
  </body>
</html>
```

The closing tag stays plain: `</html>`.

Many tags take attributes. You will meet a lot of them: one for where a link goes, one for which picture to show. They all work the same way: `name="value"` inside the opening tag.

## Break it on purpose

Leave out the quotes and the `=`:

```html preview
<!DOCTYPE html>
<!-- show -->
<html lang en>
<!-- /show -->
  <head>
    <title>Game Club</title>
  </head>
  <body>
    <h1>My Favourite Games</h1>
  </body>
</html>
```

Now the browser reads two attributes with no values, `lang` and `en`. It doesn't know what language the page is in. Nothing on the page shows you the mistake, so it's easy to miss. Always write `name="value"`.

---

## Mission: Say the language

**What you will see**: the preview looks the same as before. But now the browser knows the page is in English.

Your `index.html` has its frame and its title. The station's home page is in English.

- The `<html>` tag has a `lang` attribute.
- Its value is the code for English.
