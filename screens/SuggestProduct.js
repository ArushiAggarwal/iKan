

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import CheckBox from 'react-native-check-box'

import { AirbnbRating } from 'react-native-ratings';
import ImagePicker from 'react-native-image-crop-picker';

//  Total width and height of mobile screen these const are used to give 
// height and width to the components

const widthS = Dimensions.get('window').width
const heightS = Dimensions.get('window').height

//required color for designs

const txtColor = '#390450'
const bgColor = '#BDA0D9'


class SuggestProduct extends React.Component {

    //  state for check boxes 

    state = {

        isCheckedPhysical:false,
        isCheckedDeveloperment:false,
        isCheckedBehavioural:false,
        isCheckedSensory:false,
    }

    // Method to handle the uploaded image

    handlePhottoUpload()
    {
        ImagePicker.openPicker({
            cropping: true
          }).then(image => {
            alert('Image Uploaded')
          });
    };

    render(){
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
                
                <Text style={styles.heading}>Suggest A Product</Text>
     
                <View style={{flex:1}}>
     
                    <ScrollView showsVerticalScrollIndicator={false}>
        
                        <View style={[styles.row,{marginBottom:heightS*0.03,}]}>
                            <Text style={styles.txt}>Product Name</Text>
                            <TextInput style={styles.input}></TextInput>
                        </View>
                        <View style={[styles.row,{marginBottom:heightS*0.03,}]}>
                            <Text style={styles.txt}>Category</Text>
                            <TextInput style={styles.input}></TextInput>
                        </View>
                    
                        <View style={styles.row}>
                            <View style={{width:widthS*0.45,height:heightS*0.15}}>
                                <Text style={[styles.txt,{width:'100%',height:'100%'}]}>Special Needs Category</Text>
                            </View>
                            <View style={{width:widthS*0.45,height:heightS*0.15}}>
                                <View style={styles.row}>
                                    <CheckBox  
                                        onClick={()=>{
                                        this.setState({
                                            isCheckedPhysical:!this.state.isCheckedPhysical
                                        })
                                        }}
                                        isChecked={this.state.isCheckedPhysical}
                                    />
                                    <Text style={styles.txtCheckbox}>
                                        Physical Muscular
                                    </Text>
                                </View>
                                <View style={styles.row}>
                                    <CheckBox  
                                        onClick={()=>{
                                        this.setState({
                                            isCheckedDeveloperment:!this.state.isCheckedDeveloperment
                                        })
                                        }}
                                        isChecked={this.state.isCheckedDeveloperment}
                                    />
                                    <Text style={styles.txtCheckbox}>
                                        Developerment Down
                                    </Text>
                                </View>
                                <View style={styles.row}>
                                    <CheckBox  
                                        onClick={()=>{
                                        this.setState({
                                            isCheckedBehavioural:!this.state.isCheckedBehavioural
                                        })
                                        }}
                                        isChecked={this.state.isCheckedBehavioural}
                                    />
                                    <Text style={styles.txtCheckbox}>
                                        Behavioural/Emotional
                                    </Text>
                                </View>
                                <View style={styles.row}>
                                    <CheckBox  
                                        onClick={()=>{
                                        this.setState({
                                            isCheckedSensory:!this.state.isCheckedSensory
                                            })
                                        }}
                                        isChecked={this.state.isCheckedSensory}
                                    />
                                    <Text style={styles.txtCheckbox}>
                                        Sensory Impaired Blind
                                    </Text>
                                </View>
                            </View>
                        </View>
                    
                        <View style={[styles.row,{marginBottom:heightS*0.03,}]}>
                            <Text style={styles.txt}>Link to Buy</Text>
                            <TextInput style={styles.input}></TextInput>
                        </View>
                        <View style={[styles.row,{marginBottom:heightS*0.03,}]}>
                            <Text style={styles.txt}>Description</Text>
                            <TextInput style={styles.input}></TextInput>
                        </View>
                        <View style={[styles.row,{marginBottom:heightS*0.03,}]}>
                            <Text style={styles.txt}>Rating</Text>
                            <View style={styles.input}>
                                <AirbnbRating 
                                    showRating={false}
                                    size={widthS*0.07}
                                />
                            </View>
                        </View>
                        <View style={[styles.row,{marginBottom:heightS*0.03,}]}>
                        <Text style={styles.txt}>Upload Photo</Text>
                        <TouchableOpacity 
                            style={styles.input}
                            onPress={()=>this.handlePhottoUpload()}
                        >
                            <Text style={[styles.txt,{textAlign:'center',}]}>Upload Photo</Text>
                        </TouchableOpacity>
                    </View>
    
                    </ScrollView>
                
                </View>
    
                <View style={{alignSelf:'center',marginBottom:heightS*0.04}}>
                    <TouchableOpacity 
                        style={styles.submit}
                        onPress={()=>this.props.navigation.navigate('SelectProductCategory')}
                    >
                        <Text style={styles.txtBtn}>Submit</Text>
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
  row:{
        flexDirection:'row',
  },
  txt:{
        color:'gray',
        width:widthS*0.45,
        height:40,
        textAlign:'left',
        fontSize:18,
        fontWeight:'bold',
  },
  input:{
        width:widthS*0.45,
        height:40,
        textAlign:'center',
        backgroundColor:'#D9FFE5',
        fontWeight:'bold',
        fontSize:18,
  },
  txtCheckbox:{
      color:txtColor,
      fontWeight:'bold',
    },
  submit:{
      backgroundColor:bgColor,
      height:heightS*0.07,
      width:widthS*0.9,   
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

export default SuggestProduct;