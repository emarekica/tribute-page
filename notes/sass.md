# SASS

<br>

1. Install **Live SASS Compiler**.
2. Make `stylesheet.scss` file along with `stylesheet.css` .
3. Link `stylesheet.css` in your HTML file.
4. Write your code with SASS in `stylesheet.scss` > it makes changes in `stylesheet.css`.

<br>
<br>

---

## Definition

**SASS** _(Syntactically Awesome Style Sheets)_ is a pre-processor scripting language that will be compiled or interpreted into CSS.
SassScript is itself a **scripting language**.

**SCSS** is the **main syntax for the SASS** which builds on top of the existing CSS syntax.

<br>
<br>

---

## Syntax

### Variables

- for storing information you want to reuse
- for things like colors, font stacks ...
- Sass uses the `$` symbol to make something variable + you choose name

- you can have multiple variables

**CSS:**

```
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
```

<br>
<br>

**SCSS**

```
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

<br>
<br>

### Nesting

---

## Resources

-[SASS basics](https://sass-lang.com/guide#topic-6)

- [SASS examples](https://sass-lang.com/documentation/at-rules/mixin)

-[SASS YT crash course](https://www.youtube.com/watch?v=Zz6eOVaaelI)
