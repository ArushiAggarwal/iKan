// Login Screen with two input fields and button which help us navgigate 
// home or product category screen

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

// Total Width and height of the mobile screen and this consts are used to give relative 
// height and width of the mobile screen to the components width and height.

const widthS = Dimensions.get('window').width
const heightS = Dimensions.get('window').height

// Required color for designs

const txtColor = '#390450'
const bgColor = '#BDA0D9'


class LoginScreen extends React.Component{

    loginHandler(){

        // You Logic to login is here than navigate to Home

        this.props.navigation.navigate('SelectProductCategory')
   
    }
    render()
    {
        return(
            <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.Menu}
                    onPress={()=>{this.props.navigation.navigate('MenuScreen')}}>
                    <Image
                        style={{width:widthS*0.1, height: widthS*0.1}}
                        source={require('../images/menuIcon.png')}
                    />
                    <Text style={styles.txtMenu}>Menu</Text>
                </TouchableOpacity>
            
                <Text style={styles.heading}>Sign In</Text>
                
                <View style={[styles.row,{marginBottom:heightS*0.03,}]}>
                    <Text style={styles.txt}>Email ID</Text>
                    <TextInput style={styles.input}></TextInput>
                </View>

                <View style={[styles.row,{marginBottom:heightS*0.03,}]}>
                    <Text style={styles.txt}>Password</Text>
                    <TextInput secureTextEntry style={styles.input}></TextInput>
                </View>

                <View style={[styles.row,{marginBottom:heightS*0.03,}]}>
                    <Text style={[styles.txt,{textAlign:'right',width:'90%'}]}>Forget Password ?</Text>
                </View>

                <View style={{marginRight:5}}>
                    <TouchableOpacity 
                        style={styles.login}
                        onPress={()=>this.loginHandler()}>
                        <Text style={styles.txtBtn}>Login</Text>
                    </TouchableOpacity>  
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
  container:{
        backgroundColor:"#fff",
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start',
  },
  row:{
    flexDirection:'row',
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
    marginBottom:heightS*0.1,
    color:txtColor,
    fontWeight:'bold',
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
    fontWeight:'bold',
    fontSize:18,
},
login:{
    backgroundColor:bgColor,
    height:50,
    width:widthS*0.6,   
    justifyContent:'center',
},
txtBtn:{
    textAlign:'center',
    textAlignVertical:'center',
    height:'100%',
    color:txtColor,
    fontWeight:'bold',
    fontSize:25,
}
});

export default LoginScreen;