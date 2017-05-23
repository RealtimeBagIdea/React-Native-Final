import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import Login from './components/Login';
import ContentFeed from './components/ContentFeed';
import Select from './components/Select';
import FacebookFeed from './components/FacebookFeed';
import UnityFeed from './components/UnityFeed';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="login" component={Login} title="Login" initial={true} hideNavBar hideTabBar />
                    <Scene key="contentfeed" component={ContentFeed} title="Bag Idea Channel" hideNavBar hideTabBar />
                    <Scene key="facebookfeed" component={FacebookFeed} title="Facebook Channel"  hideNavBar hideTabBar />
                    <Scene key="unityfeed" component={UnityFeed} title="Unity Channel" hideNavBar hideTabBar />
                    <Scene key="select" component={Select} title="Select" hideNavBar hideTabBar />
                </Scene>
            </Router>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
