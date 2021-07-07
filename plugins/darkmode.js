export default ({ $vuetify }, inject) => {
  const darkmode = {
    init() {
      const darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

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
  }
  inject('darkmode', darkmode)
}