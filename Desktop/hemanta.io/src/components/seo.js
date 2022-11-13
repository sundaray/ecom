import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ title, lang, description, metaDescription }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      meta={[{ name: `description`, content: metaDescription }]}
      title={title || site.siteMetadata.title}
      description={description}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  description: ``,
  metaDescription: ``,
}

export default Seo
