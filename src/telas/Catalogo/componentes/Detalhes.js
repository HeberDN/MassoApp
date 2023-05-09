import React from "react";
import { View, Image, StyleSheet, TouchableOpacity} from "react-native";

import Texto from "../../../componentes/Texto";

export default function Detalhes ({nome, nomeMassagem, logoMassagem, descricao, preco, botaoAgendar}){
    return<>
        <Texto style={estilos.nome}>{nome}</Texto>
        <View style={estilos.massagem}>
            <Image source={logoMassagem} style={estilos.imagemMassagem}/>
            <Texto style={estilos.nomeMassagem}>{nomeMassagem}</Texto>
        </View>
        <Texto style={estilos.descricao}>{descricao}</Texto>
        <Texto style={estilos.preco}>{preco}</Texto>

        <TouchableOpacity style = {estilos.botao}>
        <Texto style={estilos.textoBotao}>{botaoAgendar}</Texto>
        </TouchableOpacity> 
    </>
}

const estilos = StyleSheet.create({
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    massagem:{
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemMassagem:{
        width: 32,
        height: 32,
    },
    nomeMassagem:{
        fontSize: 16,
        lineHeight: 16,
        marginLeft: 12,
    },
    descricao:{
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco:{
        color: "#4169E1",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
    botao: {
        marginTop : 16,
        backgroundColor: "#4169E1",
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao: {
        textAlign: "center",
        color: "#fff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },
});