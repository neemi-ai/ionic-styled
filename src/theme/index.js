"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors_1 = require("./colors");
const shadows_1 = require("./shadows");
const theme = {
    colors: colors_1.colors,
    shadows: shadows_1.shadows,
    radii: { primary: '8px', secondary: '60px' },
    borders: { primary: `1px solid ${colors_1.colors.borders}` }
};
exports.default = theme;
