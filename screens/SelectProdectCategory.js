import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';

// Total Width and height of the mobile screen and this consts are used to give relative 
// height and width of the mobile screen to the components width and height.

const widthS = Dimensions.get('window').width
const heightS = Dimensions.get('window').height

// Required color for designs

const txtColor = '#390450'
const bgColor = '#BDA0D9'


const SelectProductCategory = (props) =>{
    return(
        <View style={styles.container}>
      
            {/* Menu Icon */}
            <TouchableOpacity 
                style={styles.Menu}
                onPress={()=>{props.navigation.navigate('MenuScreen')}}>
                <Image
                    style={{width:widthS*0.1, height: widthS*0.1}}
                    source={require('../images/menuIcon.png')}
                />
                <Text style={styles.txtMenu}>Menu</Text>
            </TouchableOpacity>

            <Text style={styles.heading}>Select Product Category</Text>

            <View style={styles.row}>
                <TouchableOpacity 
                    style={styles.category}
                    onPress={()=>{props.navigation.navigate('RecommendedProducts')}}>
                    <Image
                        style={{width:'55%',height:'70%'}}
                        source={require('../images/dl.png')}
                    />
                    <Text style={styles.txtcategory}>Daily Living</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.category}>
                    <Image
                        style={{width:'55%',height:'70%'}}
                        source={require('../images/Furniture.png')}
                    />
                    <Text style={styles.txtcategory}>Funiture</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.category}>
                    <Image  
                        style={{width:'55%',height:'70%'}}
                        source={require('../images/Mobility.png')}
                    />
                    <Text style={styles.txtcategory}>Mobility</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.category}>
                    <Image
                        style={{width:'55%',height:'70%'}}
                        source={require('../images/Toys.png')}
                    />
                    <Text style={styles.txtcategory}>Toys</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.category}>
                    <Image
                        style={{width:'55%',height:'70%'}}
                        source={require('../images/MotorSkills.png')}
                    />
                    <Text style={styles.txtcategory}>Motor Skills</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.category}>
                    <Image
                        style={{width:'55%',height:'70%'}}
                        source={require('../images/Recreation.png')}
                    />
                    <Text style={styles.txtcategory}>Recreation</Text>
                </TouchableOpacity>
            </View>
      
            <TouchableOpacity 
              style={styles.suggest}
              onPress={()=>props.navigation.navigate('SuggestProductCategory')}
            >
              <Text style={styles.txt}>Suggest Products Category</Text>
            </TouchableOpacity>
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
    height:heightS*0.2,
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
        width:widthS*0.9,
        height:50,    
        textAlignVertical:'center',
        marginTop:heightS*0.1,
        marginBottom:heightS*0.05,
        color:txtColor,
        fontWeight:'bold',
  },
  category:{
    width:'50%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center',
  },
  txtcategory:{
    height:'30%',
    width:'100%',
    fontWeight:'bold',
    textAlign:'center',
    textAlignVertical:'center',
    fontSize:25,
    color:'gray',
  },
  suggest:{
    width:widthS*0.65,
    height:50,
    backgroundColor:bgColor,
    // position:'absolute',
    marginTop:heightS*0.05,
  },
  txt:{
    textAlign:'center',
    textAlignVertical:'center',
    fontSize:18,
    height:'100%',
    fontWeight:'bold',
    color:txtColor,
  }
});

export default SelectProductCategory;