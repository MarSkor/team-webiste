import React from 'react';
import { client, urlFor } from '../../lib/client';
import {PortableText} from '@portabletext/react'


const PostDetails = ({article: {authorImage, body, mainImage, name, publishedAt, title}}) => {
  // console.log("article", article)

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

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "post" && slug.current == '${slug}'][0]{
    title, 
    "name": author->name,
    "authorImage": author->image,
    "categories": categories[]->title,
    body,
    mainImage,
    publishedAt
  }`;
  
  const article = await client.fetch(query);

  return {
    props: { article }
  }
}



export default PostDetails;