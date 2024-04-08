import { FlatList, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import { useEffect, useState } from 'react';
import { supabase } from './lib/supabase';
import { recipe } from './lib/types/types';

export default function App() {
    const [recipes, setRecipes] = useState<recipe[]>([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            const { data, error } = await supabase.from("recipes").select("*");

            if(error) {
                console.log(error);
            } else {
                setRecipes(data);
            }
        }

        fetchRecipes();
    }, [])

    const onClick = (e: { nativeEvent: { text: string; }; }) => {
        alert("Escribiste: " + e.nativeEvent.text)
    }

    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#61dafb"
            />
            <Text>Esta es una prueba</Text>

            <TextInput
                style={{
                    height: 40,
                    borderColor: "gray",
                    borderWidth: 1,
                    width: 140
                }}
                onSubmitEditing={onClick}
            >
            </TextInput>

            <FlatList
                data={recipes}
                renderItem={({ item }) => <Text>{item.title}</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
