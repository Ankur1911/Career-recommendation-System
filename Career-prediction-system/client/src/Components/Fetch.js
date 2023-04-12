import React from 'react';
import axios from 'axios';

const getBlogPost = () => {
    axios.get('/')
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }

  export default getBlogPost;