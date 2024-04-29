class GenerosMusicais {

    create(artista: any) {
        console.log('Artista criado com sucesso');
    }

    findAll() {
        console.log('Listando todos os artistas');
    }

    findById(id: any) {
        console.log('Listando artista por id');
    }

    update(id: any, artista: any) {
        console.log('Artista atualizado com sucesso');
    }

    delete(id: any) {
        console.log('Artista deletado com sucesso');
    }

}

export default new GenerosMusicais();
