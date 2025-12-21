import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './BlogList.module.css';

const API_URL = import.meta.env.VITE_API_URL

const BlogList = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/blog/posts`)
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch posts", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className={classes.blogContainer}>
      <section className={classes.headerSection}>
        <h1>The Lab</h1>
        <p>Technical deep dives, tutorials, and project logs.</p>
      </section>

      {loading ? (
        <div style={{textAlign: 'center', color: '#fff'}}>Loading articles...</div>
      ) : posts.length > 0 ? (
        <div className={classes.grid}>
          {posts.map(post => (
            <article key={post.slug} className={classes.blogCard}>
              <span className={classes.postDate}>{post.date}</span>
              <h2 className={classes.postTitle}>
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className={classes.postSummary}>{post.summary}</p>
              <Link to={`/blog/${post.slug}`} className={classes.readMore}>
                Read Article <i className="fas fa-arrow-right"></i>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className={classes.emptyState}>
          <h3>No Posts Yet</h3>
          <p>Check back soon for new content!</p>
        </div>
      )}
    </div>
  );
};

export default BlogList;