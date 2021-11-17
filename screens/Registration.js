import React,{Component, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, TextInput, View, SafeAreaView, Image,
    TouchableOpacity, Dimensions, text, RegisterButton,
    ImageBackground,
    ScrollView,
    ToastAndroid,
    AsyncStorage} from 'react-native';
import colors from '../values/colors';

import * as firebase from "../database/firebaseDb";
// import firebase from '../firebase'
import auth from 'firebase/auth';

import {
    apiKey,
    authDomain,
    databaseURL,
    projectId,
    storageBucket,
    messagingSenderId,
    appId
    } from '../config';
 

const firebaseConfig = {
    apiKey: 'oQSdmajXRljF9mq1KWvGhgMML01ZLRMkLTd112AX',
    authDomain: 'awesomeproject-e3a08.firebaseapp.com',
    databaseURL: 'https://console.firebase.google.com/project/awesomeproject-e3a08/firestore/data/~2F',
    projectId: 'awesomeproject-e3a08',
    storageBucket: 'awesomeproject-e3a08.appspot.com',
    messagingSenderId: '606990125895',
    appId: '1:606990125895:android:660fad5fe0a5368de49a62',
  };

  
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);

    console.log(firebase)
}



class Registration extends Component {
    
    constructor(props)
    {
    super(props);
    this.state = {
     txtusername: '',
     txtemail: '',
     txtPhoneNo: '',
     txtPswd: '',
     txtCpassword: ''
     }
    }



    registerUser ()
    {
        //const data = {email : email , pswd : password}    
        loading: true   

        const{txtusername,txtemail,txtPhoneNo,txtPswd,txtCpassword} = this.state;

        fetch('https://prayup.visital.in/pray/api/captain_register', {
            method: 'POST',
            body: JSON.stringify({
                name: this.state.txtusername,
                ph_no: this.state.txtPhoneNo,
                email: this.state.txtemail,
                password: this.state.txtPswd
            }),
          }).then((response) => response.json())
          .then((responseJson) => {
            //alert(JSON.stringify(responseJson));
            ToastAndroid.show(response.txtemail, ToastAndroid.SHORT);
            // setTimeout(() => {
            //     this.setState({
            //         loading: false,
            //         dataSource: responseJson
            //     })
            // }, 2000)

             this.props.navigation.navigate('LoginScreen', {email :this.state.txtemail ,
             password : this.state.txtPswd})
            
          })
          .catch(error => console.log(error))


        
    }

    render()
    {
        return(
            <View style ={{flex:1}}>
            <ScrollView>
            <SafeAreaView style = {styles.container}>    
                <StatusBar hidden = {true} StatusBar /> 
                {/* <StatusBar backgroundColor="#b3e6ff" barStyle="light-content" />  */}
                    <View style = {{alignItems : 'center', justifyContent : 'center',height:40, backgroundColor : '#00bfff'}}>
                        <Text style = {styles.font}>Registration</Text>
                    </View>

                <View style = {{marginTop : 20}}>
                <Text style = {styles.textView}>Name</Text>

                <TextInput style = {styles.layout}
                   placeholder = "Enter Name"
                   placeholderTextColor = "#aaa"
                   autoCapitalize = "none"
                   value={this.state.txtusername}
                   onChangeText={(txtusername)=> this.setState({txtusername})}/>

                <Text style = {styles.textView}>Email</Text>

                <TextInput style = {styles.layout}
                   placeholder = "Enter Email"
                   placeholderTextColor = "#aaa"
                   autoCapitalize = "none"
                   value={this.state.txtemail}
                   onChangeText={(txtemail)=> this.setState({txtemail})}/>

                <Text style = {styles.textView}>Phone Number</Text>
                <TextInput style = {styles.layout}
                   placeholder = "Enter Phone Number"
                   placeholderTextColor = "#aaa"
                   autoCapitalize = "none"
                   value={this.state.txtPhoneNo}
                   onChangeText={(txtPhoneNo)=> this.setState({txtPhoneNo})}/>

                <Text style = {styles.textView}>Password</Text>
                <TextInput secureTextEntry={true} style = {styles.layout} 
                   placeholder = "Enter Password"
                   placeholderTextColor = "#aaa"
                   autoCapitalize = "none"
                   value={this.state.txtPswd}
                   onChangeText={(txtPswd)=> this.setState({txtPswd})}/>

                 <Text style = {styles.textView}>Confirm Password</Text>
                 <TextInput secureTextEntry={true} style = {styles.layout}
                   placeholder = "Enter Confirm Password"
                   placeholderTextColor = "#aaa"
                   autoCapitalize = "none"
                   value={this.state.txtCpassword}
                   onChangeText={(txtCpassword)=> this.setState({txtCpassword})}/>

                <View style = {{alignItems : 'center', justifyContent : 'center', marginTop : 30}}>
                <TouchableOpacity onPress={this.registerUser.bind(this)} style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>Register</Text>
                {/* <Button  onPress = {this.registerUser.bind(this)} title = 'Register'/> */}
                
                </TouchableOpacity>
            </View>

                </View>
            </SafeAreaView>
        </ScrollView> 
        </View>
  
        );
    };
}

    

    const width = Dimensions.get('window').width - 50;
    const styles = StyleSheet.create(
        {
            container : {
                flex : 1,
            },
            font : {
                alignItems : 'center',
                justifyContent : 'center',
                fontSize : 25,
                fontWeight : 'bold'
            },
            textView :{
                marginStart : 22, 
                fontSize : 15 , 
                padding : 4,
                marginTop : 18, 
                fontFamily : 'sans-serif'
                
            },
            layout : {
                padding : 8,
                marginStart : 20,
                marginEnd : 20,
                fontSize : 15,
                borderWidth :1,
                borderColor : colors.grey,
                width,
                borderRadius : 12,
                backgroundColor : colors.Aliceblue
              
              },

              btn : {
                padding : 8,
                elevation:3,
                flexDirection: 'row',
                backgroundColor : '#00bfff',
                width : 150,
                alignItems : 'center',
                justifyContent : 'center',
                marginBottom :30,
                borderRadius : 12
                
              },appButtonContainer: {
                elevation: 8,
                backgroundColor: "#00bfff",
                borderRadius: 10,
                paddingVertical: 10,
                paddingHorizontal: 12
              },
              appButtonText: {
                fontSize: 18,
                color: "#fff",
                fontWeight: "bold",
                alignSelf: "center",
                textTransform: "uppercase"
              }


    })

    export default Registration