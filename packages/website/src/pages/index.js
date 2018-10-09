import React from 'react'
import { ItemCard, ItemCardWrapper } from '@lerna-monorepo/shared-ui'

const BlogPage = ({ data }) => {
  const edges = data.allBlogJson.edges

  return (
    <div>
      <h1>Blog Page</h1>
      <ItemCardWrapper>
        {edges && edges.map(edge => <ItemCard key={edge.node.id} data={edge.node} slug="post" />)}
      </ItemCardWrapper>
      <a href={`http://${process.env.PLATFORM_URL}`}>Go to Platform</a>
    </div>
  )
}

export default BlogPage

export const query = graphql`
  query BlogPostsQuery {
    allBlogJson {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`