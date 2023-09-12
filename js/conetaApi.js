async function listaVideos () { //async (difiniu como assincrona) lendo linha por linha, vai esperar o fetch para retornar o resultado
    const conexao = await fetch("http://localhost:3000/videos"); // fetch (prometendo q vai ser resolvido ou será rejeitada - requisição get, varios dados e await (aguardando)
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida; // retornar o valor da conexaoConvertida

}

export const conectaApi = { // exportar uma variavel que vai receber um objeto cheio de funções
    listaVideos
}