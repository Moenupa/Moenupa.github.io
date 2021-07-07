const random = {
  name: "Random",
  colors: [
    "red", "pink", "purple", "deep-purple", "indigo",
    "blue", "light-blue", "cyan", "teal", "green",
    "light-green", "lime", "amber", "orange", "deep-orange",
    "brown", "blue-grey"
  ],
  hierarchy: [
    0, 1, 2, 5, 7, 8, 9, 11, 12, 13, 15
  ],
  hash(str) {
    return str.split("").reduce(function (a, b) { a=((a<<5)-a)+b.charCodeAt(0); return a&a }, 0);
  },
  getSeededColor(str, dark) {
    var attr = (dark == null) ? "" : (dark) ? " darken-2" : " lighten-2" ;
    return this.colors[Math.abs(this.hash(str)) % this.colors.length] + attr;
  },
  getHierarchicalColor(i) {
    return this.colors[this.hierarchy[Math.abs(i % this.hierarchy.length)]];
  }
}

export default ({ app }, inject) => {
  inject("random", random);
}