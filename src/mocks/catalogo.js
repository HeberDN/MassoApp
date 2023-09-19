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
        titulo: "Escolha sua massagem",
        lista: [
            {
                nome: "Terapêuticas",
                massagens: ["Auricoterapia", "Quick massagem", "Flexologia"],
                imagem: massagemModeladoraCorporal,
            },
            {
                nome: "Relaxantes",
                massagens: ["Massagem sueca", "Massagem tailandesa", "Shiatsu"],
                imagem: massagemModeladoraFacial,
            },
            {
                nome: "Estéticas",
                massagens:["Drenagem linfática", "Massagem modeladora", "Peeling corporal"],
                imagem: massagemRelaxante,
            },
            {
                nome: "Alternativas",
                massagens: ["Acupuntura", "Reiki", "Reflexologia"],
                imagem: massagemTerapeutica,
            },
        ]
    }
}

export default catalogo;