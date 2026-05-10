import React from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Vault } from './pages/Vault';
import { Forge } from './pages/Forge';
import { Arena } from './pages/Arena';

export default function App() {
  const [activePage, setActivePage] = React.useState('dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'vault':
        return <Vault />;
      case 'forge':
        return <Forge />;
      case 'arena':
        return <Arena />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout activePage={activePage} setActivePage={setActivePage}>
      {renderPage()}
    </Layout>
  );
}
