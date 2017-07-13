import React, { Component } from 'react';

import { StackNavigator, TabNavigator, DrawerNavigator } from "react-navigation";

import { FontAwesome } from "react-native-vector-icons";

import SignIn from "../Screens/Main";
import SignUp from "../Screens/SignUp";
import Home from "../Screens/Search";
import Account from "../Screens/Account";
import Dashboard from "../Screens/Dashboard";
import Profile from "../Screens/Profile";
import Repositories from "../Screens/Repositories";
import Notes from "../Screens/Notes";

export const SignedOut = StackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: "Sign In"
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Sign Up"
    }
  }
});

export const SignedIn = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: "Home",
      //  tabBarIcon: ({ tintColor }) => (
      //   <FontAwesome name="home" size={30} color={tintColor} />
      // )
    }
  },
  Account: {
    screen: Account,
    navigationOptions: {
      tabBarLabel: "Account",
      // tabBarIcon: ({ tintColor }) => (
      //  <FontAwesome name="user" size={30} color={tintColor} />
      // )
    }
  },
});

export const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      SignedIn: {
        screen: SignedIn,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      SignedOut: {
        screen: SignedOut,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      GithubProfile: {
        screen: GithubProfile,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};

export const GithubProfile = DrawerNavigator ({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      title: "Dashboard"
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: "Profile"
    }
  },
  Repos: {
    screen: Repositories,
    navigationOptions: {
      title: "Repositories"
    }
  },
  Notes: {
    screen: Notes,
    navigationOptions: {
      title: "Notes"
    }
  }
});
