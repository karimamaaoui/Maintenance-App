import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Cog6ToothIcon } from '@heroicons/react/24/solid';
import { IconButton } from '@material-tailwind/react';
import { Sidenav } from '../widgets/layout/sidenav';
import { Configurator } from '../widgets/layout/configurator';
import { Footer } from '../widgets/layout/footer';
import { DashboardNavbar } from '../widgets/layout/dashboard-navbar';
import { useMaterialTailwindController, setOpenConfigurator } from '../context/index';

function Dashboard() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;
 
  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidenav/>
      <div className="p-4 xl:ml-80">
        <DashboardNavbar />
        <Configurator />
        <IconButton
          size="lg"
          color="white"
          className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
          ripple={false}
          onClick={() => setOpenConfigurator(dispatch, true)}
        >
          <Cog6ToothIcon className="h-5 w-5" />
        </IconButton>
      
        <div className="text-blue-gray-600">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
