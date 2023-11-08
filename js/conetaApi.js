async function listaVideos () { //async (difiniu como assincrona) lendo linha por linha, vai esperar o fetch para retornar o resultado
    const conexao = await fetch("http://localhost:3000/videos"); // fetch (prometendo q vai ser resolvido ou será rejeitada - requisição get, varios dados e await (aguardando)
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida; // retornar o valor da conexaoConvertida
}

async function criaVideo(titulo, descricao, url, imagem){
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST", 
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })      
   });
   if(!conexao.ok){
    throw new Error("Não foi possível enviar o vídeo");
   }

   const conexaoConvertida = await conexao.json();
   return conexaoConvertida;
}

async function buscaVideo(termoDeBusca){
    const conexao = await fetch (`http://localhost:3000/videos?q=${termoDeBusca}`)
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

export const conectaApi = { // exportar uma variavel que vai receber um objeto cheio de funções
    listaVideos,
    criaVideo, 
    buscaVideo
}