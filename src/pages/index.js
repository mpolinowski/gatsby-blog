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
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
      {data.allMarkdownRemark.edges.map(post => (
        <tr key={post.node.id}>
          <td>
            {post.node.frontmatter.date}
          </td>
          <td>
            <Link
              to={post.node.frontmatter.path}>
              {post.node.frontmatter.title}
            </Link>
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  </div>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      sort: {fields: [frontmatter___date], order: DESC}
      filter: { frontmatter: { published: {eq: true} }}
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            published
          }
        }
      }
    }
  }
`

export default IndexPage
