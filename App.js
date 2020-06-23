import * as React from 'react';
import { Platform, Text, View, TextInput} from 'react-native';
import Creation from './Creation'

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function App() {
  return (
    <View>
      <Creation />
    </View>
  );
}