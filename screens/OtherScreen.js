import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';


const OtherScreen = (props) =>{
    return(
        <View style={styles.container}>

            <TouchableOpacity 
                style={styles.Menu}
                onPress={()=>props.navigation.navigate('MenuScreen')}
            >
                <Image
                    style={{width:widthS*0.1, height: widthS*0.1}}
                    source={require('../images/menuIcon.png')}
                />
                <Text style={styles.txtMenu}>Menu</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[styles.heading,{marginTop:heightS*0.1}]}
                onPress={()=>props.navigation.navigate('AuthScreen')}
                >
                <Text style={styles.txt}>Find Friends</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.heading}
                onPress={()=>props.navigation.navigate('AuthScreen')}
                >
                <Text style={styles.txt}>Find Schools</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.heading}
                onPress={()=>props.navigation.navigate('AuthScreen')}
                >
                <Text style={styles.txt}>Find Therapist</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.heading}
                onPress={()=>props.navigation.navigate('AuthScreen')}
                >
                <Text style={styles.txt}>Find Volunteers</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.heading}
                onPress={()=>props.navigation.navigate('AuthScreen')}                
                >
                <Text style={styles.txt}>Resources</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.heading}
                onPress={()=>props.navigation.navigate('AboutUs')}
                >
                <Text style={styles.txt}>About Us</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const widthS = Dimensions.get('window').width
const heightS = Dimensions.get('window').height
const txtColor = '#390450'
const bgColor = '#BDA0D9'

const styles = StyleSheet.create({
  container:{
        backgroundColor:'#fff',
        flex:1,
        alignItems:'center',
  },
  row:{
    flexDirection:'row',
    width:widthS*0.9,
    height:heightS*0.38,
    justifyContent:'space-between',
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
    width:widthS*0.9,
    height:50,    
    marginTop:heightS*0.02,
  },
  txt:{
    fontSize:25,
    textAlign:'center',
    textAlignVertical:'center',
    fontWeight:'bold',
    color:txtColor,
    width:'100%',
    height:'100%',      
  }
});

export default OtherScreen;