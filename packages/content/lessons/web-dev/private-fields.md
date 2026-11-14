A shop's till has a drawer with the money in it. Customers pay at the counter, and the cashier puts the money in the drawer. Nobody else opens the drawer, and it's locked, so they can't. The counter is for everyone. The drawer is only for the shop.

## The underscore is only a wish

The setter keeps the tidy role in `_role`. The underscore says "please don't touch". But it's only a wish. Any code can still write `vega._role = "   "` and skip the setter, and the messy role is back.

## `#`: private fields

A name that starts with `#` is **private**: only the code inside the class can read it or write it. You declare it at the top of the class body:

```js
class Pupil {
  #nickname;

  get nickname() {
    return this.#nickname;
  }

  set nickname(value) {
    const clean = String(value ?? "").trim();
    this.#nickname = clean === "" ? "No nickname" : clean;
  }
}

const mia = new Pupil();
mia.nickname = " Mimi";
console.log(mia.nickname);
console.log(Object.keys(mia));
```

```text
Mimi
[]
```

The getter and the setter reach `#nickname`, because they're inside the class. Outside, `Object.keys` doesn't even show it, and `mia.#nickname` is an error. The only way in is the setter, so the value is always tidy.

## Break it on purpose

Use `this.#nickname` in the class without declaring `#nickname;` at the top. The browser refuses the whole file: you must declare a private field first. Then try `console.log(mia.#nickname)` outside the class. You get the same refusal, before anything runs.

---

## Mission: Locked in

**What you will see**: the crew panel looks exactly as before, with the messy roles tidied. From the outside, a crew member shows only its `name`. You still read and write its role as `role`.

The tidy role should be kept where nothing outside the class can change it.

- `CrewMember` keeps the role in a private field, not in `_role`.
- The getter and the setter `role` work as before, so the crew panel looks the same.

You declare a private field at the top of the class, before you use it.
