import logo from "../../assets/logo.png";
import massagemModeladoraCorporal from "../../assets/massagens/MassagemModeladoraCorporal.png";
import massagemModeladoraFacial from "../../assets/massagens/MassagemModeladoraFacial.png";
import massagemRelaxante from "../../assets/massagens/MassagemRelaxante.png";
import massagemTerapeutica from "../../assets/massagens/MassagemTerapêutica.png";
import mocha from "../../assets/massagens/Mocha.png";

const catalogo = {
    topo: {
        titulo: "Serviços",
    },
    detalhes: {
        nome: "Catálogo",
        logoMassagem: logo,
        nomeMassagem: "Toque Terapêutico",
        descricao: "Especializado em técnica de massagem que tem como objetivo principal proporcionar relaxamento físico e mental ao cliente.",
        preco: "R$ 80,00",
        botaoAgendar: "Agendar",
    },
    itens: {
        titulo: "Massagens",
        lista: [
            {
                nome: "Massagem Modeladora Corporal",
                imagem: massagemModeladoraCorporal,
            },
            {
                nome: "Massagem Modeladora Facial",
                imagem: massagemModeladoraFacial,
            },
            {
                nome: "Massagem Relaxante",
                imagem: massagemRelaxante,
            },
            {
                nome: "Massagem Terapêutica",
                imagem: massagemTerapeutica,
            },
            {
                nome: "Mocha",
                imagem: mocha,
            },
        ]
    }
}

export default catalogo;