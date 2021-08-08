// import markdown-it module
import MarkdownIt from "markdown-it";

// import markdown-it plugins
import abbr from "markdown-it-abbr";
import anchor from "markdown-it-anchor";
import attrs from "markdown-it-attrs";
import container from "markdown-it-container";
import deflist from "markdown-it-deflist";
import div from "markdown-it-div";
import emoji from "markdown-it-emoji";
import footnote from "markdown-it-footnote";
import highlightjs from "markdown-it-highlightjs";
import ins from "markdown-it-ins";
import list from "markdown-it-task-lists";
import mark from "markdown-it-mark";
import playground from "markdown-it-playground";
import sub from "markdown-it-sub";
import sup from "markdown-it-sup";
import table from "markdown-it-multimd-table";
import tex from "markdown-it-texmath";

// import
import slugify from "slugify";

export default ({ }, inject) => {
  const md = new MarkdownIt({
    preset: "default",
    html: true,
    xhtmlOut: true,
    linkify: true,
    typographer: true,
    breaks: true
  });

  var toc = [];
  md.use(highlightjs, {
    inline: true
  });
  md.use(abbr);
  md.use(attrs);
  md.use(container);
  md.use(deflist);
  md.use(div);
  md.use(emoji);
  md.use(footnote);
  md.use(ins);
  md.use(list, {
    enabled: true,
    label: true,
    labelAfter: true
  });
  md.use(mark);
  md.use(playground);
  md.use(sub);
  md.use(sup);
  md.use(table, {
    multiline: true,
    rowspan: true,
    headerless: true
  });
  md.use(tex, {
    engine: require("katex"),
  });

  // sequence does matter here
  md.use(anchor, {
    slugify: (s) => slugify(s, { lower: true }),
    callback: (token, info) => {
      toc.push({ depth: token.markup.length, slug: info.slug, title: info.title })
    },
    permalink: anchor.permalink.ariaHidden({
      class: "heading-anchor",
      symbol: "",
      space: false,
      placement: "before",
    })
  });
  md.toc = toc;

  inject("md", md);
};
