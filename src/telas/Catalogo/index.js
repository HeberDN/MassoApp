import React, { useState } from "react";
import { FlatList, StyleSheet, View, TouchableOpacity, Image} from "react-native";

import Texto from "../../componentes/Texto";

import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";
import Item from "./componentes/Item";

export default function Catalogo({topo, detalhes, itens}){
    const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
    const [isListaExpandida, setIsListaExpandida] = useState(false);

    const handleCategoriaSelecionada = (categoria) => {
        if (categoria === categoriaSelecionada) {
            setIsListaExpandida(!isListaExpandida);
        } else {
            setCategoriaSelecionada(categoria);
            setIsListaExpandida(true);
        }
    };

    return ( 
        <>
            <FlatList
                data={itens.lista}
                renderItem={({item}) => (
                    <Item
                        item = {item}
                        onCategoriaSelecionada={handleCategoriaSelecionada}
                    />
                )}
                keyExtractor={({nome}) => nome}
                ListHeaderComponent={()=> {
                    return (
                        <>
                        <Topo {...topo}/>
                        <View style={estilos.catalogo}>
                            <Detalhes {...detalhes}/>
                            <Texto style={estilos.titulo}>Escolha sua massagem - Index</Texto>
                            <Texto style={estilos.titulo}>{itens.titulo}</Texto>
                        </View>
                        </>
                    );
                }}
            />

            {categoriaSelecionada && (
                <View>
                <TouchableOpacity onPress={() => setIsListaExpandida(!isListaExpandida)}>
                  <Texto>Massagens em {categoriaSelecionada}:</Texto>
                </TouchableOpacity>
                {isListaExpandida && (
                  <View>
                    {itens.lista.map((massagem) => {
                      if (massagem.nome === categoriaSelecionada) {
                        return (
                          <View key={massagem.nome}>
                            <Image source={massagem.imagem} />
                            <Texto>{massagem.descricao}</Texto>
                            <Texto>Preço: {massagem.preco}</Texto>
                            <TouchableOpacity>
                              <Texto>{detalhes.botaoAgendar}</Texto>
                            </TouchableOpacity>
                          </View>
                        );
                      }
                      return null;
                    })}
                  </View>
                )}
              </View>
            )}
        </>
    );  
}

const estilos = StyleSheet.create({  
    titulo:{
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    catalogo: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    }
});