import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    switch (value) {
      case '=':
        try {
          const calculatedResult = eval(display);
          setResult(calculatedResult.toString());
        } catch (error) {
          setResult('Error');
        }
        break;
      case 'AC':
        setDisplay('');
        setResult('');
        break;
      case 'Del':
        setDisplay(display.slice(0, -1));
        break;
      case '%':
        const percentage = parseFloat(display) / 100;
        setDisplay(percentage.toString());
        break;
      case '^':
        setDisplay(Math.pow(display,2));
        break;
      case 'x':
        setDisplay(display + '*');
        break;
      default:
        setDisplay(display + value);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.result}>{result}</Text>
        <Text style={styles.display}>{display}</Text>
      </View>
      <View style={styles.keyboardContainer}>
        <View style={styles.row}>
          <Pressable onPress={() => handlePress('/')} style={styles.button1}><Text style={styles.buttonText}> / </Text></Pressable>
          <Pressable onPress={() => handlePress('AC')} style={styles.button1}><Text style={styles.buttonText}>AC</Text></Pressable>
          <Pressable onPress={() => handlePress('^')} style={styles.button1}><Text style={styles.buttonText}> ^ </Text></Pressable>
          <Pressable onPress={() => handlePress('%')} style={styles.button1}><Text style={styles.buttonText}> % </Text></Pressable>
        </View>
        <View style={styles.row}>
          <Pressable onPress={() => handlePress('7')} style={styles.button}><Text style={styles.buttonText}> 7 </Text></Pressable>
          <Pressable onPress={() => handlePress('8')} style={styles.button}><Text style={styles.buttonText}> 8 </Text></Pressable>
          <Pressable onPress={() => handlePress('9')} style={styles.button}><Text style={styles.buttonText}> 9 </Text></Pressable>
          <Pressable onPress={() => handlePress('x')} style={styles.button1}><Text style={styles.buttonText}> x </Text></Pressable>
        </View>
        <View style={styles.row}>
          <Pressable onPress={() => handlePress('4')} style={styles.button}><Text style={styles.buttonText}> 4 </Text></Pressable>
          <Pressable onPress={() => handlePress('5')} style={styles.button}><Text style={styles.buttonText}> 5 </Text></Pressable>
          <Pressable onPress={() => handlePress('6')} style={styles.button}><Text style={styles.buttonText}> 6 </Text></Pressable>
          <Pressable onPress={() => handlePress('-')} style={styles.button1}><Text style={styles.buttonText}> - </Text></Pressable>
        </View>
        <View style={styles.row}>
          <Pressable onPress={() => handlePress('1')} style={styles.button}><Text style={styles.buttonText}> 1 </Text></Pressable>
          <Pressable onPress={() => handlePress('2')} style={styles.button}><Text style={styles.buttonText}> 2 </Text></Pressable>
          <Pressable onPress={() => handlePress('3')} style={styles.button}><Text style={styles.buttonText}> 3 </Text></Pressable>
          <Pressable onPress={() => handlePress('+')} style={styles.button1}><Text style={styles.buttonText}> + </Text></Pressable>
        </View>
        <View style={styles.row}>
          <Pressable onPress={() => handlePress('.')} style={styles.button}><Text style={styles.buttonText}> . </Text></Pressable>
          <Pressable onPress={() => handlePress('0')} style={styles.button}><Text style={styles.buttonText}> 0 </Text></Pressable>
          <Pressable onPress={() => handlePress('Del')} style={styles.button}><Text style={styles.buttonText}>del</Text></Pressable>
          <Pressable onPress={() => handlePress('=')} style={styles.button1}><Text style={styles.buttonText}> = </Text></Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b263b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  displayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  result: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#f0f0f0',
  },
  display: {
    color:'#f0f0f0',
    fontSize: 20,
    marginBottom: 10,
  },
  keyboardContainer: {
    flex: 2,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 10,
  },
  button: {
    borderRadius: 40,
    backgroundColor: '#e5e5e5',
    padding: 20,
    fontWeight:'bold',
  },
  button1: {
    borderRadius: 20,
    backgroundColor: '#8d99ae',
    padding: 20,
    fontWeight:'bold',
  },
  buttonText: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Calculator;
