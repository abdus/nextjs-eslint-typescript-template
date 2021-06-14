import React from 'react';
import { Layout } from '../components/Layout';
import { ThemeSwitcher } from '../components/ThemeSwitcher';

// eslint-disable-next-line
export default function Home() {
  return (
    <>
      <ThemeSwitcher />
      <Layout>
        Open
        {' '}
        <code>components/Layout/index.tsx</code>
        , and remove default left
        and right column values.
      </Layout>
    </>
  );
}