import React from 'react';
import { View,StyleSheet,TouchableOpacity, Image} from 'react-native';
import AppButton from '../Components/AppButton';
import AppColour from '../Components/AppColour';
import AppIcon from '../Components/AppIcon';
import AppInput from '../Components/AppIput';
import AppListItem from '../Components/AppListItem';
import AppText from '../Components/AppText';
import AppTextInput from '../Components/AppTextInput';
import AppScreen from './AppScreen';

function EditAccountScreen({navigation: { goBack },route}) {
    const data=[route.params];
    return (
        <AppScreen>
        <View style={styles.heading}>
       
           <TouchableOpacity onPress={()=>goBack()}>
           
               <AppIcon
                   name="chevron-left"
                   size={50}
                   style={styles.headingIcon}
               />
               
           </TouchableOpacity>

      
           <View>
               <Image source={require("../assets/icon.png")} style={styles.logo}/>
               <AppText style={styles.logoText}>Connecting Families</AppText>
           </View>
     
   </View>
   <AppText style={styles.Title}>Edit Account</AppText>
   <View style={styles.hairline} />

   <View style={styles.profileContainer}>
                    <AppListItem image={data.paramImage}/>
    </View>
   
   </AppScreen>
   
);
}
const styles = StyleSheet.create({
heading:{
   flexDirection:"row",
   width:230,
   marginLeft:20,
   paddingTop:10,
   justifyContent:'space-between',

},
logo:{
   marginTop:10,
   marginLeft:35,
   width:80,
   height:80,
},
logoText:{
   fontSize:13,
   paddingLeft:5,
   fontStyle:'italic'
},
Title:{
   fontStyle:'italic',
   marginTop:10,
   marginLeft:15
},
subheading:{
   fontSize:18,
   marginLeft:10,
},
hairline: {
   backgroundColor: '#A2A2A2',
   height: 2,
   width: 340,
   marginLeft: 15
},fullLine: {
   backgroundColor: '#A2A2A2',
   height: 2,
   width: 500,
   marginBottom: 15
},
 profileContainer:{
   marginTop: 10,
   height: 90,
   backgroundColor:AppColour.otherColorLite,
   justifyContent:"center",
},
textStyle:{
   fontSize:18,
   color:"#D6F8FF",
   textTransform:'none',
   marginTop:10,
   marginLeft:31
},

})

export default EditAccountScreen;