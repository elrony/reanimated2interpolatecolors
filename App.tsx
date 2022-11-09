/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import Animated, {
  interpolateColors,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const bgValue = useSharedValue(0);
  const bgAnim = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColors(bgValue.value, {
        inputRange: [0, 1],
        outputColorRange: ['yellow', 'red'],
      }),
    };
  });

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Animated.View style={[{width: 300, height: 300}, bgAnim]} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
