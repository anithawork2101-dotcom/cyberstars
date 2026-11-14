10 friends are going to the cinema, and a car takes 4. How many cars? 10 ÷ 4 is 2.5, but nobody drives half a car: you need 3. And how many cars are completely full? 2. Real life often needs a whole number, rounded the right way.

## Three ways to round

JavaScript has a toolbox called `Math`, with three tools to round numbers:

```js
console.log(Math.round(2.5));
console.log(Math.floor(2.5));
console.log(Math.ceil(2.5));
```

```text
3
2
3
```

- `Math.round` goes to the **nearest** whole number: 2.4 becomes 2, and 2.5 becomes 3;
- `Math.floor` always goes **down**: 2.9 becomes 2. Think of the floor, under you;
- `Math.ceil` always goes **up**: 2.1 becomes 3. Think of the ceiling, above you.

## Which one?

Ask what the number means:

```js
const friends = 10;
const seatsPerCar = 4;
console.log(Math.ceil(friends / seatsPerCar));   // cars needed
console.log(Math.floor(friends / seatsPerCar));  // cars completely full
```

```text
3
2
```

Cars **needed** rounds up: even 1 friend left over needs a car. **Full** cars rounds down: a car with 2 people isn't full.

## Break it on purpose

Use `Math.round` for the cars:

```js
console.log(Math.round(9 / 4));
```

```text
2
```

9 ÷ 4 is 2.25. The nearest whole number is 2, and one friend stays on the street. When you round the wrong way, you get a number that looks fine, but is wrong.

---

## Mission: Days of oxygen

**What you will see**: when `crew.html` opens, the console shows these lines, with its other lines:

```text
Full days of oxygen: 5
Tanks for 31 days: 38
```

Your oxygen lasts 140 hours. The crew wants to know how many days that is, and how many tanks to order for a trip of 31 days.

- The console shows `Full days of oxygen: 5`: only the days the oxygen covers completely.
- The console shows `Tanks for 31 days: 38`: enough tanks of 20 hours for 31 days of 24 hours.
- The number of tanks never leaves the crew short.
