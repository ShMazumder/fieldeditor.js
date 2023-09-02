(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.fieldeditor = {}));
})(this, (function (exports) { 'use strict';

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
      }
    }, {
      key: "update",
      value: function update(element) {
        console.log("Update plugin.");
        // Add your update logic here.
      }
    }, {
      key: "health",
      value: function health(element) {
        return element;
      }
    }]);
    return FieldEditor;
  }();
  function extendDefaults(defaults, properties) {
    return Object.assign({}, defaults, properties);
  }

  exports.FieldEditor = FieldEditor;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
