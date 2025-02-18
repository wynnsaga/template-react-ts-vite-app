---
title: "Hello, World!"
description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, hic ipsum! Qui dicta debitis aliquid quo molestias explicabo iure!"
notice: "本文内容为测试内容，仅用来显示Markdown渲染效果，作者不对内容负责"
image: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
date: 2020-01-01
categories: ["Hello, world!"]
tags: ["markdown"]
draft: false
pin: true
---

Here is a sample of some basic Markdown syntax that can be used when writing Markdown content.

## Headings

The following HTML `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Paragraph

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis semper lorem, ac porta turpis eleifend sed. Ut ut ornare nisi. Vestibulum et pellentesque urna, nec fermentum turpis. Nunc pharetra, nibh at sodales vulputate, magna sapien ullamcorper turpis, nec venenatis ipsum dolor sit amet tellus. Curabitur viverra lectus massa, scelerisque posuere sapien posuere vel. Morbi porttitor sagittis sem in suscipit. Nunc sit amet metus turpis. Cras cursus, erat eget gravida faucibus, nulla libero auctor est, tristique mollis purus libero eu ante. Proin ex erat, volutpat vel ex rutrum, sagittis dictum augue. Proin dictum velit ut dolor imperdiet porttitor. Nulla molestie dapibus nisi, eget consectetur enim fermentum vulputate.

Vivamus eu tortor mattis, lacinia quam ac, tempus turpis. Sed eu ultrices purus. Donec finibus lectus arcu, vitae tincidunt nisi venenatis vel. Ut porttitor rutrum est, non sollicitudin erat mollis et. Nunc id ipsum velit. Nunc nec lorem ut mi tincidunt interdum. In ut neque sed quam tincidunt interdum vel sed tellus. Mauris vestibulum congue felis elementum faucibus. Proin quam nisl, sollicitudin ac turpis nec, venenatis dictum augue. Donec sit amet scelerisque velit. Cras sit amet rutrum quam, quis gravida lorem.

## Images

### Syntax

```markdown
![Alt text](./full/or/relative/path/of/image)
```

### Output

![blog placeholder](/imgs/blog-placeholder.png)

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

### Blockquote without attribution

#### Syntax

```markdown
> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use _Markdown syntax_ within a blockquote.
```

#### Output

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use _Markdown syntax_ within a blockquote.

### Blockquote with attribution

#### Syntax

```markdown
> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>
```

#### Output

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Tables

### Syntax

```markdown
| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |
```

### Output

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |

## Code Blocks

### Syntax

we can use 3 backticks ``` in new line and write snippet and close with 3 backticks on new line and to highlight language specific syntax, write one word of language name after first 3 backticks, for eg. html, javascript, css, markdown, typescript, txt, bash

````markdown
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Example HTML5 Document</title>
    </head>
    <body>
        <p>Test</p>
    </body>
</html>
```
````

### Output

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Example HTML5 Document</title>
    </head>
    <body>
        <p>Test</p>
    </body>
</html>
```

## List Types

### Ordered List

#### Syntax

```markdown
1. First item
2. Second item
3. Third item
```

#### Output

1. First item
2. Second item
3. Third item

### Unordered List

#### Syntax

```markdown
-   List item
-   Another item
-   And another item
```

#### Output

-   List item
-   Another item
-   And another item

### Nested list

#### Syntax

```markdown
-   Fruit
    -   Apple
    -   Orange
    -   Banana
-   Dairy
    -   Milk
    -   Cheese
```

#### Output

-   Fruit
    -   Apple
    -   Orange
    -   Banana
-   Dairy
    -   Milk
    -   Cheese

## Other Elements — abbr, sub, sup, kbd, mark

### Syntax

```markdown
<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
```

### Output

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
