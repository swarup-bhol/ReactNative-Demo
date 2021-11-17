import React ,{Component}from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View, SafeAreaView, Image,
         TouchableOpacity } from 'react-native';


class ViewPage extends Component{
    constructor (props)
    {
        super(props);
    }
    
    render()
    {
        const{name,pswd} = this.props.route.params
    return(
        <View style = {{flex : 1, alignItems : 'center', justifyContent : 'center'}}>
            <Text> {name}</Text>
            <Text> {pswd}</Text>

            
        </View>
    )
}
}

export default ViewPage