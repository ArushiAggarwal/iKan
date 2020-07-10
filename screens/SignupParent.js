import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity
} from 'react-native';

//  Total width and height of mobile screen these const are used to give 
// height and width to the components

const widthS = Dimensions.get('window').width
const heightS = Dimensions.get('window').height

//required color for designs

const txtColor = '#390450'
const bgColor = '#BDA0D9'



const SignupParent = (props) =>{
    return(
        <SafeAreaView style={styles.container}>
     
            <TouchableOpacity 
                style={styles.Menu}
                onPress={()=>{props.navigation.navigate('MenuScreen')}}>
                <Image
                    style={{width:widthS*0.1, height: widthS*0.1}}
                    source={require('../images/menuIcon.png')}
                />
                <Text style={styles.txtMenu}>Menu</Text>
            </TouchableOpacity>
     
            <Text style={styles.heading}>Sign up</Text>
  
            <View style={{flex:1,}}>
     
                <ScrollView showsVerticalScrollIndicator={false}>
      
                    <View style={[styles.row,{marginBottom:heightS*0.03,}]}>
                        <Text style={styles.txt}>Parent Name</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>
  
                    <View style={[styles.row,{marginBottom:heightS*0.03,}]}>
                        <Text style={styles.txt}>Email</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>
   
                    <View style={[styles.row,{marginBottom:heightS*0.03,}]}>
                        <Text style={styles.txt}>Street</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>
   
                    <View style={[styles.row,{marginBottom:heightS*0.03,}]}>
                        <Text style={styles.txt}>City</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>
   
                    <View style={[styles.row,{marginBottom:heightS*0.03,}]}>
                        <Text style={styles.txt}>State</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>
   
                    <View style={[styles.row,{marginBottom:heightS*0.03,}]}>
                        <Text style={styles.txt}>Zip Code</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>
   
                    <View style={[styles.row,{marginBottom:heightS*0.03,}]}>
                        <Text style={styles.txt}>Country</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>
   
                    <View style={[styles.row,{marginBottom:heightS*0.03,}]}>
                        <Text style={styles.txt}>Phone</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>
   
                    <View style={[styles.row,{marginBottom:heightS*0.03,}]}>
                        <Text style={styles.txt}>Passord</Text>
                        <TextInput secureTextEntry style={styles.input}></TextInput>
                    </View>
                    
                </ScrollView>
            </View>
   
            <View style={{alignSelf:'flex-end',marginRight:5}}>
                <TouchableOpacity 
                    style={styles.next}
                    onPress={()=>props.navigation.navigate("SelectProductCategory")}
                >
                    <Text style={styles.txtBtn}>Submit</Text>
                </TouchableOpacity>  
            </View>
  
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
  container:{
        backgroundColor:"#fff",
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start',
  },
  Menu:{
    position:'absolute',
    top:10,
    left:10,
    flexDirection:'row',
  },
  txtMenu:{
      color:txtColor,
      fontSize:18,
      fontWeight:'bold',
      height:'100%',
      textAlignVertical:'center',
  },
  heading:{
        backgroundColor:bgColor,
        fontSize:25,
        textAlign:'center',
        width:widthS*0.6,
        height:50,    
        textAlignVertical:'center',
        marginTop:heightS*0.1,
        marginBottom:heightS*0.05,
        color:txtColor,
        fontWeight:'bold',
  },
  row:{
        flex:1,
        flexDirection:'row',
  },
  txt:{
        color:txtColor,
        width:widthS*0.3,
        height:40,
        textAlign:'left',
        textAlignVertical:'center',
        fontSize:18,
        fontWeight:'bold',
  },
  input:{
        width:widthS*0.6,
        height:40,
        textAlign:'center',
        backgroundColor:'#AeAeAe',
        fontSize:18,
        textAlignVertical:'center',
        color:txtColor,

  },
  next:{
      height:heightS*0.08,
      width:widthS*0.2,   
      justifyContent:'flex-end',
      marginBottom:heightS*0.01,

  },
  txtBtn:{
      textAlign:'center',
      textAlignVertical:'center',
      height:'100%',
      color:txtColor,
      fontWeight:'bold',
      fontSize:18,
  }

});

export default SignupParent;