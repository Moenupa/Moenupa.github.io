export default ({ app }, inject) => {
  const utils = {
    name: "utils",
    date: {
      format(date) {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(date).toLocaleDateString("en", options);
      }
    },
    meta: {
      get(data) {
        return [
          {
            hid: "author",
            name: "author",
            content: data.author || "moenupa moenupa@outlook.com"
          },
          {
            hid: "copyright",
            name: "copyright",
            content: data.author || "moenupa moenupa@outlook.com"
          },
          {
            hid: "keywords",
            name: "keywords",
            content: [
              data.keywords,
              "moenupa",
              "website",
              "moenupa wang",
              "meng wang"
            ].toString()
          },
          {
            hid: "description",
            name: "description",
            content: data.description || ""
          },
          {
            hid: "og:title",
            property: "og:title",
            content: `Moenupa - ${data.title || "Page"}`
          },
          {
            hid: "og:description",
            property: "og:description",
            content: data.description || ""
          },
          {
            hid: "og:type",
            property: "og:type",
            content: data.type || "website"
          },
          { hid: "og:image", property: "og:image", content: data.image },
          {
            hid: "og:url",
            property: "og:url",
            content: data.url || ""
          },
          {
            hid: "twitter:card",
            name: "twitter:card",
            content: data.cardType || "summary_large_image"
          }
        ];
      }
    }
  };
  inject("utils", utils);
};
