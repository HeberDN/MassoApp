import React from "react";
import { View, Image, StyleSheet, TouchableOpacity} from "react-native";

import Texto from "../../../componentes/Texto";

export default function Detalhes ({nomeEmpresa, imagemMassagem, logoEmpresa, descricaoEmpresa, botaoAgendar}){
    return<>
        <Texto style={estilos.nome}>{nomeEmpresa}</Texto>
        <View style={estilos.massagem}>
            <Image source={logoEmpresa} style={estilos.imagemMassagem}/>
            <Texto style={estilos.nomeEmpresa}>{nomeEmpresa}</Texto>
        </View>
        <Texto style={estilos.descricao}>{descricaoEmpresa}</Texto>
        
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
        color: "#00BFFF",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
    botao: {
        marginTop : 16,
        backgroundColor: "#00BFFF",
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