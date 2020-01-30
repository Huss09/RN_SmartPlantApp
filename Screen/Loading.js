import React, { Component } from 'react'
import { Text, View,ActivityIndicator, StyleSheet } from 'react-native'
import firebase from 'firebase'

export default class Loading extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLogin : false
        }
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'Main' : 'SignIn')
        })
    }

    render() {
        return (
            <View style={{...styles.container}}>
                <Text style={{alignSelf:'center',fontSize:30}}>
                    Loading
                </Text>
                <ActivityIndicator size='large'/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        alignItems :'center',
        justifyContent: 'center',
    }
})