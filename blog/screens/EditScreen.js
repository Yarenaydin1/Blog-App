import { StyleSheet } from 'react-native';
import React, { startTransition, useContext } from 'react';
import { useRoute } from '@react-navigation/native'; // useRoute ekledik
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

export default function EditScreen({navigation}) {
  const { state ,  editBlogPost} = useContext(Context);
  const route = useRoute(); // route'yi tanımladık

  const blogPost = state.find((blogPost) => blogPost.id === route.params.id);

  if (!blogPost) {
    return null; // Eğer blogPost bulunamazsa hata almamak için
  }

  return (
    <BlogPostForm 
    isEditable={true}
    initialValues={{ title: blogPost.title, content: blogPost.content }}
    onSubmit={(title, content) => {
      editBlogPost(blogPost.id,title, content, () => navigation.navigate('Home')); // Veri kaydedildikten sonra Home'a yönlendir
    }} />
  );
}

const styles = StyleSheet.create({});
