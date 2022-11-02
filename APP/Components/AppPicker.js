import React, {useState} from 'react';

import { View, StyleSheet, Modal, Button, TouchableWithoutFeedback, FlatList } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppPickerItem from './AppPickerItem.js';
import AppText from './AppText';
import AppScreen from '../AppScreen/AppScreen.js';
import AppButton from './AppButton.js';


function AppPicker({data, icon, placeholder, numColumns, selectedItem, onSelectItem}) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={24}/>}
                    <AppText style={styles.text}> {selectedItem ? selectedItem.PatientName : placeholder} </AppText>
                    <MaterialCommunityIcons name="chevron-down" size={24}/>
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <AppScreen>
                
                    <View style={styles.button} >
                    <AppButton title="Close" onPress={() => setModalVisible(false)}/>
                    </View>
                    <FlatList
                        numColumns={numColumns}
                        data={data}
                        keyExtractor={item => item.PatientID}
                        renderItem = {({item}) => 
                        <AppPickerItem
                            onPress={()=> {
                                setModalVisible(false);
                                onSelectItem(item);
                                    }
                                }
                            label={item.PatientName}
                            image={require("../assets/Patient.png")}
                            />}
                    />

                    
                </AppScreen> 
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    
    container:{
        flexDirection: 'row',
        backgroundColor:'#ededed',
        borderRadius: 25, 
        padding: 10,
        marginVertical: 20,
        width:'100%',
    },
    text:{
        flex:1,
    },button:{
        marginTop:20,
    }
})
export default AppPicker;