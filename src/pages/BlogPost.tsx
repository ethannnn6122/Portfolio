import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import classes from './BlogPost.module.css';

const API_URL = import.meta.env.VITE_API_URL;

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    fetch(`${API_URL}/api/blog/posts/${slug}`)
      .then(res => res.json())
      .then(data => setPost(data))
      .catch(err => console.error(err));
  }, [slug]);

  if (!post) return <div style={{paddingTop: '120px', textAlign: 'center', color: '#fff'}}>Loading...</div>;

  return (
    <div className={classes.postContainer}>
      <Link to="/blog" className={classes.backLink}>← Back to Lab</Link>
      
      <header className={classes.postHeader}>
        <h1>{post.metadata.title}</h1>
        <div className={classes.meta}>
          <span>{post.metadata.date}</span>
          {post.metadata.tags && post.metadata.tags.map((tag: string) => (
            <span key={tag} className={classes.tag}>#{tag}</span>
          ))}
        </div>
      </header>
      <div 
        className={classes.content} 
        dangerouslySetInnerHTML={{ __html: post.html }} 
      />
    </div>
  );
};

export default BlogPost;