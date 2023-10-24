import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

function App(): JSX.Element {
  const [displayValueState, setDisplayValueState] = useState('0');
  const [clearDisplayState, setClearDisplayState] = useState(false);
  const [operation, setOperationState] = useState(null);
  const [valuesState, setValuesState] = useState([0, 0]);
  const [current, setCurrent] = useState(0);

  const addDigit = (n: any) => {
    if (n === '.' && displayValueState.includes('.')) {
      return;
    }

    const clearDisplay = displayValueState === '0' || clearDisplayState;
    const currentValue = clearDisplay ? '' : displayValueState;
    const displayValue = currentValue + n;
    setDisplayValueState(displayValue);
    setClearDisplayState(false);

    if (n !== '.') {
      const newValue = parseFloat(displayValue);
      const values = [...valuesState];
      values[current] = newValue;
      setValuesState(values)
    }
  };

  const clearMemory = () => {
    setDisplayValueState('0');
  };

  const setOperarion = (operationParam: any) => {
    if (current === 0) {
      setOperationState(operation);
      setCurrent(1);
      setClearDisplayState(true);
    } else {
      const equals = operationParam === '=';
      const values = [...valuesState];
      try {
        values[0] = eval(`${values[0]} ${operation} ${values[1]}`);
      } catch {
        values[0] = valuesState[0] 
      }

      values[1] = 0;
      setDisplayValueState(String(values[0]));
      setOperationState(equals ? null : operation);
      setCurrent(equals ? 0 : 1);
      setClearDisplayState(!equals);
      setValuesState(values);
    }
  };
  return (
    <View style={styles.container}>
      <Display value={displayValueState} />
      <View style={styles.buttons}>
        <Button triple onClick={clearMemory} label={'AC'} />
        <Button operation label={'/'} onClick={setOperarion} />
        <Button label={'7'} onClick={addDigit} />
        <Button label={'8'} onClick={addDigit} />
        <Button label={'9'} onClick={addDigit} />
        <Button label={'*'} operation onClick={setOperarion} />
        <Button label={'4'} onClick={addDigit} />
        <Button label={'5'} onClick={addDigit} />
        <Button label={'6'} onClick={addDigit} />
        <Button label={'-'} operation onClick={setOperarion} />
        <Button label={'1'} onClick={addDigit} />
        <Button label={'2'} onClick={addDigit} />
        <Button label={'3'} onClick={addDigit} />
        <Button label={'+'} operation onClick={setOperarion} />
        <Button label={'0'} double onClick={addDigit} />
        <Button label={'.'} onClick={addDigit} />
        <Button label={'='} operation onClick={setOperarion} />
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
