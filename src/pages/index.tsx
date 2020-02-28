import React from 'react';
import SEO from '../components/seo';
import Homepage from '../components/templates/Homepage';
import PageShell from '../components/organisms/PageShell';

class HomePage extends React.Component {
  render() {
    return (
      <PageShell>
        <SEO title="Home" />
        <Homepage />
      </PageShell>
    );
  }
}

export default HomePage;
