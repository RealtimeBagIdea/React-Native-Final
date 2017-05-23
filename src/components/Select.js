import React, { Component } from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet, TextInput, Alert } from 'react-native';
import { Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    GoFacebook() { Actions.facebookfeed(); }
    GoBagIdea() { Actions.contentfeed(); }
    GoUnity() { Actions.unityfeed(); }

    render() {
        return (
            <Image source={require('../Images/background2.jpg')}
                style={[styles.loginBG, {
                    backgroundColor: 'transparent'
                }]}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0,0,0,0.6)',
                }}>

                <Text style={{
                    justifyContent: 'center',
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginBottom: 5
                }}>Select Channel</Text>

                    <View style={{
                        backgroundColor: 'rgb(59,89,152)',
                        padding: 10,
                    }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Image source={require('../Images/Facebook.png')} style={{
                                width:64,
                                height:64
                            }}/>
                            <TouchableOpacity block default 
                                onPress={this.GoFacebook.bind(this)}
                                style={{
                                    marginLeft: 50,
                                    width: "70%",
                                    justifyContent: 'center'
                                }}
                            >
                                <Text style={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                }}>Facebook Channel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{
                        backgroundColor: 'rgb(119,137,175)',
                        padding: 10,
                    }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Image source={require('../Images/BagIdea.png')} style={{
                                width:64,
                                height:64
                            }}/>
                            <TouchableOpacity block primary 
                                onPress={this.GoBagIdea.bind(this)}
                                style={{
                                    marginLeft: 50,
                                    width: "70%",
                                    justifyContent: 'center'
                                }}
                            >
                                <Text style={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                }}>Bag Idea Studio Channel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{
                        backgroundColor: 'rgb(59,59,59)',
                        padding: 10,
                    }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Image source={require('../Images/Unity.png')} style={{
                                width:64,
                                height:64
                            }}/>
                            <TouchableOpacity block default 
                                onPress={this.GoUnity.bind(this)}
                                style={{
                                    marginLeft: 50,
                                    width: "70%",
                                    justifyContent: 'center'
                                }}
                            >
                                <Text style={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                }}>Unity Channel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </Image>
        );
    }
}
const styles = StyleSheet.create({
    loginBG: {
        flex: 1,
        width: null,
        justifyContent: 'center',
        height: null
    },
    strongLabel: {
        fontWeight: 'bold',
        color: '#ffffff',
        fontSize: 16
    },
    loginInput: {
        height: 40,
        padding: 10,
        backgroundColor: 'transparent',
        borderRadius: 5,
        color: '#ffffff'
    }
});
export default Login;
