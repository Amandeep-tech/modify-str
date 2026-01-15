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
```

// You can declaratively describe what you want:

```js
modifyStr("Hello World", {
  trim: true,
  snakeCase: true,
  toUpperCase: true,
});
```

This makes string transformations:

// 1. Easier to read

// 2. Easier to maintain

// 3. Easier to extend

## Installation
`npm install @amandeepsingh13/modify-str`

## Basic Usage

```js
// ESM
import { modifyStr } from "@amandeepsingh13/modify-str";

const result = modifyStr("Hello World", {
  snakeCase: true,
});

console.log(result);
// hello_world
```

```js
// CommonJS
const { modifyStr } = require("@amandeepsingh13/modify-str");

console.log(
  modifyStr("Hello World", { toUpperCase: true })
);
// HELLO WORLD
```


## ⚙️ Available Options

### `trim`

| Property | Value |
|--------|------|
| **Type** | `boolean` |
| **Description** | Removes leading and trailing spaces |
| **Example** | `"  hi  "` → `"hi"` |

---

### `removeExtraSpaces`

| Property | Value |
|--------|------|
| **Type** | `boolean` |
| **Description** | Collapses multiple spaces into a single space |
| **Example** | `"hi   there"` → `"hi there"` |

---

### `capitaliseFirstChar`

| Property | Value |
|--------|------|
| **Type** | `boolean` |
| **Description** | Capitalizes the first character of the string |
| **Example** | `"hello"` → `"Hello"` |

---

### `snakeCase`

| Property | Value |
|--------|------|
| **Type** | `boolean` |
| **Description** | Converts a string to `snake_case` |
| **Example** | `"Hello World"` → `"hello_world"` |

---

### `camelCase`

| Property | Value |
|--------|------|
| **Type** | `boolean` |
| **Description** | Converts a string to `camelCase` |
| **Example** | `"hello world"` → `"helloWorld"` |



Applying Multiple Transformations

```js
modifyStr("  Hello World  ", {
  trim: true,
  snakeCase: true,
  toUpperCase: true,
});
// HELLO_WORLD
```



Conflict Resolution (Important)

If conflicting options are provided,
the last option wins.

```js
modifyStr("Hello World", {
  toUpperCase: true,
  toLowerCase: true,
});

// hello world

```


