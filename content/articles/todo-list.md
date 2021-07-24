---
title: ToDo List
description: To do list of this blog
img: 
alt: my first blog post
authors: 
  - moenupa
tags: 
  - nuxtjs
  - javascript
  - web development
  - todo
categories:
  - extras
---
## Meta

Canonical meta

## i18n

[Nuxtjs.cn Sample](https://www.nuxtjs.cn/examples/i18n)

## Loading Content from external sources

Originally from [nuxt/content/issue#37](https://github.com/nuxt/content/issues/37), a second way of doing it [stackoverflow](https://stackoverflow.com/questions/67012728/use-nuxt-content-to-display-markdown-fetched-from-a-database)

Create a loadContent.js script in your folder

```js
const fetch = require("node-fetch");
const fs = require('fs');

console.log('>>> Loading External Content')

let url = 'https://your-url/api/content'
let path = './content/testfile.js'

const downloadFile = (async (url, path) => {
  const res = await fetch(url);
  const fileStream = fs.createWriteStream(path);
  await new Promise((resolve, reject) => {
    res.body.pipe(fileStream);
    res.body.on("error", (err) => {
      reject(err);
    });
    fileStream.on("finish", function() {
      resolve();
    });
  });
});

downloadFile(url,path)
```

In package.json create a script:

```json
 "scripts": {
    ...
    "loadContent": "node helpers/loadContent.js",
    ...
```

In console, run npm run loadContent to load the files

To add to the build script, change the build script to

```json
   "build": "npm run loadContent; nuxt build",
```

I don't add the content loader to the dev because my loader takes a while

## Storyblok

[Dashboard](https://app.storyblok.com/#!/me/spaces)

[Guide](https://www.storyblok.com/docs/guide/getting-started)