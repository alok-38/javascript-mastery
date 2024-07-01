import React from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

const Dashboard = () => {
  return (
	<div>
    {/* Search section */}
    <SearchSection />
    {/* Templates list section */}
    <TemplateListSection />
  </div>
  )
}

export default Dashboard