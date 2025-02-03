import React from 'react';
import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

// Reducer
const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogposts' :
      return action.payload;
   


      case 'edit_blogpost':
        return state.map((blogPost) => {
          return blogPost.id === action.payload.id ? action.payload : blogPost;
        })
          



    case 'delete_blogpost':
      return state.filter((blogPost) => blogPost.id !== action.payload);

    default:
      return state;
  }
};

// Action Creators
const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonServer.post('/blogposts', {title,content});
    
    //dispatch({
      //type: 'add_blogpost',
      //payload: { title, content },
   // });

    // Callback'i, state güncellenmesinden sonra çağırmak için setTimeout kullanıyoruz
    setTimeout(() => {
      if (callback) {
        callback(); // Yönlendirmeyi burada yapıyoruz
      }
    }, 0); // UI'daki değişiklikler yansıdıktan sonra yönlendirme yapılır
  };
};
const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    try {
      const response = await jsonServer.put(`/blogposts/${id}`, { title, content });
      dispatch({
        type: 'edit_blogpost',
        payload: { id, title, content },
      });

      // Callback'i, state güncellenmesinden sonra çağırmak için setTimeout kullanıyoruz
      setTimeout(() => {
        if (callback) {
          callback(); // Yönlendirmeyi burada yapıyoruz
        }
      }, 0);
    } catch (error) {
      console.error('Error updating blog post:', error);
    }
  };
};




const getBlogPosts = (dispatch) => {
  return async () => {
  const response = await jsonServer.get('/blogposts')
  dispatch({ type: 'get_blogposts', payload: response.data });
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: 'delete_blogpost', payload: id });
  };
};

// Export Context ve Provider
export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost , editBlogPost, getBlogPosts},
  [] // Başlangıç durumu boş  dizi
);
