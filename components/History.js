import React from "react";

import { View, FlatList, Text, StyleSheet } from "react-native";

const History = ({route}) => {

    const {history} = route.params;

return <View style = {styles.container}><Text>History:</Text>
      <FlatList
        data={history}
        renderItem={({ item }) => {
          return <Text>{item.text}</Text>;
        }}
      />
    </View>
}

export default History

const styles = StyleSheet.create({
    container: {
      padding: 25,
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    input: {
      textAlign: "center",
      height: 40,
      width: 180,
      borderColor: "black",
      borderWidth: 1,
      marginBottom: 10,
    },
    buttonContainer: {
      width: 90,
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "space-between",
      marginBottom: 15,
    },
  });