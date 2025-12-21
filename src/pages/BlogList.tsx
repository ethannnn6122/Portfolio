import React from 'react';
import { Link } from 'react-router-dom';
import classes from './BlogList.module.css';

// Placeholder data (replace with API fetch later)
const posts = [
  { 
    slug: 'setup-vps', 
    title: 'How I set up my Hostwinds VPS', 
    date: 'Dec 20, 2025', 
    summary: 'A deep dive into configuring Nginx, PM2, and Python FastAPI on a budget Linux server.' 
  },
  { 
    slug: 'rag-chatbot', 
    title: 'Building a Portfolio RAG Bot', 
    date: 'Dec 15, 2025', 
    summary: 'How I used LangChain and ChromaDB to let users chat with my resume.' 
  }
];

const BlogList = () => {
  return (
    <div className={classes.blogContainer}>
      <section className={classes.headerSection}>
        <h1>The Lab</h1>
        <p>Technical deep dives, tutorials, and project logs.</p>
      </section>

      {posts.length > 0 ? (
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
          <h3>Coming Soon...</h3>
          <p>I am currently connecting this page to my FastAPI backend. Check back later!</p>
        </div>
      )}
    </div>
  );
};

export default BlogList;