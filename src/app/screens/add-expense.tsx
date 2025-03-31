import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Text } from '~/components/ui/text';

const ExpenseFormScreen = ({ route, navigation }) => {
  const { expense, setExpenses } = route;
  const [title, setTitle] = useState(expense?.title || "");
  const [amount, setAmount] = useState(expense?.amount || "");

  const handleSave = () => {
    // setExpenses((prev) => {
    //   if (expense) {
    //     return prev.map((exp) =>
    //       exp.id === expense.id ? { ...expense, title, amount } : exp
    //     );
    //   }
    //   return [...prev, { id: Date.now().toString(), title, amount }];
    // });
    // navigation.goBack();
  };

  return (
    <View style={{ padding: 16 }}>
      <Input placeholder="Title" value={title} onChangeText={setTitle} />
      <Input
        placeholder="Amount"
        value={amount}
        keyboardType="numeric"
        onChangeText={setAmount}
      />
      <Button onPress={handleSave}>
        <Text>Save Expense</Text>
      </Button>
    </View>
  );
};

export default ExpenseFormScreen ;
