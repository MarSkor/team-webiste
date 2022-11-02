import React, { useState, useEffect } from 'react';
import { client } from '../../lib/client';
import { Post } from '../../components';


const Blog = ({ articles }) => {
  // console.log(articles)

  
  return (
    <div className='main-wrapper pd-top'>
      <h1 className='h1-blog'>Blog</h1>
      <p>Our latest web design tips, tricks, insights, and resources, hot off the presses. </p>
      <div className="blog-wrap mt">
        {articles?.map((article) => <Post key={article._id} article={article}/>)}
      </div>
    </div>
  )
}




export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    title,
    slug,
    _id,
    "name": author->name,
    "authorImage": author->image,
    "categories": categories[]->title,
    excerpt,
    mainImage,
    publishedAt
  }`;



  const articles = await client.fetch(query);
  
  return{
    props: { articles }
  }
}

export default Blog