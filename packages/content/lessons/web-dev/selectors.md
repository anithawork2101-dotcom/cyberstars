At school, some lessons are in the gym, some in the lab, and some in the classroom. On the timetable, you can't see which is which. So the teacher puts a colored sticker on each kind: red for the gym, green for the lab. Everything with a red sticker belongs together, wherever it is in the week.

In HTML, that sticker is a **class**.

## Give elements a class

`class` is an attribute you can put on any element. Its value is a name you choose:

```html preview
<p class="tip">Bring water to every game.</p>
<p>The club meets on Tuesdays.</p>
<p class="tip">Arrive ten minutes early.</p>
```

The two tips now share the class `tip`. The page looks the same. A class is only a label, until CSS uses it.

## Style a class

In CSS, you choose a class with a **dot** before its name:

```css preview
<style>
  /* show */
  .tip {
    color: darkgreen;
  }
  /* /show */
</style>
<p class="tip">Bring water to every game.</p>
<p>The club meets on Tuesdays.</p>
<p class="tip">Arrive ten minutes early.</p>
```

`p` would choose every paragraph. `.tip` chooses only the elements with the `tip` class, whatever their tag is. A heading with `class="tip"` would be green too.

Many elements can share one class, and that's the point. One rule styles them all. And a new tip only needs `class="tip"` to look like the others.

A class name has no spaces. You usually write it in small letters, with `-` between words: `class="club-tip"`.

## Break it on purpose

Forget the dot:

```css preview
<style>
  /* show */
  tip {
    color: darkgreen;
  }
  /* /show */
</style>
<p class="tip">Bring water to every game.</p>
<p>The club meets on Tuesdays.</p>
<p class="tip">Arrive ten minutes early.</p>
```

Without the dot, the browser looks for a **tag** called `<tip>`. There isn't one, so nothing is green. And it's the other way round in the HTML: you write the class **without** the dot, `class="tip"`, never `class=".tip"`.

---

## Mission: Warnings stand out

**What you will see**: both warnings show in a color the other paragraphs don't have, like dark red.

Your page has two warnings: the one about the hatch in Today on Board, and the one about badges in Visiting Hours. Make them look like warnings.

- Both warning paragraphs have the class `warning`. Later lessons use this name.
- Paragraphs with the class `warning` have a color the other paragraphs don't have.
