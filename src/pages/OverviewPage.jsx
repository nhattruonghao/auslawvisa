import React from 'react'
import Helmet from '../components/Helmet'
import OverviewFirstPage from '../components/Overview/OverviewFirstPage'

function OverviewPage() {
  return (
    <div className="overview-page">
        <Helmet bgcolor='#B4FF9F' />
        <OverviewFirstPage />
    </div>
  )
}


export default OverviewPage