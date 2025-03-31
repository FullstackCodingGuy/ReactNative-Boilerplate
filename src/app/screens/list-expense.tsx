// import React, { useState } from 'react';
// import { View, FlatList } from 'react-native';

// // Reusable Expense Item
// const ExpenseItem = (({ item, onEdit }) => (
//   <Card style={{ margin: 8 }}>
//     <Card.Content>
//       <Title>{item.title}</Title>
//       <Paragraph>${item.amount}</Paragraph>
//     </Card.Content>
//     <Card.Actions>
//       <Button onPress={() => onEdit(item)}>Edit</Button>
//     </Card.Actions>
//   </Card>
// ));

// // Expense List Screen
// const ExpenseListScreen = ({ navigation }) => {
//   const [expenses, setExpenses] = useState([
//     { id: '1', title: 'Groceries', amount: '50' },
//     { id: '2', title: 'Gas', amount: '30' }
//   ]);

//   const handleEdit = (expense) => {
//     navigation.navigate('ExpenseForm', { expense, setExpenses });
//   };

//   return (
//     <View>
//       <FlatList
//         data={expenses}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => <ExpenseItem item={item} onEdit={handleEdit} />}
//       />
//       <Button mode="contained" onPress={() => navigation.navigate('ExpenseForm', { setExpenses })}>
//         Add Expense
//       </Button>
//     </View>
//   );
// };


// export { ExpenseListScreen };
