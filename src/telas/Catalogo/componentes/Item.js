import React,{useState} from "react";
import {View, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";

import Texto from '../../../componentes/Texto';

export default function Item ({item: {nome, imagem, descricao, preco, botaoAgendar}, onCategoriaSelecionada}) {
    const[isSelected, setIsSelected] = useState(false);

    const toggleSelection = () => {
        setIsSelected(!isSelected);
        onCategoriaSelecionada(isSelected ? null : nome);
    };

    return( 
        <TouchableOpacity onPress={toggleSelection}>
            <View style={[estilos.item, isSelected && estilos.itemSelecionado]}>
            <Image source={imagem} style={estilos.imagem}/>
            <Texto style={estilos.nome}>{ nome }</Texto>
            </View>
        </TouchableOpacity>
    );
}

const estilos = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: "center",
    },
    itemSelecionado:{
        backgroundColor:"#FOFOFO",
    },
    imagem:{
        width: 46,
        height: 46,
    },
    nome:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646",
    }
});