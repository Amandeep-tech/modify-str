![CI](https://github.com/Amandeep-tech/modify-str/actions/workflows/ci.yml/badge.svg)

# modify-str

`modify-str` is a small, lightweight utility that allows you to **modify strings using a single, configurable function**.

It is designed to be:
- **Immutable & pure** (no side effects)
- **Predictable** (clear rules when multiple options are used)
- **Type-safe** (written in TypeScript, ships JavaScript + type definitions)

---

## ✨ Why modify-str?

Instead of manually chaining multiple string operations:

```js
str.trim().toUpperCase().replace(/\s+/g, "_");

You can declaratively describe what you want:

modifyStr("Hello World", {
  trim: true,
  snakeCase: true,
  toUpperCase: true,
});

This makes string transformations:

- **Easier to read**

- **Easier to maintain**

- **Easier to extend**

📦 Installation
npm install @amandeepsingh13/modify-str

Basic Usage

ESM
import { modifyStr } from "@amandeepsingh13/modify-str";

const result = modifyStr("Hello World", {
  snakeCase: true,
});

console.log(result);
// hello_world


CommonJS
const { modifyStr } = require("@amandeepsingh13/modify-str");

console.log(
  modifyStr("Hello World", { toUpperCase: true })
);
// HELLO WORLD


Core API
modifyStr(input, options)
modifyStr(input: string, options?: ModifyOptions): string

input → the string you want to modify

options → configuration describing which transformations to apply

The function always returns a new string and never mutates the input.

⚙️ Available Options

trim	Removes leading & trailing spaces	" hi " → "hi"
removeExtraSpaces	Collapses multiple spaces into one	"hi there" → "hi there"
capitaliseFirstChar	Capitalizes the first character	"hello" → "Hello"
toUpperCase	Converts string to upper case	"hi" → "HI"
toLowerCase	Converts string to lower case	"HI" → "hi"
snakeCase	Converts to snake_case	"Hello World" → "hello_world"
camelCase	Converts to camelCase	"hello world" → "helloWorld"


Applying Multiple Transformations

modifyStr("  Hello World  ", {
  trim: true,
  snakeCase: true,
  toUpperCase: true,
});

OUTPUT
-------
HELLO_WORLD



Conflict Resolution (Important)

If conflicting options are provided,
👉 the last option wins.
modifyStr("Hello World", {
  toUpperCase: true,
  toLowerCase: true,
});

OUTPUT
------
hello world


