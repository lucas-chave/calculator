import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

function App(): JSX.Element {
  const [displayValue, setDisplayValue] = useState('0');

  const addDigit = (n: any) => {
    setDisplayValue(n);
  };

  const clearMemory = () => {
    setDisplayValue('0');
  };

  const setOperarion = () => {};
  return (
    <View style={styles.container}>
      <Display value={displayValue} />
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
        <Button label={'.'} onClick={setOperarion} />
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
