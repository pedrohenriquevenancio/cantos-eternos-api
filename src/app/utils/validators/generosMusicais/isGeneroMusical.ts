export default function isGeneroMusical(obj: any) : boolean {
    return obj.nome && (obj.ativo === true || obj.ativo === false);
}