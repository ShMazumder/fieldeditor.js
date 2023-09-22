// export const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1);

// export const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1);
export class FieldEditor {
  constructor(options) {
    const defaults = {};

    this.settings =
      options && typeof options === "object"
        ? extendDefaults(defaults, options)
        : defaults;

    this.elements = [];

    this.init();
  }
  init() {
    console.log("Init plugin.");
    // Add your initialization logic here.

    if (this.settings.container) {
      console.log("settings.container defined");
    } else {
      console.log("settings.container not defined");
    }
  }
  add(element) {
    console.log(`Add ${element} in plugin.`);
    // Add your update logic here.
    this.elements = [...this.elements, element];
    return true;
  }
  update(element, update) {
    console.log(`Update ${element} with ${update} in plugin.`);
    // Add your update logic here.
    delete this.elements[element];
    this.elements = [...this.elements, update];
    return true;
  }
  show() {
    console.log(this.elements);
    return this.elements.length > 0;
  }
  health(element) {
    console.log(this.elements.includes(element));
    return element;
  }
}

function extendDefaults(defaults, properties) {
  return Object.assign({}, defaults, properties);
}
