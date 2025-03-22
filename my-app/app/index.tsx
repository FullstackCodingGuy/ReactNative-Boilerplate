import * as React from 'react';
import { View } from 'react-native';
import ExpenseFormScreen from './screens/add-expense';
import { useNavigation } from '@react-navigation/native';

const GITHUB_AVATAR_URI =
  'https://i.pinimg.com/originals/ef/a2/8d/efa28d18a04e7fa40ed49eeb0ab660db.jpg';

export default function Screen({ route }) {
  const [progress, setProgress] = React.useState(78);
  const navigation = useNavigation();
  
  const expense = {};

  function updateProgressValue() {
    setProgress(Math.floor(Math.random() * 100));
  }
  return (
    <View className='flex-1 justify-center items-center gap-5 p-6 bg-secondary/30'>
      <ExpenseFormScreen route={expense} navigation={navigation}></ExpenseFormScreen>
    </View>
  );
}
