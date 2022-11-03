import React from 'react';
import { urlFor } from '../lib/client';
import Link from 'next/link';
import Image from 'next/image';

const Post = ({article: {name, authorImage, excerpt, mainImage, title, publishedAt, slug}}) => {
   

  return (
    <>
        <Link href={`/blog/${slug.current}`} className="blog-link">
            <div className="blog-card">
               <div className="blog-card-wrap">
                <img src={urlFor(mainImage)} alt="blog-preview-img" className='blog-exrpt-img' />
               </div>
                <div className="blog-card-content">
                    <h3>{title}</h3>
                    <p>{excerpt}</p>
                </div>
                <div className="author" id='mt'>
                    <img src={urlFor(authorImage)} alt="user-img" className='author-img user-img' />
                    <span className='author-info post-list'>
                        <h4>{name}</h4>
                        <h4>{new Date(publishedAt).toDateString()}</h4>
                    </span>
                </div>
            </div>
        </Link>
    </>
    
  )
}

export default Post