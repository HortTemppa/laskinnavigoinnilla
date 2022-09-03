import React from "react";

const addNumbers = () => {
    setResult(parseInt(firstNumber) + parseInt(secondNumber));
    const historyObject = {
      text: `${firstNumber} + ${secondNumber} = ${
        parseInt(firstNumber) + parseInt(secondNumber)
      }`,
      key: history.length + 1,
    };
    setHistory([...history, historyObject]);
  };

  const subtractNumbers = () => {
    setResult(parseInt(firstNumber) - parseInt(secondNumber));
    const historyObject = {
      text: `${firstNumber} - ${secondNumber} = ${
        parseInt(firstNumber) - parseInt(secondNumber)
      }`,
      key: history.length + 1,
    };
    setHistory([...history, historyObject]);
  };

  const handleFirstChange = (number) => {
    setFirstNumber(number);
  };

  const handleSecondChange = (number) => {
    setSecondNumber(number);
  };

const Calculator = () => {
    return <View>{result != null ? <Text>The result is {result}</Text> : null}
    <TextInput
      style={styles.input}
      keyboardType="numeric"
      onChangeText={handleFirstChange}
      value={firstNumber}
    />
    <TextInput
      style={styles.input}
      keyboardType="numeric"
      onChangeText={handleSecondChange}
      value={secondNumber}
    />
    <View style={styles.buttonContainer}>
      <Button onPress={addNumbers} title="+"></Button>
      <Button onPress={subtractNumbers} title="-"></Button>
    </View>
    </View>
}

export default Calculator;