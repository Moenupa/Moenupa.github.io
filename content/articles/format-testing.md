# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


## Horizontal Rules

___

---

***


## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'


## Emphasis

**This is bold text** __This is bold text__

*This is italic text* _This is italic text_

~~Strikethrough~~


## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.


## Lists

Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
   1. Integer molestie lorem at massa

3. You can use sequential numbers...
4. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar

- [ ] todo list item1
- [x] todo list item2 checked
  - [ ] todo list item3
    - [ ] todo list item4
      - [ ] todo list item5
        - [ ] todo list item6

mixed:

- this is a mixed list
1. Lorem ipsum dolor sit amet
   1. Integer mol
   - Integer
   - [ ] todo list item
   59. Integer mol
   - [x] todo list item

## Code

Inline `code and with syntax highlight: console.log("hw")`{.js}

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

```md
Sample text here...
```

Syntax highlighting

```js
hash(str) { if (!str) return 0; return str.split("").reduce((a, b) => { a = (a << 5) - a + b.charCodeAt(0); return a & a; }, 0); }
console.log("this will make sure an overflow occur. text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text, text")
```

`console.log(foo(5));`{.js}

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. | 
| engine | engine to be used for processing templates. Handlebars is the default. | 
| ext    | extension to be used for dest files. |


| Option | Description | Description | Overflow | Overflow | Overflow | Overflow | Overflow |
| ------ | ----------- | -----------:| -------- | -------- | -------- | -------- | -------- |
| data   | path to data files to supply the data that will be passed into templates. | path to data files to supply the data that will be passed into templates. ||||||
| engine | engine to be used for processing templates. Handlebars is the default. | engine to be used for processing templates. Handlebars is the default. ||||||
| ext    | extension to be used for dest files. | extension to be used for dest files. ||||||

## Links

[external link](http://dev.nodeca.com)

[external link with title](http://nodeca.github.io/pica/demo/ "title text!")

[internal link](/blog/)

[heading](#links)

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)

## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"


## Plugins

The killer feature of `markdown-it` is very effective support of [syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).


### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.


### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19^th^
- H~2~O


### [\<ins>](https://github.com/markdown-it/markdown-it-ins)

++Inserted text++


### [\<mark>](https://github.com/markdown-it/markdown-it-mark)

surrounded by regular text ==Marked text== surrounded by regular text
surrounded by regular text <kbd>Ctrl</kbd> `code` surrounded by regular text

### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.


### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b


### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

*[HTML]: Hyper Text Markup Language

### [Custom containers](https://github.com/markdown-it/markdown-it-container)

::: hint-warning
*here be dragons*
multi-line
test line-wrap, test line-wrap, test line-wrap, test line-wrap, test line-wrap, test line-wrap, test line-wrap, test line-wrap, test line-wrap, test line-wrap, test line-wrap, test line-wrap, test line-wrap, test line-wrap, test line-wrap, test line-wrap, test line-wrap, test line-wrap, test line-wrap
:::

::: hint-danger
hint-danger
:::

::: hint-info
hint-info
:::

::: hint-tip
hint-tip
:::

## Equation

Euler\'s identity $e^{i \pi}+1=0$ is a beautiful formula in.

$$
e^{i \pi}+1=0
$$

## Markdown-It Plugins