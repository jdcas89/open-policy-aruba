import React from 'react';
import SEO from '../components/seo';
import PageShell from '../components/organisms/PageShell';
import Changelog from '../components/templates/Changelog';

class ChangelogPage extends React.Component {
  render() {
    return (
      <PageShell>
        <SEO title="Changelog" />
        <Changelog />
      </PageShell>
    );
  }
}

export default ChangelogPage;
