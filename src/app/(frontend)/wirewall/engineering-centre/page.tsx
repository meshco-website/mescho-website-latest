import React from 'react'
import ResourcePage from '../_components/ResourcePage'
import { allEngineeringResources } from './configs'

export default function EngineeringCentrePage() {
  return (
    <ResourcePage
      title="Engineering Centre"
      items={allEngineeringResources.map((resource) => ({
        title: resource.title,
        description: resource.description,
        href: `/wirewall/engineering-centre/${resource.slug}`,
        ctaLabel: 'Read More',
      }))}
      emptyStateMessage="Engineering resources will be available soon."
    />
  )
}
