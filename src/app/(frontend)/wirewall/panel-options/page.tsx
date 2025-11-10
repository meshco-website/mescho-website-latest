import React from 'react'
import ResourcePage from '../_components/ResourcePage'
import { allPanelOptions } from './configs'

export default function PanelOptionsPage() {
  return (
    <ResourcePage
      title="Panel Options"
      items={allPanelOptions.map((option) => ({
        title: option.title,
        description: option.description,
        href: `/wirewall/panel-options/${option.slug}`,
        ctaLabel: 'Read More',
      }))}
      emptyStateMessage="Panel options will be available soon."
    />
  )
}
