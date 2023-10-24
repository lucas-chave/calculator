import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

function App(): JSX.Element {
  const [displayValue, setDisplayValue] = useState('0');

  const addDigit = n => {
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
        <Button label={'/'} />
        <Button label={'7'} />
        <Button label={'8'} />
        <Button label={'9'} />
        <Button label={'*'} />
        <Button label={'4'} />
        <Button label={'5'} />
        <Button label={'6'} />
        <Button label={'-'} />
        <Button label={'1'} />
        <Button label={'2'} />
        <Button label={'3'} />
        <Button label={'+'} />
        <Button label={'0'} />
        <Button label={'.'} />
        <Button label={'='} />
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
