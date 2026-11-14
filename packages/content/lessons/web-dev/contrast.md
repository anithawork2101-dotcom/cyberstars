Have you tried to read your phone in bright sun? Grey text on a white screen is almost gone. Black text is still easy to read. The difference between a text's color and its background is called **contrast**. It decides if people can read your page.

## Measuring it

You measure contrast as a **ratio**, from 1:1 to 21:1:

- `1:1` means no difference at all: white text on white;
- `21:1` is the most there is: black on white;
- in between, the bigger the first number, the easier the text is to read.

Every good website follows these rules:

- normal text needs at least **4.5:1**;
- big text, like headings, needs at least **3:1**, because big letters are easier to see.

You don't work the ratio out yourself. A **contrast checker** does it. Search for "contrast checker", type in the text color and the background color, and it gives you the ratio. Your browser can show it too, as you will see later in the course.

## Some examples on night blue

On a night blue background, `#0b1d3a`:

- `#f0f4ff`, almost white: about **15:1**. More than enough.
- `#8ecbff`, light blue: about **10:1**. Fine for any text.
- `#1d4e89`, the logo's deep blue: about **2:1**. Too dark, even for a heading.
- `firebrick`: about **2.5:1**. Too dark.

Dark colors that looked great on white don't work on a dark page. A dark page needs light colors.

## Why it matters

Low contrast isn't only a problem for people who don't see well. It's hard for everyone on a phone outside, on a cheap screen, or late at night. Good contrast is one of the easiest ways to help your visitors.

## Break it on purpose

Make a paragraph dark grey on the night blue: `color: #33415c`. Can you read it? A contrast checker says about 1.6:1. Now try `#c9d6ea`. It's much better: about 11:1.

---

## Mission: Readable at night

**What you will see**: every text on the page is easy to read. The headings are in light colors, the warnings in a light red on their band, and the links in their own light color.

Your page is dark now. Some colors that were fine on white are now very hard to see: the part headings, the warnings, maybe your links.

- Every paragraph has a contrast of at least 4.5:1 with its background.
- Every link has a contrast of at least 4.5:1.
- Every heading has a contrast of at least 3:1.

Check each color in a contrast checker, with the background it really sits on.
