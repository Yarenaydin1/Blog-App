import { StyleSheet, Text, View, FlatList,Button, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect } from 'react';
import {Context} from '../context/BlogContext';
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function HomeScreen({navigation}) {
  const {state, addBlogPost, deleteBlogPost,getBlogPosts} = useContext(Context);
useEffect(() => {
  getBlogPosts();

 const listener = navigation.addListener('focus', () => {
    getBlogPosts();
    return()=>{
      listener.remove();
    }
  })

}, []);

  return (
    <View>
      {/* <Text>HomeScreen </Text> */}
      
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={()=> navigation.navigate('Show',{id:item.id})}>
          <View style={styles.row}>
            
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity onPress={()=> deleteBlogPost(item.id)}>
              <EvilIcons name="trash" size={26} color="black" />
            </TouchableOpacity>
            
            </View>
            
            </TouchableOpacity>
            )
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row:{
    flexDirection:'row',
    justifyContent:'space-between',
    borderTopWidth:1,
    paddingHorizontal:20,
    paddingVertical:20,

  },
  title:{
fontSize:16,
  },
});
