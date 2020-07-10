import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';

// Total Width and height of the mobile screen and this consts are used to give relative 
// height and width of the mobile screen to the components width and height.

const widthS = Dimensions.get('window').width
const heightS = Dimensions.get('window').height

// Required color for designs

const txtColor = '#390450'
const bgColor = '#BDA0D9'


// URLs of the web pages when click on buy now then go to theses websites

const helmetUrl = 'https://www.flaghouse.ca/Special-Needs/Daily-Living/Helmets/'
const changingTable = 'https://max-ability.com/product/pressalit-care-1000-child-changing-table/?c=aacf2d960ac3'
const transferEquipment = 'https://www.flaghouse.ca/Special-Needs/Daily-Living/Transfer-Equipment/'
const toileting ='https://www.amazon.com/Enshey-Training-Adjustable-Polypropylene-Trainer/dp/B076KY765V/ref=sr_1_16?keywords=special+needs+kids+Toileting&qid=1571536103&sr=8-16'

const RecommendedProducts = (props) =>{
    return(
        <View style={styles.container}>
        
            <TouchableOpacity 
                style={styles.Menu}
                onPress={()=>{props.navigation.navigate('MenuScreen')}}>
                <Image
                    style={{width:widthS*0.1, height: widthS*0.1}}
                    source={require('../images/menuIcon.png')}
                />
                <Text style={styles.txtMenu}>Menu</Text>
            </TouchableOpacity>

            <Text style={styles.heading}>Select Product</Text>

            <View style={styles.row}>
                <View style={styles.category}>
                    <Image
                        style={{width:'90%',height:'50%'}}
                        source={require('../images/recommendedproducts/transfer_equipment.jpg')}
                    />
                    <TouchableOpacity style={styles.buynow}>
                        <Text style={[styles.txt]}>Transfer Equipment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.buynow}
                        onPress={()=>{ Linking.openURL(transferEquipment)}}
                    >
                        <Text style={styles.txt}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.category}>
                    <Image
                        style={{width:'90%',height:'50%'}}
                        source={require('../images/recommendedproducts/toileting2.jpg')}
                    />
                    <TouchableOpacity style={styles.buynow}>
                        <Text style={styles.txt}>Toileting</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.buynow}
                        onPress={()=>{ Linking.openURL(toileting)}}
                    >
                        <Text style={styles.txt}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.category}>
                    <Image
                        style={{width:'90%',height:'50%'}}
                        source={require('../images/recommendedproducts/helmets3.jpg')}
                    />
                    <TouchableOpacity style={styles.buynow}>
                        <Text style={styles.txt}>Helmets</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.buynow}
                        onPress={()=>{ Linking.openURL(helmetUrl)}}
                    
                    >
                        <Text style={styles.txt}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.category}>
                    <Image
                        style={{width:'90%',height:'50%'}}
                        source={require('../images/recommendedproducts/Changing_tables.jpg')}
                    />
                    <TouchableOpacity style={styles.buynow}>
                        <Text style={styles.txt}>Changing Tables</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.buynow}
                        onPress={()=>{ Linking.openURL(changingTable)}}
                    >
                        <Text style={styles.txt}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
    fontSize:25,
    textAlign:'center',
    width:widthS*0.9,
    height:50,    
    textAlignVertical:'center',
    marginTop:heightS*0.1,
    marginBottom:heightS*0.01,
    color:txtColor,
    fontWeight:'bold',
  },
  category:{
    width:'45%',
    height:'100%',
    alignItems:'center',
    justifyContent:'space-around',
  },
  buynow:{
    height:'15%',
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:bgColor,
    marginTop:heightS*0.02,
  },
  txt:{
    fontWeight:'bold',
    fontSize:15,
  }
});

export default RecommendedProducts;