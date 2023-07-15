import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, View, Image, Text, Pressable, Alert, RefreshControl, ScrollView} from 'react-native';

import styles from './styles';
import dados from '../../../dados';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/Header';
import { TextInput } from 'react-native-gesture-handler';

const Car = ({ navigation }) => {
    
    const [refreshing, setRefreshing] = useState(false);
    const [editing, setEditing] = useState(false);

    const [model, setModel] = useState("Celta");
    const [year, setYear] = useState("1999");
    const [licensePlate, setLicensePlate] = useState("FGA309");
    const [mileage, setMileage] = useState("300903");
    const [notes, setNotes] = useState("Carro futuro da marys");

    const handleEditPress = () => {
        setEditing(!editing);
    };

    const handleCancelPress = () => {
        setEditing(!editing);
    }

    const handleSavePress = () => {
       /*Enviar os dados pro banco*/ 

        setEditing(!editing);
    }

    return(
        <KeyboardAvoidingView style={styles.body}>
            <ScrollView /*refreshControl={}*/ >
                <Header/>
                <View style={styles.container} >
                    
                    <Text style={styles.title}>Meu Carro</Text>
                    
                    <View style={styles.textArea}>
                        <Text style={styles.label}>Modelo:</Text>
                        {editing ? (
                            <TextInput style={styles.textInput} value={model} onChangeText={(value) => setModel(value)}></TextInput> 
                        ) : (
                            <Text style={styles.text}>{model}</Text>
                        )}
                        <Text style={styles.label}>Ano:</Text>
                        {editing ? (
                            <TextInput style={styles.textInput} value={year} onChangeText={(value) => setYear(value)}></TextInput> 
                        ) : (
                            <Text style={styles.text}>{year}</Text>
                        )}
                        <Text style={styles.label}>Placa:</Text>
                        {editing ? (
                            <TextInput style={styles.textInput} value={licensePlate} onChangeText={(value) => setLicensePlate(value)}></TextInput> 
                        ) : (
                            <Text style={styles.text}>{licensePlate}</Text>
                        )}

                        <Text style={styles.label}>Kilometragem:</Text>
                        {editing ? (
                            <TextInput  keyboardType="numeric" style={styles.textInput} value={mileage} onChangeText={(value) => setMileage(value)}></TextInput> 
                        ) : (
                            <Text style={styles.text}>{mileage}</Text>
                        )}
                        <Text style={styles.label}>Observações:</Text>
                        {editing ? (
                            <TextInput multiline style={styles.textInput} value={notes} onChangeText={(value) => setNotes(value)}></TextInput> 
                        ) : (
                            <Text style={styles.text}>{notes}</Text>                
                        )}
                    </View>
                    
                    <View style={styles.buttonArea}>
                        {editing? (
                            <View style={styles.buttonArea}>
                                <Pressable style={[styles.button, {backgroundColor: '#E6332A'}]} onPress={handleCancelPress}>
                                    <Text style={[styles.textButton, {color: '#f5f5f7'}]}>Cancelar</Text>
                                </Pressable> 
                                <Pressable style={styles.button} onPress={handleSavePress}>
                                    <Text style={styles.textButton}>Salvar</Text>
                                </Pressable> 
                            </View>
                            
                        ): (
                           <Pressable style={styles.button} onPress={handleEditPress}>
                                <Text style={styles.textButton}>Editar</Text>
                            </Pressable> 
                        )}
                        
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Car