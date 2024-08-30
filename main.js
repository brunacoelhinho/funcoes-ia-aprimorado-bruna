const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-principal");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultado");
const textoResultados = document.querySelector(".caixa-resultado");

const perguntas = [
    {
        enunciado: "Quais materiais podem ser reciclados?",
        alternativas: [
            {
                texto: "Plasico,papelão,vidro,alumínio",
                afirmacao: " Parabéns você acertou,esses são os lixos reciclaveis ",
            },
            {
                texto: "lampada, espelho,ampola de remédio",
                afirmacao: "Que pena você errou,esses não são os lixos reciclaveis",
            }
        ]
    },
    {
        enunciado: "Quais são os diferentes tipos de plasticos que podem ser reciclados?",
        alternativas: [
            {
                texto: "Polipropileno,Polietileno",
                afirmacao: "Esses são os plasticos correto para fazer a reciclagem",
            },
            {
                texto: "Plastico pvc e acidos polelático",
                afirmacao: "Esses não são palsticos adequados para a reciclagem",
            }
        ]
    },
    {
        enunciado: " O que é coleta seletiva?",
        alternativas: [
            {
                texto: " É a separação do lixo em devidas cores ",
                afirmacao: " Essa é a forma correta da separação ",
            },
            {
                texto: " São lixos que podem ser misturados ",
                afirmacao: " São formas errados de coleta seletiva ",
            }
        ]
    },
    {
        enunciado: " O que são residuos líquidos?",
        alternativas: [
            {
                texto: " São materiais não aproveitados que se encontram no estado líquido ",
                afirmacao: " Parabéns você acertou ossp é afirmação correta  ",
            },
            {
                texto: " São materiais reciclaveis que podem ser reutilizados ",
                afirmacao: " Que pena,essa não é a resposta certa ",
            }
        ]
    },
    {
        enunciado: " Onde é o lugar correto para descartar os lixos?",
        alternativas: [
            {
                texto: " Em lixeiras proximas para que seja dirigido os lixos ",
                afirmacao: "essa é a resposta certa parabéns",
            },
            {
                texto: " Nas ruas ou em qulquer lugar onde estiver  ",
                afirmacao: " Infelizmente não é a frma correta ",
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
         return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativas of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativas.texto;
        botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativas));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opicaoSelecionada){
    const afirmacoes = opicaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em suma, a coleta correta de lixo é essencial para a proteção da saúde pública, a preservação ambiental, a eficiência dos processos de reciclagem, a economia e a educação da comunidade. Adotar práticas corretas na gestão de resíduos contribui para um futuro mais limpo e sustentável para todos."
    textoResultados.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();