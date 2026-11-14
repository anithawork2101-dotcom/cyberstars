"Give each guest a piece of cake." You don't count the guests first, or give them numbers. You just go round, one guest after another. Most loops over a list are like that. You don't need the index, only each item.

## `for...of`

```js
const games = ["chess", "cards", "darts"];
for (const game of games) {
  console.log(game);
}
```

```text
chess
cards
darts
```

Read it as a sentence: "for each `game` of `games`, do this". In each lap, `game` is the next item of the array, from the first to the last. No counter, no `length`, no `[i]`.

You choose the name `game`. It's a `const`, because the item doesn't change during one lap. The next lap gets a new item.

## Over elements on the page

It works on what `querySelectorAll` gives too:

```js
for (const member of document.querySelectorAll("#members li")) {
  console.log(member.textContent);
}
```

## `for` or `for...of`?

- To visit every item, in order: `for...of`. It's shorter, and you can't get the indexes wrong.
- When you need the index itself, or want to count down, or skip items: the `for` loop with a counter.

## Break it on purpose

Write `in` instead of `of`:

```js
for (const game in games) {
  console.log(game);
}
```

```text
0
1
2
```

You get the indexes, not the games! `for...in` exists too, but it's for something else. For the items of a list, it's always `of`.

---

## Mission: Jobs on board

**What you will see**: when `crew.html` opens, the console shows a line for each card, with its other lines. For example:

```text
Job: Commander
Job: Engineer
Job: Pilot
Job: Botanist
```

The console lists every job on the crew cards.

- For every job on the cards, the ones in `.role`, the console shows `Job: ` and that job.
- The loop is a `for...of`.
- The jobs come from the page, so a new card gets its line too.
