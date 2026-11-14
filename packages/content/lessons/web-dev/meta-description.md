You search for "pancake recipe" and get ten results. Under each blue title, there are two lines about the page. Those two lines decide which one you open. Very often, the page wrote them itself.

## `<meta name="description">`

A **description** is a sentence about the page, in a `<meta>` tag in the `<head>`. The tag has a `name`, `description`, and the sentence goes in its `content`:

```html
<head>
  <meta charset="UTF-8" />
  <meta name="description" content="Easy pancakes for four people, with eggs, milk and flour, ready in 15 minutes." />
  <title>Pancakes</title>
</head>
```

Nothing shows on the page. The description is for **search engines**, the sites like Google that find pages for you. They show it under the page's title:

```text
Pancakes
Easy pancakes for four people, with eggs, milk and flour, ready in 15 minutes.
```

Chat apps often show it too, under a link someone sends you.

## One page, one description

Every page gets its own description: a sentence or two that say what the reader finds on **that** page. Keep it short, about 150 letters and spaces at most. A search engine cuts a longer one with `...`.

A page about a school's sports day and a page about its library need different descriptions, even on the same site:

```html
<meta name="description" content="Sports day at North School: the races, the times and how to sign up." />
```

```html
<meta name="description" content="The North School library: opening hours, and how to borrow a book." />
```

## Break it on purpose

Copy the home page's description to every page of a site. Now search for the library: the result says "Welcome to North School", like all the others. Nobody can tell from the search which result is the library. A description that fits every page helps on none.

---

## Mission: In a search

**What you will see**: a search shows the crew directory like this:

```text
Crew Directory
Meet the crew of Orbital Station 7: who they are, what they do and how many hours they work.
```

Someone searches for the station. Your pages show, but with whatever lines the search engine chose from them.

- Every page has its own description, in its `<head>`: a sentence or two about what is on that page.
- Each description names its page's topic.
- The crew page's description names the crew, and the commander's page names Vega.
- The schedule's description names the flights, and the boarding page's names booking or a seat.
- The wiki's description names the wiki, and each wiki page's names its own topic.
