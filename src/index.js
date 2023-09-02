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
  }
  update(element) {
    console.log("Update plugin.");
    // Add your update logic here.
  }
  health(element){
    console.log(element);
    return element;
  }
}

function extendDefaults(defaults, properties) {
  return Object.assign({}, defaults, properties);
}
