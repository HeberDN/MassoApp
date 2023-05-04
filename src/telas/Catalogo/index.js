import React from "react";
import { StyleSheet, View } from "react-native";

import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";

export default function Catalogo(){
    return <>
        <Topo />

        <View style={estilos.catalogo}>
            <Detalhes />
        </View>
    </>   
}

const estilos = StyleSheet.create({
    catalogo: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    }
});