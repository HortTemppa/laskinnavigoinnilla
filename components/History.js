import React from "react";

const History = ({history}) => {
return <View><Text>History:</Text>
      <FlatList
        data={history}
        renderItem={({ item }) => {
          return <Text>{item.text}</Text>;
        }}
      />
    </View>
}

export default History