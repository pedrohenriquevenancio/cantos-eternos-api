"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isArtista(obj) {
    return obj.nome && obj.nacionalidade && obj.cor && obj.sexo && obj.nascimento && obj.falecimento;
}
exports.default = isArtista;
