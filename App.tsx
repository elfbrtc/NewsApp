import React from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <Text>News App</Text>
        <FlatList data={[1,2,3,4,5]} renderItem={(data)=>console.log(data)}>
        </FlatList>
      </View>
    </SafeAreaView>
  );
}
export default App;