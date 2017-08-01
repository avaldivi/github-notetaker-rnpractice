import { Button } 'react-native';
import { withNavigation } from 'react-navigation';

export Main = ({ to, navigation }) => (
          <Button title={`navigate to ${Signup}`} onPress={() => navigation.navigate(SignUp)} />
        );
