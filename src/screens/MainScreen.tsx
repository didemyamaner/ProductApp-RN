import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import style from './style';

const MainScreen = () => {
  const [text, setText] = useState('');
  const [task, setTask] = useState([]);
  const [press, setPress] = useState(false);

  const handlerAddTask = () => {
    if (text === '') {
      Alert.alert('Boş girdin');
    } else {
      setTask([...task, text]);
      setText('');
    }
  };

  return (
    <View style={{flex: 1}}>
      <View style={style.container}>
        <Text style={style.title}>Yapılacaklar Listesi</Text>
      </View>
      <View style={style.bigContainer}>
        <TextInput
          value={text}
          style={style.input}
          placeholder="Görevi girin..."
          onChangeText={setText}
        />

        <TouchableOpacity
          style={style.buttonContainer}
          onPress={handlerAddTask}>
          <Text style={style.buttonText}>Kaydet</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTask([])}>
          <Text>Sil</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={task}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={style.Task}>
            <TouchableOpacity
              onPress={() => {
                setPress(!press);
              }}>
              <View style={style.radioButton} />
            </TouchableOpacity>

            <Text style={style.newTask}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default MainScreen;
