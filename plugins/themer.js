export default ({ $vuetify }, inject) => {
  const themer = {
    name: "themer",
    color: {
      // set of all colors
      colors: [
        "red",
        "pink",
        "purple",
        "deep-purple",
        "indigo",
        "blue",
        "light-blue",
        "cyan",
        "teal",
        "green",
        "light-green",
        "lime",
        "amber",
        "orange",
        "deep-orange",
        "brown",
        "blue-grey"
      ],
      // set of enabled colors
      hierarchy: [0, 1, 2, 5, 7, 8, 9, 11, 12, 13, 15],
      // hash
      hash(str) {
        if (!str) return 0;
        return str.split("").reduce((a, b) => {
          a = (a << 5) - a + b.charCodeAt(0);
          return a & a;
        }, 0);
      },
      // adjust color for light/dark mode
      adjust(bg) {
        if (bg ^ $vuetify.theme.dark) return " lighten-2";
        else return " darken-2";
      },
      // get color by seed
      seeded(str, bg) {
        return (
          this.colors[Math.abs(this.hash(str)) % this.colors.length] +
          this.adjust(bg)
        );
      },
      // get color by index
      indexed(i, bg) {
        return (
          this.colors[this.hierarchy[Math.abs(i % this.hierarchy.length)]] +
          this.adjust(bg)
        );
      }
    },
    darkmode: {
      // darkmode pin, if true, prevent auto-adjusting
      pin: false,
      // dark query
      query: window.matchMedia("(prefers-color-scheme: dark)"),
      // enable auto-adjustment for darkmode
      init() {
        this.query.addEventListener("change", e => {
          this.auto(e.matches);
          this.pin = this.pin ? false : this.pin;
        });
        setTimeout(() => this.auto(), 0);
      },
      // manual toggler of darkmode's auto-adjustment
      auto() {
        // if is pinned, prevent changing
        if (!this.pin) $vuetify.theme.dark = this.query.matches;
      },
      // manual toggler of darkmode
      switch() {
        $vuetify.theme.dark = !$vuetify.theme.dark;
        this.pin =
          $vuetify.theme.dark ^ window.matchMedia(this.preference).matches;
      }
    },
    masonary: {
      // get number of columns according to screen width
      cols(width) {
        if (width < 600) {
          return 1;
        } else if (width < 960) {
          return 2;
        } else if (width < 1264) {
          return 3;
        } else if (width < 1904) {
          return 4;
        } else {
          return 4;
        }
      },
      // allocate elements into columns
      filter(slug, col, arr, cols) {
        return arr.findIndex(src => slug == src.slug) % cols == col - 1;
      }
    },
    gallery: {
      source: "https://source.unsplash.com/random/",
      loading:
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj4KPHJlY3QgZmlsbD0iIzE2MDAzNCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiLz4KPC9zdmc+",
      get(src, slug) {
        if (src) return src == "/" ? null : src;
        else if (slug) return `${this.source}?${slug.split("-").toString()}`;
        else return null;
      }
    }
  };
  inject("themer", themer);
};
