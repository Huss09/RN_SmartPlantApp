import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text,Image } from 'react-native'
import firebase from 'firebase'

export default class SignUp extends React.Component {
    state = {
        name: '',
        email: '',
        password: ''
    }

     _SignUp = (email, password) => {
        try {
            if (this.state.password.length < 6) {
                alert("Please enter atleast 6 characters")
                return;
            }       
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
            this.props.navigation.navigate('SignIn')
        } catch (error) {
            console.log(error.toString(error));
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/icon.png')} style={{ width: 200, height: 200 }} />

                <Text style={{fontSize:30}}>Sign Up</Text>
                <TextInput
                    style={styles.inputBox}
                    value={this.state.name}
                    onChangeText={name => this.setState({ name })}
                    placeholder='Full Name'
                />
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
                <TouchableOpacity style={styles.button} onPress={()=>this._SignUp()}>
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.button,marginTop:10,backgroundColor:'blue'}} onPress={()=>this.props.navigation.navigate('SignIn')}>
                    <Text style={styles.buttonText}>Back to Sign In</Text>
                </TouchableOpacity>
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
        backgroundColor: '#FFA611',
        borderColor: '#FFA611',
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