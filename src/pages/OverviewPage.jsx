import React from 'react'
import Helmet from '../components/Helmet';
import OverviewFirstPage from '../components/Overview/OverviewFirstPage'
import OverviewLastPage from '../components/Overview/OverviewLastPage'
import {Outlet} from 'react-router-dom';

function OverviewPage() {
  return (
    <div className="overview-page">
        <Helmet bgcolor='#B4FF9F' />
        <Outlet />
    </div>
  )
}


export default OverviewPage