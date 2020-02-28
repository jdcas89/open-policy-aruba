import React from 'react';
import SEO from '../components/seo';
import PageShell from '../components/organisms/PageShell';
import Representatives from '../components/templates/Representatives';

class HomePage extends React.Component {
  render() {
    return (
      <PageShell>
        <SEO title="Representatives" />
        <Representatives />
      </PageShell>
    );
  }
}

export default HomePage;
