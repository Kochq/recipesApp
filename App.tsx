import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { supabase } from './lib/supabase';

export default function App() {
    const [recipes, setRecipes] = useState([]);

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

    return (
        <View style={styles.container}>
            <Text>Open p App.tsx to stat working on your app!</Text>
            <StatusBar style="auto" />
            <FlatList
                data={recipes}
                keyExtractor={item => item.id}
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
