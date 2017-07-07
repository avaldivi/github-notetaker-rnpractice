import { StackNavigator } from "react-navigation";

import SignIn from "../Screens/Main";
import SignUp from "../Screens/SignUp";

export const SignedOut = StackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: "Sign Up"
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Sign In"
    }
  }
});