
// First Screen of the app when app is start 
// show the logo of the app
// handle the functionality to check whetever user is login or not 
// and navigate to appropriate screen

import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

const txtColor = '#390450'
const bgColor = '#BDA0D9'


// First Screen show at Start of the Applicaion

class LogoScreen extends React.Component{
  
  componentDidMount() {

    // when component is mounted than call this method to check user is logged in or not
    // than switch to other screen

    this._fetchAsync();
  
  }

  // Fetch the token from storage then navigate to our appropriate place
  _fetchAsync = async () => {

    // const userToken = await AsyncStorage.getItem('userToken');

    setTimeout(()=>{

      userToken=false
      this.props.navigation.navigate(userToken ? 'SelectProductCategory' : 'AuthScreen');
    // This will switch to the App screen or Auth screen and this loading

    },3000) // just for wait some seconds to get token
    
  
  };
  
  render()
  {
    return(
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../images/logo.png')}
            />
            <Text style={styles.logoText}>By Arushi Aggarwal</Text>
            <Text style={styles.txtCopyright}>Copyright Unknown16.com</Text>
        </View>
    )
  }
}

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
  image:{
    alignSelf:'center',
    marginTop:'-5%',
  },
  logoText:{
      fontWeight:'600',
      marginTop:'10%',
      fontSize:16,
  },
  txtCopyright:{
    position:'absolute',
    bottom:10,
  }
});

export default LogoScreen;