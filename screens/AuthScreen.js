// Auth screen which has two button signup and login 
// which help us to navigate to signup and login screen 

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';

// Width and Height of the Screen of the Mobile


const widthS = Dimensions.get('window').width
const heightS = Dimensions.get('window').height

// Required Color for designing

const txtColor = '#390450'
const bgColor = '#BDA0D9'


const AuthScreen = (props) =>{
    return(
        <View style={styles.container}>

        {/* Menu Icon */}
        {/* Image of Icon Menu with height or Width of 10% of the screen */}
          <TouchableOpacity style={styles.Menu} 
                onPress={()=>{props.navigation.navigate('MenuScreen')}}>
                <Image
                    style={{width:widthS*0.1, height: widthS*0.1}}
                    source={require('../images/menuIcon.png')}
                />
                <Text style={styles.txtMenu}>Menu</Text>
            </TouchableOpacity>
        
        {/* Sing up button click to switch signup screen Parent Signup Screen  */}
          <TouchableOpacity 
              style={styles.signup}
              onPress={()=>props.navigation.navigate('SignupChild')}
            >
              <Text style={styles.txt}>Sign up</Text>
            </TouchableOpacity>
        
        {/* Login button click to switch Login screen */}
            <TouchableOpacity 
              style={styles.login}
              onPress={()=>props.navigation.navigate('LoginScreen')}
            >
              <Text style={styles.txt}>Log In</Text>
            </TouchableOpacity>
        </View>
    )
}

// styles


const styles = StyleSheet.create({
  container:{
        backgroundColor:'#fff',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
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
  signup:{
    width:widthS*0.55,
    height:50,
    backgroundColor:bgColor,
    position:'absolute',
    top:heightS*0.35,
  },
  login:{
    width:widthS*0.55,
    height:50,
    backgroundColor:bgColor,
    position:'absolute',
    top:heightS*0.50,
  },
  txt:{
    textAlign:'center',
    textAlignVertical:'center',
    fontSize:25,
    height:'100%',
    color:txtColor,
  }
});

export default AuthScreen;