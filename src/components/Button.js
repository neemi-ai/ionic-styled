"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const react_1 = require("@ionic/react");
const react_2 = __importDefault(require("react"));
const mapStyles_1 = __importDefault(require("../util/mapStyles"));
const CssPropMap = {
    background: '--background',
    backgroundActivated: '--background-activated',
    backgroundActivatedOpacity: '--background-activated-opacity',
    backgroundFocused: '--background-focused',
    backgroundFocusedOpacity: '--background-focused-opacity',
    backgroundHover: '--background-hover',
    backgroundHoverOpacity: '--background-hover-opacity',
    borderColor: '--border-color',
    borderRadius: '--border-radius',
    borderStyle: '--border-style',
    borderWidth: '--border-width',
    boxShadow: '--box-shadow',
    color: '--color',
    colorActivated: '--color-activated',
    colorFocused: '--color-focused',
    colorHover: '--color-hover',
    opacity: '--opacity',
    paddingBottom: '--padding-bottom',
    paddingEnd: '--padding-end',
    paddingStart: '--padding-start',
    paddingTop: '--padding-top',
    rippleColor: '--ripple-color',
    transition: '--transition'
};
const StyledIonButton = (0, styled_1.default)(react_1.IonButton)((0, mapStyles_1.default)(CssPropMap));
const Button = (_a) => {
    var { children, leftIcon, rightIcon, size = 'default', shape } = _a, props = __rest(_a, ["children", "leftIcon", "rightIcon", "size", "shape"]);
    const getIcon = () => {
        if (leftIcon) {
            return <react_1.IonIcon icon={leftIcon} slot="start" src={leftIcon}/>;
        }
        if (rightIcon) {
            return <react_1.IonIcon icon={rightIcon} slot="end" src={rightIcon}/>;
        }
        return null;
    };
    return (<StyledIonButton {...props} shape={shape} size={size || 'small'}>
      {getIcon()}
      {children}
    </StyledIonButton>);
};
exports.default = Button;
