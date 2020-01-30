import React,{Component} from 'react'
import { StyleSheet, Platform, Image, Text, View,Button,ScrollView,TouchableOpacity,Dimensions} from 'react-native'
import Firebase from 'firebase'
import { Icon } from 'native-base';

const ScreenWidth = Dimensions.get('window').width
const ScreenHeight = Dimensions.get('window').height

export default class Main extends Component {
    constructor(props){
        super(props);
        state = { currentUser: null }
    }

    handleSignout = () => {
        Firebase.auth().signOut()
        this.props.navigation.navigate('SignIn')
        console.log('SignOut')
    }
    
    render() {
        
        return (
            <View style={{...styles.container}}>
                <View style={{padding:5,height:100,flexDirection:'column',justifyContent:'flex-end'}}>
                    <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                        <Icon name='log-out' onPress={() => this.handleSignout()} />
                        <Text style={{paddingHorizontal:5}}>
                            Logout
                        </Text>
                    </TouchableOpacity>
                    <Text style={{alignSelf: 'baseline', fontWeight: 'bold', fontSize: 30 }}>
                        Happy Plant
                    </Text>
                </View>
                <ScrollView>
                    {/* Component */}
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Profile') }} style={{ height: 200, backgroundColor: 'green', padding: 5, flexDirection: 'row', flex: 2, }}>
                        <View style={{ backgroundColor: 'lightblue', flex: 1 }}>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={{ paddingHorizontal: 10, fontSize: 12 }}>Cactaceae</Text>
                                <Text style={{ paddingHorizontal: 10, fontSize: 25 }}>Kaktus Berduri</Text>
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'lightyellow', flex: 1, justifyContent: 'center' }}>
                            <Image style={{ resizeMode: 'contain', height: 300, width: 170 }} source={require('../assets/plant3.png')} />
                        </View>
                    </TouchableOpacity>


                    {/* Component */}
                    <TouchableOpacity onPress = {()=>{this.props.navigation.navigate('Profile')}} style={{height:200,backgroundColor:'green',padding:5,flexDirection:'row',flex: 2,}}>
                        <View style={{backgroundColor:'lightblue',flex: 1}}>
                            <View style={{flex:1,justifyContent:'center'}}>
                                <Text style={{ paddingHorizontal: 10, fontSize: 12 }}>Specific name</Text>
                                <Text style={{ paddingHorizontal: 10, fontSize: 25 }}>Personalised Name</Text>
                            </View>
                        </View>
                        <View style={{backgroundColor:'lightyellow',flex: 1,justifyContent:'center'}}>
                            <Image style={{ resizeMode:'contain',height:300,width:170}} source={require('../assets/plant1.jpg')}/>
                        </View>
                    </TouchableOpacity>
                    
                    {/* Component */}
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Profile') }} style={{ height: 200, backgroundColor: 'green', padding: 5, flexDirection: 'row', flex: 2, }}>
                        <View style={{ backgroundColor: 'lightblue', flex: 1 }}>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={{ paddingHorizontal: 10, fontSize: 12 }}>Specific name</Text>
                                <Text style={{ paddingHorizontal: 10, fontSize: 25 }}>Personalised Name</Text>
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'lightyellow', flex: 1, justifyContent: 'center' }}>
                            <Image style={{ resizeMode: 'contain', height: 300, width: 170 }} source={require('../assets/plant2.jpg')} />
                        </View>
                    </TouchableOpacity>

                   
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop:25,
        padding:5
    }
})