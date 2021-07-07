export default ({ $vuetify }, inject) => {
  const themer = {
    name: "themer",
    color: {
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
      hierarchy: [0, 1, 2, 5, 7, 8, 9, 11, 12, 13, 15],
      hash(str) {
        return str.split("").reduce((a, b) => {
          a = (a << 5) - a + b.charCodeAt(0);
          return a & a;
        }, 0);
      },
      adjust(bg) {
        if (bg ^ $vuetify.theme.dark) return " lighten-2";
        else if (bg) return "";
        else return " darken-2";
      },
      seeded(str, bg) {
        return (
          this.colors[Math.abs(this.hash(str)) % this.colors.length] +
          this.adjust(bg)
        );
      },
      hierarchical(i, bg) {
        return (
          this.colors[this.hierarchy[Math.abs(i % this.hierarchy.length)]] +
          this.adjust(bg)
        );
      }
    },
    darkmode: {
      init() {
        const darkMediaQuery = window.matchMedia(
          "(prefers-color-scheme: dark)"
        );

        darkMediaQuery.addEventListener("change", e => {
          $vuetify.theme.dark = !$vuetify.theme.dark;
        });

        if (darkMediaQuery.matches) {
          setTimeout(() => ($vuetify.theme.dark = true), 0);
        }
      },
      switch() {
        $vuetify.theme.dark = !$vuetify.theme.dark;
      }
    },
    masonary: {
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
      filter(slug, col, arr, cols) {
        return arr.findIndex(src => slug == src.slug) % cols == col - 1;
      }
    }
  };
  inject("themer", themer);
};
