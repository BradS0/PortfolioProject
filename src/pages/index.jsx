import React from 'react';
import PageLayout from '../components/common/layouts/page';
// eslint-disable-next-line import/no-named-as-default
import HomeView from '../components/views/home-view/home-view';

function Home() {
  return (
    <PageLayout>
      <HomeView />
    </PageLayout>
  );
}

export default Home;
