import React from "react";
import { View, Image, StyleSheet} from "react-native";

import Texto from "../../../componentes/Texto";
import logo from '../../../../assets/logo.png';

export default function Detalhes (){
    return<>
        <Texto style={estilos.nome}>Catálogo</Texto>
        <View style={estilos.massagem}>
            <Image source={logo} style={estilos.imagemMassagem}/>
            <Texto style={estilos.nomeMassagem}>Massagem Relaxante</Texto>
        </View>
        <Texto style={estilos.descricao}>Uma massagem relaxante é uma técnica de 
                massagem que tem como objetivo principal 
                proporcionar relaxamento físico e mental 
                ao cliente.
                Essa técnica é realizada com movimentos lentos, 
                suaves e rítmicos, aplicados em todo o corpo do 
                cliente, utilizando óleos ou cremes para
                facilitar o deslizamento das mãos do
                terapeuta</Texto>
        <Texto style={estilos.preco}>R$ 80,00</Texto>
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
});