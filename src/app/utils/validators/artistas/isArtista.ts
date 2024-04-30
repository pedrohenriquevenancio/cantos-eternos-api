export default function isArtista(obj: any) : boolean {
    return obj.nome && obj.nacionalidade && obj.cor && obj.sexo && obj.nascimento && obj.falecimento;
}