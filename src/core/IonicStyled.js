"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("@ionic/react/css/core.css");
require("@ionic/react/css/normalize.css");
require("@ionic/react/css/structure.css");
require("@ionic/react/css/typography.css");
require("@ionic/react/css/padding.css");
require("@ionic/react/css/float-elements.css");
require("@ionic/react/css/text-alignment.css");
require("@ionic/react/css/text-transformation.css");
require("@ionic/react/css/flex-utils.css");
require("@ionic/react/css/display.css");
const react_1 = require("@emotion/react");
const react_2 = require("@ionic/react");
const react_router_1 = require("@ionic/react-router");
const react_3 = __importDefault(require("react"));
const theme_1 = __importDefault(require("../theme"));
const variables_1 = __importDefault(require("../theme/variables"));
const ionicStyles = (0, react_1.css)(variables_1.default);
(0, react_2.setupIonicReact)();
const IonicStyled = ({ children }) => (<react_1.ThemeProvider theme={theme_1.default}>
    <react_1.Global styles={(0, react_1.css)(ionicStyles)}/>
    <react_router_1.IonReactRouter>
      <react_2.IonApp>
        {children}
      </react_2.IonApp>
    </react_router_1.IonReactRouter>
  </react_1.ThemeProvider>);
exports.default = IonicStyled;
