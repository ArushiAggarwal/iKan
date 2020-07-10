// Menu Screen which help us to navigate between the screens

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,

} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

const MenuScreen = (props) =>{
    return(
        <View style={styles.container}>

            <View style={{flex:1}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity 
                    style={[styles.heading]}
                    onPress={()=>props.navigation.navigate('AuthScreen')}
                    >
                    <Text style={styles.txt}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.heading}
                    onPress={()=>props.navigation.navigate('AuthScreen')}
                    >
                    <Text style={styles.txt}>Sign Up/Login</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.heading}
                    onPress={()=>props.navigation.navigate('SelectProductCategory')}
                    >
                    <Text style={styles.txt}>Categories List</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.heading}
                    onPress={()=>props.navigation.navigate('SuggestProduct')}
                    >
                    <Text style={styles.txt}>Suggest Product</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style={styles.heading}
                    onPress={()=>props.navigation.navigate('RecommendedProducts')}
                    >
                    <Text style={styles.txt}>Products List</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.heading}
                    onPress={()=>props.navigation.navigate('OtherScreen')}
                    >
                    <Text style={styles.txt}>Therapists List</Text>
                </TouchableOpacity>
            
                <TouchableOpacity 
                    style={styles.heading}
                    onPress={()=>props.navigation.navigate('OtherScreen')}
                    >
                    <Text style={styles.txt}>Schools List</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.heading}
                    onPress={()=>props.navigation.navigate('OtherScreen')}
                    >
                    <Text style={styles.txt}>Volunteers List</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style={styles.heading}
                    onPress={()=>props.navigation.navigate('OtherScreen')}                
                    >
                    <Text style={styles.txt}>Find a Friend</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.heading,{marginBottom:heightS*0.01,}]}
                    onPress={()=>props.navigation.navigate('AuthScreen')}
                    >
                    <Text style={styles.txt}>Sign Out</Text>
                </TouchableOpacity>
            </ScrollView>
            </View>
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

export default MenuScreen;