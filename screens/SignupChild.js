


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

// checkbox library read documentation if require

import CheckBox from 'react-native-check-box'

//  Total width and height of mobile screen these const are used to give 
// height and width to the components

const widthS = Dimensions.get('window').width
const heightS = Dimensions.get('window').height

//required color for designs

const txtColor = '#390450'
const bgColor = '#BDA0D9'


// First Screen show at Start of the Applicaion


class SignupChild extends React.Component{


    // state for checkboxes

    state = {
        isCheckedPhysical:false,
        isCheckedDeveloperment:false,
        isCheckedBehavioural:false,
        isCheckedSensory:false,
    }
    render()
    {
        return(
            <SafeAreaView style={styles.container}>
        
                <TouchableOpacity 
                    style={styles.Menu}
                    onPress={()=>{this.props.navigation.navigate('MenuScreen')}}>
                    <Image
                        style={{width:widthS*0.1, height: widthS*0.1}}
                        source={require('../images/menuIcon.png')}
                    />
                    <Text style={styles.txtMenu}>Menu</Text>
                </TouchableOpacity>
        
                <Text style={styles.heading}>Sign up</Text>
        
                <View style={{flex:1,}}>        
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={[styles.row,{marginBottom:heightS*0.03,}]}>
                        <Text style={styles.txt}>Child's Name</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>
                    <View style={[styles.row,{marginBottom:heightS*0.03,}]}>
                        <Text style={styles.txt}>Child's Age</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>
                    <View style={[styles.row,{marginBottom:heightS*0.03,}]}>
                        <Text style={styles.txt}>Child's Grade</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>
                    <View style={[styles.row,{marginBottom:heightS*0.03,}]}>
                        <Text style={styles.txt}>Gender</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>
                    <View style={{width:widthS*0.9,marginBottom:heightS*0.01}}>
                        <Text style={[styles.txt,{width:'100%'}]}>Special Needs : Select the checkboxes :</Text>
                    </View>

                    <View style={[styles.row,{width:widthS*0.9,height:50,}]}>
                        <CheckBox  
                            style={styles.checkBox}
                            onClick={()=>{
                            this.setState({
                                isCheckedPhysical:!this.state.isCheckedPhysical
                            })
                            }}
                            isChecked={this.state.isCheckedPhysical}
                        />
                        <Text style={styles.txtCheckbox}>
                            Physical-muscular dystrophy, multiple sclerosis, chronic asthma,epllepsy, etc
                        </Text>
                    </View>
                    <View style={[styles.row,{width:widthS*0.9,height:50,}]}>
                        <CheckBox  
                            style={styles.checkBox}                    
                            onClick={()=>{
                            this.setState({
                                isCheckedDeveloperment:!this.state.isCheckedDeveloperment
                            })
                            }}
                            isChecked={this.state.isCheckedDeveloperment}
                        />
                        <Text style={styles.txtCheckbox}>
                                Developemental-down syndrome, austism dyslexia, processing disorders
                        </Text>
                    </View>
                    <View style={[styles.row,{width:widthS*0.9,height:50,}]}>
                        <CheckBox  
                            style={styles.checkBox}
                            onClick={()=>{
                            this.setState({
                                isCheckedBehavioural:!this.state.isCheckedBehavioural
                            })
                            }}
                            isChecked={this.state.isCheckedBehavioural}
                        />
                        <Text style={styles.txtCheckbox}>
                            Behavioural/Emotional- ADD , bi-polar, Oppositional defiance disorder, etc
                        </Text>
                    </View>
                    <View style={[styles.row,{width:widthS*0.9,height:50,}]}>
                        <CheckBox  
                            style={styles.checkBox}
                            onClick={()=>{
                            this.setState({
                                isCheckedSensory:!this.state.isCheckedSensory
                            })
                            }}
                            isChecked={this.state.isCheckedSensory}
                        />
                        <Text style={styles.txtCheckbox}>
                            Sensory Impaired -Blind, visually impaired, deaf, limmited hearing
                        </Text>
                    </View>
                </ScrollView>
                </View>

                {/* Click to go parent signup page */}

                <View style={{alignSelf:'flex-end',marginRight:5}}>
                    <TouchableOpacity 
                        style={styles.next}
                        onPress={()=>{this.props.navigation.navigate('SignupParent')}}>
                    
                        <Text style={styles.txtBtn}>Next</Text>
                    </TouchableOpacity>  
                </View>
            </SafeAreaView>
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
        width:widthS*0.6,
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
        textAlignVertical:'center',
        fontSize:18,
        color:txtColor,
  },
  txtCheckbox:{
      width:'90%',
      height:'100%',
      color:txtColor,
      fontWeight:'bold',
    },
  checkBox:{
      height:'100%',
      width:'10%',
      justifyContent:'flex-start',
      alignItems:'center',
    },
  next:{
      backgroundColor:bgColor,
      height:40,
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
      fontSize:15,
  }
});

export default SignupChild;