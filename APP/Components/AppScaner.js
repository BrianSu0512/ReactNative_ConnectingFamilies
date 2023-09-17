import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button,Linking, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {Camera} from 'expo-camera';
import DataManager from '../config/DataManager';

export default function AppScaner({patients,onPress1}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const [patient, setPatients] = useState(patients)

  useEffect(() => {
    const getCameraScannerPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    };
    
    getCameraScannerPermissions();
  }, []);

  const updateTime = async (time, prescript) =>{
    var commonData = DataManager.getInstance();

    var logData = {
      PrescriptID : prescript.PrescripID,
      PatientID: prescript.PatientID,
      Time:time
    }
    await commonData.addLogs(logData)
  }


  const handleBarCodeScanned = ({ type, data }) => {
    setPatients(patients)
    setScanned(true);

    if(!patient){
      Alert.alert('No participant selected','Please select a participant before scanning!')
    }else{
      let commonData = DataManager.getInstance();
      let prescript = commonData.getPrescription(patient.PatientID)
      let medicine = prescript.filter((medicine) => medicine.PrescripName.toLowerCase() === data.toLowerCase())
      if(medicine.length > 0){
        medicine = medicine[0]
        if(medicine.time.length == 1){
          updateTime(medicine.time[0])
        }else if(medicine.time.length == 2){
          Alert.alert('Pick the time', 'Pick the time when the medication was suppose to be given',
          [{text: medicine.time[0], onPress:()=>updateTime(medicine.time[0], medicine)}, {text: medicine.time[1], onPress:()=>updateTime(medicine.time[1], medicine)}] )
        }else if(medicine.time.length == 3){
          Alert.alert('Pick the time', 'Pick the time when the medication was suppose to be given', 
          [{text: medicine.time[0], onPress:()=>updateTime(medicine.time[0], medicine)}, {text: medicine.time[1], onPress:()=>updateTime(medicine.time[1], medicine)}, {text: medicine.time[2], onPress:()=>updateTime(medicine.time[2], medicine)}])
        }
        //navigation.navigate("MedicalLog",{
        //  paramPatient: patient,
        //  paramMedicine: medicine
        //})
      }else{
        Alert.alert('Wrong Medication', 'The selected participant does not need to take this medication')
      }
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() =>{setScanned(false),onPress1} } />}
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center'
  }
})