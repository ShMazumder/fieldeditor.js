function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

// export const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1);

// export const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1);
var FieldEditor = /*#__PURE__*/function () {
  function FieldEditor(options) {
    _classCallCheck(this, FieldEditor);
    var defaults = {};
    this.settings = options && _typeof(options) === "object" ? extendDefaults(defaults, options) : defaults;
    this.elements = [];
    this.init();
  }
  _createClass(FieldEditor, [{
    key: "init",
    value: function init() {
      console.log("Init plugin.");
      // Add your initialization logic here.

      if (this.settings.container) {
        console.log("settings.container defined");
      } else {
        console.log("settings.container not defined");
      }
    }
  }, {
    key: "add",
    value: function add(element) {
      console.log("Add ".concat(element, " in plugin."));
      // Add your update logic here.
      this.elements = [].concat(_toConsumableArray(this.elements), [element]);
      return true;
    }
  }, {
    key: "update",
    value: function update(element, _update) {
      console.log("Update ".concat(element, " with ").concat(_update, " in plugin."));
      // Add your update logic here.
      delete this.elements[element];
      this.elements = [].concat(_toConsumableArray(this.elements), [_update]);
      return true;
    }
  }, {
    key: "show",
    value: function show() {
      console.log(this.elements);
      return this.elements.length > 0;
    }
  }, {
    key: "health",
    value: function health(element) {
      console.log(this.elements.includes(element));
      return element;
    }
  }]);
  return FieldEditor;
}();
function extendDefaults(defaults, properties) {
  return Object.assign({}, defaults, properties);
}

export { FieldEditor };
