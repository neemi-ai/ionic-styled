"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mapStyles = (map) => (props) => Object
    .keys(props)
    .reduce((acc, key) => {
    if (map[key]) {
        return Object.assign(Object.assign({}, acc), { [map[key]]: props[key] });
    }
    return acc;
}, {});
exports.default = mapStyles;
