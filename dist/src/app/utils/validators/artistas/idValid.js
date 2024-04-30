"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function idValid(id) {
    return /^[0-9a-fA-F]{24}$/.test(id);
}
exports.default = idValid;
