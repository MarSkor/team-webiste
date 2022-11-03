import React from 'react';
import { client, urlFor } from '../../lib/client';
import {PortableText} from '@portabletext/react';
import { Comments } from '../../components';


const PostDetails = ({article : {authorImage, body, mainImage, name, publishedAt, title, _id, slug}}) => {

  return (
    <div className='main-wrapper pd-top'>
      <div className="blog-content-wrap">
        <h1 className='h1-blog'>{title}</h1>
        <div className="author blog-post-author" id='mt'>
            <img src={urlFor(authorImage)} alt="user-img" className='author-img user-img' />
            <span className='author-info'>
              <h4>{name}</h4>
              <h4>{new Date(publishedAt).toDateString()}</h4>
            </span>
        </div>
      </div>

      <div className="img-wrap">
        <img src={urlFor(mainImage)} alt="blog-preview-img" className='img blog-post-img' loading='lazy'/>
      </div>
      <div className="blog-content-wrap">
        <PortableText value={body}/>

        <div className="author-footer-info blog-post-author" id='mt'>
            <img src={urlFor(authorImage)} alt="user-img" className='user-img-md' />
            <span className='author-info-bt'>
              <h4>Written by</h4>
              <h3>{name}</h3>
              <p>{new Date(publishedAt).toDateString()}</p>
            </span>
        </div>
      </div>
      <div className="comment-wrap">
         <Comments article={{_id, title, slug}}/>
      </div>
    </div>
    
  )
}


export const getStaticPaths = async () => {
  const query = `*[_type == "post"] {
    slug {
      current
    }
  }
  `;

  const articles = await client.fetch(query);

  const paths = articles.map((article) => ({
    params: { 
      slug: article.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}



export const getStaticProps = async ({ params: { slug } }) => {


  const query = `*[_type == "post" && slug.current == '${slug}'][0]{
    title, 
    "name": author->name,
    "authorImage": author->image,
    "categories": categories[]->title,
    body,
    mainImage,
    publishedAt,
    _id,
    slug
  }`;

  const article = await client.fetch(query);
  
  

  // console.log(commentData)

  return {
    props: { article }
  }
}



export default PostDetails;