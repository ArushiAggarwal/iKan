// It is a simple screen with some text

// Imports All the Components which required

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

const AboutUs = (props) =>{
    return(
        <View style={styles.container}>

            <TouchableOpacity 
                style={styles.Menu}

                // If click on menu Button Navigate to Menu Screen 

                onPress={()=>{props.navigation.navigate('MenuScreen')}}> 

                {/* Image of Icon Menu with height or Width of 10% of the screen */}

                <Image
                    style={{width:widthS*0.1, height: widthS*0.1}}
                    source={require('../images/menuIcon.png')}
                />
                <Text style={styles.txtMenu}>Menu</Text>
            </TouchableOpacity>

            {/* Heading of Screen */}

            <Text style={styles.heading}>About Us</Text>

            <Text style={[styles.txt,{textAlign:'center',fontWeight:'bold'}]}>Unknown16</Text>
            <Text style={styles.txt}>
                Unknown16.com is an internation non-profit Organization, founded by Arushi
                Aaggarwal, dedicated to United Nation SDG's.
                For more details visit 
                Unknown16.com
            </Text>
        </View>
    )
}



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
    marginTop:heightS*0.1,
    fontSize:25,
    textAlign:'center',
    textAlignVertical:'center',
    fontWeight:'bold',
    color:txtColor,
    marginBottom:heightS*0.05,

  },
  txt:{
      width:widthS*0.9,
      padding:20,
      fontSize:25,
      textAlign:"justify",
  }
});

export default AboutUs;