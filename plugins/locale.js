export default ({ i18n }, inject) => {
  const locale = {
    // TODO: remove
    name: "locale",
    hash(i, s) {
      return (i + s) % s;
    },
    switch() {
      i18n.setLocale(this.next().code);
    },
    available() {
      return i18n.locales.filter(i => i.code !== i18n.locale);
    },
    next() {
      const index = i18n.locales.findIndex(
        e => e.code === i18n.locale
      );
      const length = i18n.locales.length;
      const fallback = {
        code: "en",
        name: "English"
      };
      return i18n.locales[
        this.hash(index, length)
      ] || fallback;
    }
  };
  inject("locale", locale);
};