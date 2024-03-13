import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';

const CalculApp = () => {
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
          <CustomButton onPress={() => handlePress('AC')} text="AC" style={styles.button1}/>
          <CustomButton onPress={() => handlePress('^')} text=" ^ " style={styles.button1}/>
          <CustomButton onPress={() => handlePress('%')} text=" % " style={styles.button1}/>
          <CustomButton onPress={() => handlePress('/')} text=" / " style={styles.button1}/>
        </View>
        <View style={styles.row}>
          <CustomButton onPress={() => handlePress('7')} text=" 7 " />
          <CustomButton onPress={() => handlePress('8')} text=" 8 " />
          <CustomButton onPress={() => handlePress('9')} text=" 9 " />
          <CustomButton onPress={() => handlePress('x')} text=" x " style={styles.button1}/>
        </View>
        <View style={styles.row}>
          <CustomButton onPress={() => handlePress('4')} text=" 4 " />
          <CustomButton onPress={() => handlePress('5')} text=" 5 " />
          <CustomButton onPress={() => handlePress('6')} text=" 6 " />
          <CustomButton onPress={() => handlePress('-')} text=" - " style={styles.button1}/>
        </View>
        <View style={styles.row}>
          <CustomButton onPress={() => handlePress('1')} text=" 1 " />
          <CustomButton onPress={() => handlePress('2')} text=" 2 " />
          <CustomButton onPress={() => handlePress('3')} text=" 3 " />
          <CustomButton onPress={() => handlePress('+')} text=" + " style={styles.button1}/>
        </View>
        <View style={styles.row}>
          <CustomButton onPress={() => handlePress('.')} text=" . " />
          <CustomButton onPress={() => handlePress('0')} text=" 0 " />
          <CustomButton onPress={() => handlePress('Del')} text="del" />
          <CustomButton onPress={() => handlePress('=')} text=" = " style={styles.button1}/>
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
  button1: {
    borderRadius: 20,
    backgroundColor: '#8d99ae',
    padding: 20,
    fontWeight:'bold',
  },
});

export default CalculApp;
