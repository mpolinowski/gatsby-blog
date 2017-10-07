import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <br/><br/>

    <Link to="/page-2/">Go to page 2</Link>
    <br/><br/><br/><br/>

    <h2>Index</h2>
    {data.allMarkdownRemark.edges.map(post => (
      <div className="table">
        <h5><br/>{post.node.frontmatter.date}</h5>
        <Link
          key={post.node.id}
          to={post.node.frontmatter.path}>
          {post.node.frontmatter.title}<br/>
        </Link>
      </div>
    ))}
  </div>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 10, sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
          }
        }
      }
    }
  }
`

export default IndexPage
