import React from 'react';
import SEO from '../components/seo';
import PageShell from '../components/organisms/PageShell';
import NewMotion from '../components/templates/NewMotion';

class NewMotionPage extends React.Component {
  render() {
    return (
      <PageShell>
        <SEO title="New Motion" />
        <NewMotion />
      </PageShell>
    );
  }
}

export default NewMotionPage;
