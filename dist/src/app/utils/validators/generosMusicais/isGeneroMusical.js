"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isGeneroMusical(obj) {
    return obj.nome && (obj.ativo === true || obj.ativo === false);
}
exports.default = isGeneroMusical;
