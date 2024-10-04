import { aleatorio } from "./aleatorio.js";
import { perguntas } from "./perguntas.js";

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-principal");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultado");
const textoResultados = document.querySelector(".caixa-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");


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
    const afirmacoes = aleatorio (opcaoSelecionada.afirmaca);
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}


function mostraResultado(){
    caixaPerguntas.textContent = "Em suma, a coleta correta de lixo é essencial para a proteção da saúde pública, a preservação ambiental, a eficiência dos processos de reciclagem, a economia e a educação da comunidade. Adotar práticas corretas na gestão de resíduos contribui para um futuro mais limpo e sustentável para todos."
    textoResultados.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    botaoJogarNovamente.addEventListener("click", jogarNovamente);
}

function jogarNovamente(){
    atual = 0;
    historiaFinal = "";
    mostraPergunta();

}

mostraPergunta();