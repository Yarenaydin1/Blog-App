import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/BlogContext'

export default function ShowScreen({route}) {
   const {state} =  useContext(Context)

   const blogPost= state.find((blogPost) => blogPost.id === route.params.id);
  return (
    <View style={styles.main}>
    <View style={styles.conTitle}>
      <Text style={styles.tit}>Title</Text>  
      <Text style={styles.content}>{blogPost.title}</Text>
    </View>
  
    <View style={styles.conContent}>
      <Text style={styles.tit}>Content</Text>  
      <Text style={styles.content}>{blogPost.content}</Text>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    marginTop: 30,
  },
  conTitle: { 
    borderWidth: 2,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    width: '90%',
    borderRadius: 20,
    backgroundColor: '#CCCCFF',
    padding: 10,
    minHeight: 50, 
  },
  conContent: { 
    borderWidth: 2,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    width: '90%',
    borderRadius: 20,
    backgroundColor: '#FDF5E6',
    padding: 10,
    minHeight: 200, 
  },
  tit: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 20,
  },
});
