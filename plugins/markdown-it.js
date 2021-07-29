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
import ins from "markdown-it-ins";
import mark from "markdown-it-mark";
import playground from "markdown-it-playground";
import highlightjs from "markdown-it-highlightjs";
import sub from "markdown-it-sub";
import sup from "markdown-it-sup";
import table from "markdown-it-multimd-table";
import list from "markdown-it-task-lists";
import tex from "markdown-it-texmath";

export default ({}, inject) => {
  const md = new MarkdownIt({
    preset: "default",
    html: true,
    linkify: true,
    typographer: true,
    breaks: true
  });

  md.use(abbr);
  md.use(anchor, {
    permalink: anchor.permalink.ariaHidden({
      class: "heading-anchor",
      symbol: "",
      space: false,
      placement: "before"
    })
  });
  md.use(attrs);
  md.use(container);
  md.use(deflist);
  md.use(div);
  md.use(emoji);
  md.use(footnote);
  md.use(ins);
  md.use(mark);
  md.use(playground);
  md.use(highlightjs);
  md.use(sub);
  md.use(sup);
  md.use(table, {
    multiline: true,
    rowspan: true,
    headerless: true
  });
  md.use(list, {
    enabled: true,
    label: true,
    labelAfter: true
  });
  md.use(tex, {
    engine: require("katex"),
  });
  
  inject("md", md);
};
