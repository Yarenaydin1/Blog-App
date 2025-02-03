import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function BlogPostForm({ onSubmit, isEditable, initialValues = { title: '', content: '' } }) {
  const [title, setTitle] = useState(initialValues.title || '');
  const [content, setContent] = useState(initialValues.content || '');

  return (
    <View style={styles.main}>
      <Text style={styles.label}>Title :</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Content :</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <TouchableOpacity
        style={styles.buttonSave}
        onPress={() => onSubmit(title, content)}
      >
        <View style={styles.buttonView}>
  {isEditable ? (
    <Text style={styles.buttonText}>Update</Text>
  ) : (
    <Text style={styles.buttonText}>Save</Text>
  )}
</View>

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 10,
  },
  label: {
    fontSize: 15,
    marginLeft: 10,
  },
  input: {
    borderWidth: 1,
    margin: 10,
    marginBottom: 15,
    borderRadius: 20,
    padding: 5,
    fontSize: 15,
  },
  buttonSave: {
    padding: 30,
   
  },
  buttonView: {
    backgroundColor: '#4169E1',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
});
