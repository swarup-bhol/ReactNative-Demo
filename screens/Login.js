import React,{Component} from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View, SafeAreaView, Image,
    TouchableOpacity, Dimensions,
    ImageBackground,
    ScrollView} from 'react-native';
    
import {NavigationContainer} from '@react-navigation/native';

//const bgImage = require('../images/backgroundImage.jpg');

// const Login = ({ navigation })=>{


class Login extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      txtusername: '',
      txtpassword: ''
    }
  }
  finalsubmit()
  {
    const {txtusername,txtpassword} = this.state;
    this.props.navigation.navigate('ViewPageScreen', {name : this.state.txtusername,
    pswd : this.state.txtpassword});

     //Alert.alert("My Title" + " My Rapo")
//     // Alert.alert(`${txtusername}`+ `${txtpassword}`);
     
//     // Alert.prompt("My Title" + " My repo " , text => ("text"))
   }

   registerPage()
    {
        this.props.navigation.navigate('RegistraionPage')
    }


  render()
  {
    const{email,password} = this.props.route.params
    return(
        <ScrollView>
      <SafeAreaView style = {styles.container}>
      <View >
          <ImageBackground source = {require('../images/backgroundImage.jpg')}
          style = {styles.imageView}>

      <View style= {styles.logo}>
       <Image source = {require('../images/logo.png')}
           style={{ width: 80, height: 80 }}
         />
      </View>
      <Text style = {styles.headline}> Edevlop Panel</Text>
    </ImageBackground>
      </View>
      

      <View style = {styles.bottomView}>
          
      <View style = {styles.font}>
        <Text style = {{fontSize : 30, fontWeight : 'bold'}}>Welcome</Text>
        </View>

        <View style = {{ marginBottom : 20, marginStart : 30}}>
        <Text style = {{ fontSize : 16}}>Don't have an Account ?
          <Text style = {{fontWeight : 'bold'}}
          onPress = {this.registerPage.bind(this)}> Register</Text>
        </Text>
        </View>

        <View>

      <Text style = {{marginStart : 22, fontSize : 15 , padding : 4}}>Email</Text>
      
        <TextInput style = {styles.layout}
                underlineColorAndroid = "gray"
                placeholder = "Enter Mail"
                placeholderTextColor = "#aaa"
                autoCapitalize = "none"
                value={this.state.txtusername}
                onChangeText={(txtusername) => this.setState({txtusername})}
                >
                </TextInput>

                <Text style = {{marginStart : 22, fontSize : 15, marginTop : 8}}>Password</Text>

                <TextInput secureTextEntry={true} style = {styles.layout}
                underlineColorAndroid = "gray"
                placeholder = "Enter Password"
                placeholderTextColor = "#aaa"
                autoCapitalize = "none"
                value={this.state.txtpassword}
                onChangeText={(txtpassword) => this.setState({txtpassword})}>
                </TextInput>

        </View>

        <View style = {{alignItems : 'center', justifyContent : 'center', marginTop : 30}}>
        <TouchableOpacity style = {styles.btn} 
        onPress = {this.finalsubmit.bind(this)}>
            <Text>
                Submit
            </Text>

        </TouchableOpacity>
        </View> 


      </View>







        
        {/* <Text style = {{padding : 8, alignItems : 'center', textAlign : 'center', marginTop : 100}}>
          Login Form</Text> */}

          {/* <View style = {{alignItems : 'center', justifyContent : 'center'}}>
          <TouchableOpacity>
        <Image
          source = {require('./assets/ic_image.png')}
          style={{ width: 200, height: 200, alignItems : 'center', justifyContent : 'center',
           
           marginTop : 50}}
         />
         </TouchableOpacity>
         </View> */}


        {/* <TextInput style = {styles.layout}
        underlineColorAndroid = "gray"
        placeholder = "Enter Mail "
        value={this.state.txtusername}
        onChangeText={(txtusername) => this.setState({txtusername})}
        />

        <TextInput style = {styles.layout}
        underlineColorAndroid = "gray"
        placeholder = "Enter Password "
        value={this.state.txtpassword}
        onChangeText={(txtpassword) => this.setState({txtpassword})}
        /> */}
        
        {/* <View style = {{alignItems : 'center', justifyContent : 'center'}}>
        <TouchableOpacity>
        <Button style = {styles.btn}
        color = "orange"
        title = 'Submit' onPress={() => navigation.navigate('ViewPage')  }/>
        </TouchableOpacity>
        </View> */}
          
          {/* // () => Alert.alert(
          // 'Its GeeksforGeeks !')}/> */}

        {/* this.finalsubmit.bind(this) */}

      </SafeAreaView>
      </ScrollView>
    );
  };
}
const styles = StyleSheet.create(
{
    imageView:{
        height : Dimensions.get('window').height/1.9
      },
  btn : {
    padding : 8,
    elevation:3,
    flexDirection: 'row',
    backgroundColor : '#00bfff',
    width : 150,
    alignItems : 'center',
    justifyContent : 'center',
    marginBottom :30
    
  },
  layout : {
    padding : 8,
    marginStart : 20,
    marginEnd : 20,marginTop : 6,
    fontSize : 18
  
  },
  logo:{
    
         alignItems: 'center',
         justifyContent : 'center',
         marginTop : 100
        },
 headline :{
            alignItems : 'center',
             justifyContent : 'center',
             marginTop : 10,
             textDecorationLine : 'underline',
             color : '#ffffff',
             fontSize : 18,
             textAlign :'center'
          },
 bottomView: {
            flex : 1.5 ,
            backgroundColor : '#ffffff',
            borderTopStartRadius : 40,
            borderTopEndRadius : 40,
            marginTop : -80
    
          },
 font : {
            padding : 20,
            marginTop : 5,
            fontStyle : 'normal',
            marginStart : 12
          },
 container:{
            flex :1
    
          }
}
)

export default Login
