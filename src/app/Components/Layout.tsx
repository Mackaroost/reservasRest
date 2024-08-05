// App/Components/Layout.js
import { ReactNode } from 'react';
import NavBar from './NavBar';

interface LayoutProps {
    children: ReactNode;
  }
  
  const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
      <div className="bg-slate-50 container mx-auto rounded-md max-w-2xl min-h-96">
        <NavBar />
        <div className="flex flex-col items-center justify-center content-center">
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
