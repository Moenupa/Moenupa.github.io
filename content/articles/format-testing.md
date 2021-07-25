---
title: Format Testing
description: Format Testing of nuxt content
img: https://img.src/not/valid
alt: my first blog post
authors:
  - moenupa
  - dependabot
tags:
  - nuxtjs
  - javascript
categories:
  - web development
---

This is intended as a quick reference and showcase. For more complete info, see [John Gruber's original spec](http://daringfireball.net/projects/markdown/) and the [Github-flavored Markdown info page](http://github.github.com/github-flavored-markdown/).

This cheatsheet is specifically _Markdown Here's_ version of Github-flavored Markdown. This differs slightly in styling and syntax from what Github uses, so what you see below might vary a little from what you get in a _Markdown Here_ email, but it should be pretty close.

## Headers

```
# H1
## H2
### H3
#### H4
##### H5
###### H6

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------

```

# H1

## H2

### H3

#### H4

##### H5

###### H6

Alternatively, for H1 and H2, an underline-ish style:

# Alt-H1

## Alt-H2

## Emphasis

```md
Emphasis, aka italics, with _asterisks_ or _underscores_.

Strong emphasis, aka bold, with **asterisks** or **underscores**.

Combined emphasis with **asterisks and _underscores_**.
```

Emphasis, aka italics, with _asterisks_ or _underscores_.

Strong emphasis, aka bold, with **asterisks** or **underscores**.

Combined emphasis with **asterisks and _underscores_**.

## Lists

```md
1. First ordered list item
2. Another item
   - Unordered sub-list.
3. Actual numbers don't matter, just that it's a number
   1. Ordered sub-list
4. And another item.

   Some text that should be aligned with the above item.

- Unordered list can use asterisks

* Or minuses

- Or pluses
```

1. First ordered list item
2. Another item
   - Unordered sub-list.
3. Actual numbers don't matter, just that it's a number
   1. Ordered sub-list
4. And another item.

   Some text that should be aligned with the above item.

- Unordered list can use asterisks

* Or minuses

- Or pluses

## Links

There are two ways to create links.

```md
[I'm an inline-style link](https://www.google.com)

[I'm a reference-style link][arbitrary case-insensitive reference text]

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself][]

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com
```

[I'm an inline-style link](https://www.google.com)

[I'm a reference-style link][arbitrary case-insensitive reference text]

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself][]

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

## Images

```md
Here's our logo (hover to see the title text):

Inline-style:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style:
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"
```

Here's our logo (hover to see the title text):

Inline-style:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style:
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

## Tables

```md
|                  | ASCII                           | HTML                          |
| ---------------- | ------------------------------- | ----------------------------- |
| Single backticks | `'Isn't this fun?'`             | 'Isn't this fun?'             |
| Quotes           | `"Isn't this fun?"`             | "Isn't this fun?"             |
| Dashes           | `-- is en-dash, --- is em-dash` | -- is en-dash, --- is em-dash |
```

|                  | ASCII                           | HTML                          |
| ---------------- | ------------------------------- | ----------------------------- |
| Single backticks | `'Isn't this fun?'`             | 'Isn't this fun?'             |
| Quotes           | `"Isn't this fun?"`             | "Isn't this fun?"             |
| Dashes           | `-- is en-dash, --- is em-dash` | -- is en-dash, --- is em-dash |

```md
| left-aligned column | centered column | right-aligned column |
| :------------------ | :-------------: | -------------------: |
| content content     | content content |      content content |
```

| left-aligned column | centered column | right-aligned column |
| :------------------ | :-------------: | -------------------: |
| content content     | content content |      content content |

```md
| overflow | overflow | overflow | overflow | overflow | overflow | overflow | overflow | overflow | overflow |
| :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: |
| :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: |
```

| overflow | overflow | overflow | overflow | overflow | overflow | overflow | overflow | overflow | overflow | overflow | overflow | overflow | overflow | overflow | overflow | overflow | overflow | overflow | overflow |
| :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: |
| :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: | :------: |

## Code and Syntax Highlighting

Code blocks are part of the Markdown spec, but syntax highlighting isn't. However, many renderers -- like Github's and _Markdown Here_ -- support syntax highlighting. _Markdown Here_ supports highlighting for dozens of languages (and not-really-languages, like diffs and HTTP headers); to see the complete list, and how to write the language names, see the [highlight.js demo page](http://softwaremaniacs.org/media/soft/highlight/test.html).

```md
Inline `code` has `back-ticks around` it.
```

Inline `code` has `back-ticks around` it.

Blocks of code are either fenced by lines with three back-ticks <code>```</code>, or are indented with four spaces. I recommend only using the fenced code blocks -- they're easier and only they support syntax highlighting.

````md
    ```javascript
    var s = "JavaScript syntax highlighting";
    alert(s);
    ```

    ```python
    s = "Python syntax highlighting"
    print s
    ```

    ```
    No language indicated, so no syntax highlighting.
    But let's throw in a <b>tag</b>.
    ```
````

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
s = "Python syntax highlighting"
print s
```

```
No language indicated, so no syntax highlighting in Markdown Here (varies on Github).
But let's throw in a <b>tag</b>.
```

(Github Wiki pages don't seem to support syntax highlighting, so the above won't be colourful (the strings are not red, for example). Try it out in a _Markdown Here_ email or a Github Markdown README or Github Issue -- you can preview a new Issue without submitting it.)

Again, to see what languages are available for highlighting, and how to write those language names, see the [highlight.js demo page](http://softwaremaniacs.org/media/soft/highlight/test.html).

## Blockquotes

```md
> Blockquotes are very handy in email to emulate reply text.  
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can _put_ **Markdown** into a blockquote.
```

> Blockquotes are very handy in email to emulate reply text.  
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can _put_ **Markdown** into a blockquote.

## Inline HTML

You can also use raw HTML in your Markdown, and it'll mostly work pretty well. Here are a couple of common examples:

```html
<p>Press<kbd>Ctrl</kbd>+<kbd>W</kbd>to close this window</p>
```

<p>Press<kbd>Ctrl</kbd>+<kbd>W</kbd>to close this window</p>

Github-flavored Markdown supports a special table syntax, but _Markdown Here_ does not support it yet. [There's an issue for it.](https://github.com/adam-p/markdown-here/issues/13)

## Horizontal Rule

```md
Three or more...

---

Hyphens

---

Asterisks

---

Underscores
```

Three or more...

---

Hyphens

---

Asterisks

---

Underscores

## Line Breaks

My basic recommendation for learning how line breaks work is to experiment and discover -- hit &lt;Enter&gt; once, then hit it twice, see what happens. You'll soon learn to get what you want. "Markdown Toggle" is your friend.

Here are some things to try out:

```md
With only a single newline, this line and
this line will be a _single line_.

But this one is separated by two newlines and so will be a _separate paragraph_.

This line has two spaces at the end (hard for you to see, but trust me!).  
So this is a separate line in the _same paragraph_.
```

With only a single newline, this line and
this line will be a _single line_.

But this one is separated by two newlines and so will be a _separate paragraph_.

This line has two spaces at the end (hard for you to see, but trust me!).  
So this is a separate line in the _same paragraph_.

## Equation

Inline equation $ \Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,. $
or $$ \Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,. $$

And block of equation:

$$
\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.
$$

## Remark Plugins

!> Here is a tip.

?> And a warning.

x> Or an error.

!> Tip or warning or error can be multiline \[Not Recommanded\]  
Just as this tip demonstrates
