import * as React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";
import { StatusBar } from "expo-status-bar";

export default class App extends React.Component {
  render() {
    return (<>
    <StatusBar barStyle="dark-content" />
    
      <View style={{ width: '100%', height: '100%', backgroundColor: '#1e1e1e'}}>
      <WebView 
      //source={{ uri: {http://danheikenberg.com/NTCG/} }} 
      source={{ uri: 'https://wintergrim.com/NTCG/' }}
      style={{ flex: 1, marginTop: 20 }}
      //style={{ marginTop: 20 }} 
      />
      </View>
      </>
    );
  }
}
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
