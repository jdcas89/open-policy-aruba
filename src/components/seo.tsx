/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

interface SEOProps {
  description?: string;
  lang?: string;
  meta?: {
    name: string;
    content: string;
  }[];
  canonical?: string;
  title?: string;
}

export const SEO: React.FC<SEOProps> = ({
  description,
  lang = 'es',
  title,
  canonical,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `,
  );
  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={site.siteMetadata.title}
      meta={
        site.siteMetadata &&
        [
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata.author,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
        ].concat(site.siteMetadata)
      }
    >
      {canonical && <link rel="canonical" href={canonical} />}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          url: site.siteUrl,
          name: 'Open Policy Aruba',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+',
            contactType: 'Questions and answers',
          },
        })}
      </script>
    </Helmet>
  );
};
export default SEO;
