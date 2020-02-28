import React from 'react';
import SEO from '../components/seo';
import PageShell from '../components/organisms/PageShell';
import NotFound from '../components/templates/NotFound';

class NotFoundPage extends React.Component {
  render() {
    return (
      <PageShell>
        <SEO title="404: Not Found" />
        <NotFound />
      </PageShell>
    );
  }
}

export default NotFoundPage;
