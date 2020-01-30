import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button, Image } from 'react-native'
import firebase from 'firebase'
import Config from './Config'

export default class SignIn extends React.Component {
    constructor(){
        super();
        
        this.state = {
            email: 'hussmarsidi@gmail.com',
            password: '123456'
        }
    }
    
    
    _SignIn = (email, password) => {
        try {
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
            firebase.auth().onAuthStateChanged(user => {
                this.props.navigation.navigate(user ? 'Main' : 'SignIn')
            })
        } catch (error) {
            console.log(error.toString(error));
        }
    };

    render() {
        
        return (
            <View style={styles.container}>
                <Image source={require('../assets/icon.png')} style={{width:200,height:200}}/>

                <Text style={{fontSize:30}}>Sign In</Text>
                <TextInput
                    style={styles.inputBox}
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    placeholder='Email'
                    autoCapitalize='none'
                />
                <TextInput
                    style={styles.inputBox}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    placeholder='Password'
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button} onPress={()=>this._SignIn()}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <Button title="Don't have an account yet? Sign up" onPress = {()=>this.props.navigation.navigate('SignUp')}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox: {
        width: '85%',
        margin: 10,
        padding: 15,
        fontSize: 16,
        borderColor: '#d3d3d3',
        borderBottomWidth: 1,
        textAlign: 'center'
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#F6820D',
        borderColor: '#F6820D',
        borderWidth: 1,
        borderRadius: 5,
        width: 200
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    buttonSignup: {
        fontSize: 12
    }
})