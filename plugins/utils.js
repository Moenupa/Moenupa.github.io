export default ({ $vuetify }, inject) => {
  const utils = {
    name: "utils",
    date: {
      format(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('en', options)
      }
    }
  };
  inject("utils", utils);
};
