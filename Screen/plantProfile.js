import React, { Component } from 'react'
import { Text, View,StyleSheet,Image,TouchableOpacity,Alert} from 'react-native'
import { Header,Left,Right,Body,Icon } from 'native-base';


export default class plantProfile extends Component {
    constructor(){
        super();
        this.state = {
            temperatureNow : 32.2,
            moistureNow : 5,
            plantCondition : true
        }
    }

    render() {
        return (
            <View style={{...styles.container}}>
                <View style={{flexDirection:'row',paddingHorizontal:5,backgroundColor:'lightblue',borderRadius:20}}>
                    <Left>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Main')} style={{padding:10}}>
                                <Icon name='arrow-back' />
                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Text style={{fontWeight:'bold'}}>Plant Profile</Text>
                    </Body>
                    <Right>
                        <TouchableOpacity onPress={() => alert('Plant background, optimal conditions, pro tips')}>
                            <Icon name='information-circle-outline' />
                        </TouchableOpacity>
                    </Right>
                </View>
            
                <Text style={{paddingTop:50}}>
                    Plant Condition : {this.state.plantCondition ? <Text style={{ fontWeight: 'bold', color: 'green' }}>Good</Text> : <Text style={{ fontWeight: 'bold', color: 'red' }}>Bad</Text>}
                </Text>

                <View>
                    <Image source={require('../assets/plant1.jpg')}/>
                </View>
                <View> 
                    <Text style={{padding:20,paddingTop:50}}>
                        Temperature : <Text style={{fontWeight:'bold'}}>{this.state.temperatureNow} Degree Celcius</Text>  
                    </Text>
                    <Text style={{ padding: 20 }}>
                        Moisture : <Text style={{ fontWeight: 'bold' }}>{this.state.moistureNow} %</Text>
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    head : {
        marginTop: 25,
        padding: 5
    }
})