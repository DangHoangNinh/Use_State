import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const BackgroundApp = () => {
  // Màu nền mặc định ban đầu là 'green'
  const [bgColor, setBgColor] = useState('green');

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'green' }]}
        onPress={() => setBgColor('green')}>
        <Text style={styles.buttonText}>GREEN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'blue' }]}
        onPress={() => setBgColor('blue')}>
        <Text style={styles.buttonText}>BLUE</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'brown' }]}
        onPress={() => setBgColor('brown')}>
        <Text style={styles.buttonText}>BROWN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'yellow' }]}
        onPress={() => setBgColor('yellow')}>
        {/* Text màu đen cho nút vàng để dễ nhìn */}
        <Text style={[styles.buttonText, { color: 'black' }]}>YELLOW</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'red' }]}
        onPress={() => setBgColor('red')}>
        <Text style={styles.buttonText}>RED</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: 'black' }]}
        onPress={() => setBgColor('black')}>
        <Text style={styles.buttonText}>BLACK</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BackgroundApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  button: {
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
