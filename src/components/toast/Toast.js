"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toast = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ClassNames = require("../utils/ClassNames");

var _ToastMessage = require("./ToastMessage");

var _reactTransitionGroup = require("react-transition-group");

var _CSSTransition = require("../transition/CSSTransition");

var _ZIndexUtils = require("../utils/ZIndexUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var messageIdx = 0;

var Toast = /*#__PURE__*/function (_Component) {
  _inherits(Toast, _Component);

  var _super = _createSuper(Toast);

  function Toast(props) {
    var _this;

    _classCallCheck(this, Toast);

    _this = _super.call(this, props);
    _this.state = {
      messages: []
    };
    _this.onClose = _this.onClose.bind(_assertThisInitialized(_this));
    _this.onEntered = _this.onEntered.bind(_assertThisInitialized(_this));
    _this.onExited = _this.onExited.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Toast, [{
    key: "show",
    value: function show(value) {
      if (value) {
        var newMessages;

        if (Array.isArray(value)) {
          for (var i = 0; i < value.length; i++) {
            value[i].id = messageIdx++;
            newMessages = [].concat(_toConsumableArray(this.state.messages), _toConsumableArray(value));
          }
        } else {
          value.id = messageIdx++;
          newMessages = this.state.messages ? [].concat(_toConsumableArray(this.state.messages), [value]) : [value];
        }

        this.setState({
          messages: newMessages
        });

        _ZIndexUtils.ZIndexUtils.set('modal', this.container, this.props.baseZIndex);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      _ZIndexUtils.ZIndexUtils.clear(this.container);

      this.setState({
        messages: []
      });
    }
  }, {
    key: "onClose",
    value: function onClose(message) {
      var newMessages = this.state.messages.filter(function (msg) {
        return msg.id !== message.id;
      });
      this.setState({
        messages: newMessages
      });

      if (this.props.onRemove) {
        this.props.onRemove(message);
      }
    }
  }, {
    key: "onEntered",
    value: function onEntered() {
      this.props.onShow && this.props.onShow();
    }
  }, {
    key: "onExited",
    value: function onExited() {
      this.props.onHide && this.props.onHide();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _ZIndexUtils.ZIndexUtils.clear(this.container);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var className = (0, _ClassNames.classNames)('p-toast p-component p-toast-' + this.props.position, this.props.className);
      return /*#__PURE__*/_react.default.createElement("div", {
        ref: function ref(el) {
          _this2.container = el;
        },
        id: this.props.id,
        className: className,
        style: this.props.style
      }, /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.TransitionGroup, null, this.state.messages.map(function (message) {
        var messageRef = /*#__PURE__*/_react.default.createRef();

        return /*#__PURE__*/_react.default.createElement(_CSSTransition.CSSTransition, {
          nodeRef: messageRef,
          key: message.id,
          classNames: "p-toast-message",
          unmountOnExit: true,
          timeout: {
            enter: 300,
            exit: 300
          },
          onEntered: _this2.onEntered,
          onExited: _this2.onExited,
          options: _this2.props.transitionOptions
        }, /*#__PURE__*/_react.default.createElement(_ToastMessage.ToastMessage, {
          ref: messageRef,
          message: message,
          onClick: _this2.props.onClick,
          onClose: _this2.onClose
        }));
      })));
    }
  }]);

  return Toast;
}(_react.Component);

exports.Toast = Toast;

_defineProperty(Toast, "defaultProps", {
  id: null,
  className: null,
  style: null,
  baseZIndex: 0,
  position: 'top-right',
  transitionOptions: null,
  onClick: null,
  onRemove: null,
  onShow: null,
  onHide: null
});

_defineProperty(Toast, "propTypes", {
  id: _propTypes.default.string,
  className: _propTypes.default.string,
  style: _propTypes.default.object,
  baseZIndex: _propTypes.default.number,
  position: _propTypes.default.string,
  transitionOptions: _propTypes.default.object,
  onClick: _propTypes.default.func,
  onRemove: _propTypes.default.func,
  onShow: _propTypes.default.func,
  onHide: _propTypes.default.func
});