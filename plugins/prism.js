import Prism from "prismjs";

// Include the toolbar plugin: (optional)
import "prismjs/plugins/toolbar/prism-toolbar";
import "prismjs/plugins/toolbar/prism-toolbar.css";

// Include the line numbers plugin: (optional)
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

// Include the autolinker plugin: (optional)
import "prismjs/plugins/autolinker/prism-autolinker";
import "prismjs/plugins/autolinker/prism-autolinker.css";

// Include the line highlight plugin: (optional)
import "prismjs/plugins/line-highlight/prism-line-highlight";
import "prismjs/plugins/line-highlight/prism-line-highlight.css";

// Include treeview plugin: (optional)
import "prismjs/plugins/treeview/prism-treeview";
import "prismjs/plugins/treeview/prism-treeview.css";

// Include some other plugins: (optional)
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
import "prismjs/plugins/highlight-keywords/prism-highlight-keywords";
import "prismjs/plugins/show-language/prism-show-language";
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace";

// Include additional languages
import "prismjs/components/prism-bash.js";
import "prismjs/components/prism-markdown.js";
import "prismjs/components/prism-go.js";
import "prismjs/components/prism-scss";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-ruby";

// Set vue SFC to markdown
Prism.languages.vue = Prism.languages.markup;

export default Prism;
