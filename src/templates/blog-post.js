import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  const { htmlAst } = post;

  console.log(htmlAst);

  // const thisPost = data.allMarkdownRemark.edges.find(({node}) => node.fields.slug === post.fields.slug)

  return (
    <Layout>
      {/* {data.allMarkdownRemark.totalCount > 1 &&
        <nav>
          <ul className={styles.articleNav}>
          {thisPost.previous &&
            <li className={styles.articleNav__item}>
              <span>Previous post</span>
              <Link className={styles.articleNav__link} to={thisPost.previous.fields.slug} style={{marginRight: 'auto'}}>{thisPost.previous.frontmatter.title}</Link>
            </li>
          }
          {thisPost.next &&
            <li className={styles.articleNav__item}>
              <span>Next post</span>
              <Link className={styles.articleNav__link} to={thisPost.next.fields.slug} style={{marginLeft: 'auto'}}>{thisPost.next.frontmatter.title}</Link>
            </li>
          }
          </ul>
        </nav>
      } */}
      <h2>{post.frontmatter.title}</h2>
    </Layout>
  );
}
