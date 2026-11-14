No new theory here: this project uses everything from part 9 and the parts before it. Modules, `export default` and `import`, a class with private fields, a getter and a method, destructuring, and buttons made by a script. You build a game of your own from an empty folder: a text adventure. In a text adventure, you find your way through a space station by choosing where to go.

This is a project of its own, outside the station site. When you're not sure how to do a step, open the lesson it comes from again.

## Your files

The folder starts empty. Make four files with **New file**: `index.html`, `style.css`, `rooms.js` and `game.js`.

## The map and the game, apart

The map of the station lives in a module of its own, `rooms.js`. The game lives in another one, `game.js`. To make a new adventure, someone changes only the map, and the same game plays it.

## The steps

Build it in this order:

1. **The frame.** An English page that can show any letter and is made for the width of a phone. It has one sentence about the game for search engines, a name of your own on its tab, and one biggest heading.
2. **The parts.** Under the heading: a paragraph with the id `room-text`, a box with the id `exits`, a paragraph with the id `moves`, a paragraph with the id `game-status` that a screen reader reads out politely, and a button of type `button` with the id `restart`.
3. **The map.** `rooms.js` exports by default an object with two things. `start` is the name of the first room. `rooms` is an object of rooms, by their names. Each room has its `text`, and its `exits`: an object whose keys are the directions, and whose values are the names of the rooms they lead to. The last room has no exits and has `end: true`, like this:

   ```js
   export default {
     start: "kitchen",
     rooms: {
       kitchen: { text: "You're in the kitchen.", exits: { east: "garden" } },
       garden: { text: "The sun is out. You win!", exits: {}, end: true },
     },
   };
   ```

   Draw a station of your own, with at least four rooms.

4. **The game.** The page loads `game.js` as a module, and `game.js` imports the map. A class keeps two things in private fields: the room the player is in, and the number of moves. It gives the room through a getter, and has a method to go in a direction.
5. **A room.** The page shows the room the player is in. Its text goes in `#room-text`. In `#exits`, there is a button of type `button` for each of its exits, in the map's order. Each button says `Go ` and the direction, like `Go north`. `#moves` says `Moves: ` and the number of moves, 0 at the start.
6. **Moving.** A click on an exit takes the player to the room it leads to, counts one move, and shows the new room.
7. **The end.** In a room with `end`, there are no exit buttons, and `#game-status` says `You made it in 4 moves!`, with the real number of moves.
8. **Start again.** `#restart` takes the player back to the first room, with 0 moves and `#game-status` empty.
9. **On a phone.** The room's text and the buttons are easy to read, with a contrast of at least 4.5, and nothing sticks out sideways.

The tests also play your page with a map of their own in `rooms.js`. So the game must work with any map written the same way.

Run the tests whenever you like: they tell you which steps are still missing.
