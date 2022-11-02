import React  , {useState}from 'react';
import { View,StyleSheet,TouchableOpacity,Text,FlatList, Alert,Image,Switch, TextInput} from 'react-native';
import { Checkbox } from 'react-native-paper';
import { date } from 'yup';
import AppButton from '../Components/AppButton';
import AppColour from '../Components/AppColour';
import AppIcon from '../Components/AppIcon';
import AppText from '../Components/AppText';
import AppTextInput from '../Components/AppTextInput';

import { CheckBox } from 'react-native-elements'
import AppCheckbox from './AppCheckbox';
import { ViewBase } from 'react-native';
import DataManager from '../config/DataManager';

function AppMlog({prescription}) {
    const [checked, setChecked] = React.useState(false);
    const [checked2, setChecked2] = React.useState(true);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [note, setNote] = useState('')

    var times = []
    var checkBoxes = []

    const checkPres = () =>{
        var commonData = DataManager.getInstance();
        var logs = commonData.getLogs()
        if(prescription.time){
            for(let i = 0; i < prescription.time.length; i++){
                times.push(<AppText>{prescription.time[i]}</AppText>)
                if(logs.length > 0 && logs[i]){  
                    if(logs[i].PatientID == prescription.PatientID){
                        if(logs[i].Time == prescription.time[i]){
                            checkBoxes.push(<CheckBox
                                style={styles.box}
                                checked={checked2}
                              />)
                        }else{
                            checkBoxes.push(<CheckBox
                                style={styles.box}
                                checked={checked}
                              />)
                        }
                    }else{
                        checkBoxes.push(<CheckBox
                            style={styles.box}
                            checked={checked}
                          />)
                    }
                }else{
                    checkBoxes.push(<CheckBox
                        style={styles.box}
                        checked={checked}
                      />)
                }
            }
        }

        return logs;
    }
    
    const randomT = checkPres();

    return (
        
       <View style={styles.container}>
        
            <View style={styles.rowBetweencontainer}>
            <View style={styles.culumncontainer}>
            <AppText style={styles.subtitle}>Medicine Name</AppText>
            <AppText>{prescription.PrescripName}</AppText>
            </View>

            <View style={styles.culumncontainer}>

            <View style={styles.rowcontainer}>
            <AppText style={styles.subtitle}>Dose: </AppText>
            <AppText style={styles.subtitle}>{prescription.PrescripDose}</AppText>
            </View>

            <View style={styles.rowcontainer}>
            <AppText style={styles.subtitle}>Route: </AppText>
            <AppText style={styles.subtitle}>{prescription.PrescripRoute}</AppText>
            </View>

            <View style={styles.rowcontainer}>
            <AppText style={styles.subtitle}>Frequency: </AppText>
            <AppText style={styles.subtitle}>{prescription.PrescripFrequency}</AppText>
            </View>

            </View>
            </View>

            <View style={styles.line}></View>

            <View style={styles.rowBetweencontainer}>
            <AppText>Time:</AppText>
            { times }
            </View>
            <View style={styles.rowBetweencontainer}>
            <AppText>Given:</AppText>
            { checkBoxes }
            </View>

            <View style={styles.rowcontainer}>
            <AppTextInput 
            style={styles.inputText}
            value={note}
            placeholder="Note"
            onChangeText={(inputText) => setNote(inputText)}/>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        marginTop:10,
        width:350,
        marginLeft:13,
        borderStyle: 'dashed',
        borderWidth:1,
        borderColor:'black',
        borderRadius:5,
        padding:10
     },
     culumncontainer:{
        flexDirection:'column',
     },
     rowBetweencontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
     },checkboxcontainer:{
        flexDirection:'row',
        marginLeft:80,
        justifyContent:'space-between',
        width:255,
        
     },
    rowcontainer:{
       flexDirection:'row',
 
    },subtitle:{
        fontSize:15,
    },note:{
        fontSize:15,
        marginTop:3
    },title:{
        paddingTop:5,
        marginLeft:20
    },
    hairline: {
        backgroundColor: '#A2A2A2',
        height: 2,
        width: 340,
        marginLeft: 15
    },line:{
        backgroundColor: AppColour.black,
        height: 2,
        width: 325,
        margin:5,
    },
    inputText:{
        marginLeft:10,
        width:320,
    },
})

export default AppMlog;