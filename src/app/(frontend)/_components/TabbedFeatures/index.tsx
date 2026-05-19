'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import styles from './tabbedFeatures.module.css'

interface TabData {
  id: string
  label: string
  content: string[]
  html?: string
  image?: string | null
  format?: 'bullet' | 'sectioned-bullet' | 'heading-description' | 'heading-colon' | 'plain'
  imageMaxWidth?: string
}

interface TabbedFeaturesProps {
  tabs: TabData[]
}

const BOLD_INLINE_LABELS = [
  'Applications:',
  'Available sizes:',
  'Unit of sale:',
  'Standard sizes:',
  'Standard lengths:',
  'Application:',
  'Standard size:',
  'Standard length:',
  'Panel depth:',
  'Panel length:',
  'Wire diameters:',
  'Aperture sizes:',
  'Finishes:',
  'Shank:',
  'Head:',
  'Material:',
]

const SECTION_HEADING_PATTERN =
  /^(Butterfly Wall Ties|Crimped Wall Ties|Z-Pattern Wall Ties|Vertical Twist Wall Ties|Key Benefits of Meshco Wall Ties|Deformed Bar \(Y-bar\)|Round Bar \(R-bar\)|Key Benefits of Meshco Rebar|Masonry Reinforcement|Roof Truss Bracing|Strapping and Bracing|Timber Construction|Key Features:|Standard Spike|Heavy Spike|Raptor Tooth|Assegai|Pedestrian Gates \(Swing, Single Leaf\)|Vehicular Gates|Single and Double Leaf Swing Gates|Sliding Gates|Application:|Recommended Nail Size:|Key features of round wire nails:)$/i

const isSectionHeading = (line: string): boolean =>
  SECTION_HEADING_PATTERN.test(line.trim()) || line.trim().endsWith(':')

const isBulletMarkerLine = (line: string): boolean => /^[•*]\s/.test(line.trim())

const stripBulletMarker = (line: string): string => line.trim().replace(/^[•*]\s*/, '')

const TabbedFeatures: React.FC<TabbedFeaturesProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '')
  const [imageError, setImageError] = useState<string | null>(null)

  React.useEffect(() => {
    if (tabs && tabs.length > 0) {
      if (!activeTab || !tabs.find((tab) => tab.id === activeTab)) {
        setActiveTab(tabs[0].id)
      }
    }
  }, [tabs, activeTab])

  React.useEffect(() => {
    // Reset image error when tab changes
    setImageError(null)
  }, [activeTab])

  if (!tabs || tabs.length === 0) {
    return null
  }

  const activeTabData = tabs.find((tab) => tab.id === activeTab)
  const tabImage = activeTabData?.image
  const hasValidImage =
    tabImage &&
    tabImage !== null &&
    typeof tabImage === 'string' &&
    tabImage.trim() !== '' &&
    imageError !== tabImage
  const isGalleryTab = activeTabData?.id === 'gallery'

  // Check if content items are image paths (for gallery)
  const isImagePath = (str: string): boolean => {
    if (!str || typeof str !== 'string') return false
    const imageExtensions = ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg']
    return imageExtensions.some((ext) => str.toLowerCase().endsWith(ext))
  }

  // Helper function to render heading text - hides colon if present and makes text bold
  const renderHeadingText = (text: string): React.ReactNode => {
    if (!text || typeof text !== 'string') return text
    if (text.trim().endsWith(':')) {
      const textWithoutColon = text.trim().slice(0, -1)
      return <span className={styles.boldLabel}>{textWithoutColon}</span>
    }
    return text
  }

  return (
    <div className={styles.tabbedFeatures}>
      <div className={styles.tabNavigation}>
        {tabs.map((tab, index) => (
          <button
            key={`${tab.id}-${index}`}
            className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={styles.tabContent}>
        {activeTabData ? (
          <>
            {isGalleryTab &&
            activeTabData.content &&
            Array.isArray(activeTabData.content) &&
            activeTabData.content.length > 0 ? (
              <div className={styles.galleryContainer}>
                {(() => {
                  const imagePaths = activeTabData.content.filter(
                    (path) => path && typeof path === 'string' && isImagePath(path),
                  )
                  const firstTwoImages = imagePaths.slice(0, 2)
                  const remainingImages = imagePaths.slice(2)

                  return (
                    <>
                      {firstTwoImages.length > 0 && (
                        <div className={styles.galleryGrid}>
                          {firstTwoImages.map((imagePath, index) => (
                            <div
                              key={`gallery-${imagePath}-${index}`}
                              className={styles.galleryItem}
                            >
                              <Image
                                src={imagePath}
                                alt={`Gallery image ${index + 1}`}
                                fill
                                className={styles.galleryImage}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                onError={() => {}}
                                unoptimized
                              />
                            </div>
                          ))}
                        </div>
                      )}
                      {remainingImages.length > 0 && (
                        <div className={styles.galleryGridSmall}>
                          {remainingImages.map((imagePath, index) => (
                            <div
                              key={`gallery-${imagePath}-${index + 2}`}
                              className={styles.galleryItemSmall}
                            >
                              <Image
                                src={imagePath}
                                alt={`Gallery image ${index + 3}`}
                                fill
                                className={styles.galleryImage}
                                sizes="(max-width: 768px) 100vw, 33vw"
                                onError={() => {}}
                                unoptimized
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )
                })()}
              </div>
            ) : (
              <>
                {hasValidImage && tabImage && typeof tabImage === 'string' ? (
                  <div className={styles.specificationImageWrapper}>
                    <div
                      className={styles.specificationImageInner}
                      style={
                        activeTabData.imageMaxWidth ? { maxWidth: activeTabData.imageMaxWidth } : {}
                      }
                    >
                      <Image
                        src={tabImage}
                        alt={`${activeTabData.label} image`}
                        width={1200}
                        height={900}
                        className={styles.specificationImage}
                        style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                        onError={() => setImageError(tabImage)}
                        unoptimized
                      />
                    </div>
                  </div>
                ) : (activeTabData.content &&
                    Array.isArray(activeTabData.content) &&
                    activeTabData.content.length > 0) ||
                  activeTabData.html?.trim() ? (
                  <div className={styles.featuresList}>
                    {(() => {
                      if (activeTabData.id === 'nail-size-guide' && activeTabData.html?.trim()) {
                        return [
                          <div
                            key="nail-size-guide-html"
                            className={`${styles.richContent} ${styles.nailGuideContent}`}
                            dangerouslySetInnerHTML={{ __html: activeTabData.html }}
                          />,
                        ]
                      }

                      const isBulletFormat = activeTabData.format === 'bullet'
                      let currentHeading: string | null = null
                      let bulletItems: string[] = []
                      const items: React.ReactElement[] = []

                      // Special-case rendering for Nail Size Guide (two-column layout)
                      if (activeTabData.id === 'nail-size-guide') {
                        const content = (activeTabData.content || []) as string[]

                        if (Array.isArray(content) && content.length > 0) {
                          const [title, ...rest] = content

                          // Main title
                          if (title && title.trim()) {
                            items.push(
                              <div key="nail-size-guide-title" className={styles.featureItem}>
                                <p className={styles.mainHeading}>{title}</p>
                              </div>,
                            )
                          }

                          // Find headings
                          const appIndex = rest.findIndex(
                            (line) => line.trim().toLowerCase() === 'application:',
                          )
                          const sizeIndex = rest.findIndex(
                            (line) => line.trim().toLowerCase() === 'recommended nail size:',
                          )

                          const applicationItems =
                            appIndex !== -1 && sizeIndex !== -1
                              ? rest.slice(appIndex + 1, sizeIndex).filter((line) => line.trim())
                              : []

                          const recommendedSizeItems =
                            sizeIndex !== -1
                              ? rest.slice(sizeIndex + 1).filter((line) => line.trim())
                              : []

                          items.push(
                            <div
                              key="nail-size-guide-two-column"
                              className={styles.twoColumnLayout}
                            >
                              <div className={styles.twoColumnLeft}>
                                <p className={styles.featureHeading}>{renderHeadingText('APPLICATION:')}</p>
                                {applicationItems.map((item, index) => (
                                  <p key={index} className={styles.featureDescription}>
                                    {item}
                                  </p>
                                ))}
                              </div>
                              <div className={styles.twoColumnRight}>
                                <p className={styles.featureHeading}>{renderHeadingText('RECOMMENDED NAIL SIZE')}</p>
                                {recommendedSizeItems.map((item, index) => (
                                  <p key={index} className={styles.featureDescription}>
                                    {item}
                                  </p>
                                ))}
                              </div>
                            </div>,
                          )
                        }

                        return items
                      }

                      if (activeTabData.format === 'sectioned-bullet') {
                        let currentHeading: string | null = null
                        let awaitingIntro = false
                        let sectionBulletItems: string[] = []

                        const isSectionedFooterLine = (line: string) => {
                          const trimmed = line.trim()
                          return (
                            trimmed.startsWith('Available sizes:') ||
                            trimmed.startsWith('Unit of sale:')
                          )
                        }

                        const renderSectionedParagraph = (text: string, key: string) => (
                          <div
                            key={key}
                            className={`${styles.featureItem} ${styles.sectionedItem}${
                              isSectionedFooterLine(text) ? ` ${styles.sectionedFooterLine}` : ''
                            }`}
                          >
                            <p className={styles.featureDescription}>{text}</p>
                          </div>
                        )

                        const flushSectionBullets = (keySuffix: string) => {
                          if (sectionBulletItems.length === 0) return

                          items.push(
                            <ul
                              key={`section-bullets-${keySuffix}`}
                              className={`${styles.bulletList} ${styles.sectionedBulletList}`}
                            >
                              {sectionBulletItems.map((item, bulletIndex) => (
                                <li key={bulletIndex} className={styles.bulletItem}>
                                  {item}
                                </li>
                              ))}
                            </ul>,
                          )
                          sectionBulletItems = []
                        }

                        activeTabData.content.forEach((feature, index) => {
                          if (typeof feature !== 'string') return

                          if (!feature.trim()) {
                            return
                          }

                          if (isSectionHeading(feature)) {
                            flushSectionBullets(`heading-${index}`)
                            currentHeading = feature
                            awaitingIntro = true
                            items.push(
                              <div
                                key={`section-heading-${index}`}
                                className={`${styles.featureItem} ${styles.sectionedItem} ${styles.sectionedHeading}`}
                              >
                                <p className={styles.featureHeading}>{renderHeadingText(feature)}</p>
                              </div>,
                            )
                            return
                          }

                          if (!currentHeading) return

                          if (awaitingIntro && !isBulletMarkerLine(feature)) {
                            items.push(renderSectionedParagraph(feature, `section-intro-${index}`))
                            awaitingIntro = false
                            return
                          }

                          if (isBulletMarkerLine(feature)) {
                            awaitingIntro = false
                            sectionBulletItems.push(stripBulletMarker(feature))
                            return
                          }

                          flushSectionBullets(`para-${index}`)
                          awaitingIntro = false
                          items.push(renderSectionedParagraph(feature, `section-para-${index}`))
                        })

                        flushSectionBullets('final')
                        return [
                          <div key="sectioned-list" className={styles.sectionedList}>
                            {items}
                          </div>,
                        ]
                      }

                      activeTabData.content.forEach((feature, index) => {
                        if (!feature || typeof feature !== 'string') return

                        // Check if feature has format "Heading - Description"
                        const parts = feature.split(' - ')
                        const hasHeadingWithDescription = parts.length === 2

                        // Check if this is a main heading (bigger, bold) - can be with or without description
                        const isMainHeading =
                          parts[0]?.match(
                            /^(How many wall ties to use\?|Key Features:|Pedestrian Gates \(Swing, Single Leaf\)|Vehicular Gates|Why Choose EDMA Hog Ring Pliers\?|Why Choose EDMA Cutting Nippers\?)$/i,
                          ) ||
                          (!hasHeadingWithDescription &&
                            feature.match(
                              /^(How many wall ties to use\?|Key Features:|Pedestrian Gates \(Swing, Single Leaf\)|Vehicular Gates|Why Choose EDMA Hog Ring Pliers\?|Why Choose EDMA Cutting Nippers\?)$/i,
                            ))

                        // Check if this is a subheading (bold but smaller) - ends with colon or specific patterns
                        const isSubHeading =
                          !hasHeadingWithDescription &&
                          !isMainHeading &&
                          (feature.match(/^(Spacing:|Distribution:|Key exceptions:|Note:)$/i) ||
                            (feature.trim().endsWith(':') &&
                              feature.length < 50 &&
                              !feature.match(/For timber frame walls, the density increases:/i)))

                        // Check if this is a standalone heading (other headings)
                        const isStandaloneHeading =
                          !hasHeadingWithDescription &&
                          !isMainHeading &&
                          !isSubHeading &&
                          (feature.match(
                            /^(Butterfly Wall Ties|Crimped Wall Ties|Z-Pattern Wall Ties|Vertical Twist Wall Ties|Key Benefits of Meshco Wall Ties|Deformed Bar \(Y-bar\)|Round Bar \(R-bar\)|Key Benefits of Meshco Rebar|Masonry Reinforcement|Roof Truss Bracing|Strapping and Bracing|Timber Construction|Key Features:|Standard Spike|Heavy Spike|Raptor Tooth|Assegai|Pedestrian Gates \(Swing, Single Leaf\)|Vehicular Gates|Single and Double Leaf Swing Gates|Sliding Gates|Application:|Recommended Nail Size:|Key features of round wire nails:)$/i,
                          ) ||
                            feature.trim().endsWith(':'))

                        if (
                          isBulletFormat &&
                          (isStandaloneHeading || isMainHeading || isSubHeading)
                        ) {
                          // Render previous bullet list if exists
                          if (currentHeading && bulletItems.length > 0) {
                            // Check if the heading is "Key features of round wire nails:" - render as regular text, not bullets
                            const isKeyFeaturesHeading =
                              currentHeading !== null &&
                              typeof currentHeading === 'string' &&
                              (currentHeading as string).match(
                                /^Key features of round wire nails:$/i,
                              ) !== null

                            if (isKeyFeaturesHeading) {
                              // Render as regular text with bold labels
                              bulletItems.forEach((item, bulletIndex) => {
                                if (!item.trim()) return // Skip empty items

                                const boldLabels = [
                                  'Applications:',
                                  'Available sizes:',
                                  'Unit of sale:',
                                  'Standard sizes:',
                                  'Standard lengths:',
                                  'Application:',
                                  'Standard size:',
                                  'Standard length:',
                                  'Panel depth:',
                                  'Panel length:',
                                  'Wire diameters:',
                                  'Aperture sizes:',
                                  'Finishes:',
                                  'Shank:',
                                  'Head:',
                                  'Material:',
                                ]
                                const trimmedItem = item.trim()
                                const boldLabelMatch = boldLabels.find((label) =>
                                  trimmedItem.startsWith(label),
                                )

                                if (boldLabelMatch) {
                                  const labelIndex = item.indexOf(boldLabelMatch)
                                  const labelEnd = labelIndex + boldLabelMatch.length
                                  const label = item.substring(labelIndex, labelEnd)
                                  const rest = item.substring(labelEnd)
                                  items.push(
                                    <div
                                      key={`feature-${currentHeading}-${bulletIndex}`}
                                      className={styles.featureItem}
                                    >
                                      <p className={styles.featureDescription}>
                                        <span className={styles.boldLabel}>{label}</span>
                                        {rest}
                                      </p>
                                    </div>,
                                  )
                                } else {
                                  items.push(
                                    <div
                                      key={`feature-${currentHeading}-${bulletIndex}`}
                                      className={styles.featureItem}
                                    >
                                      <p className={styles.featureDescription}>{item}</p>
                                    </div>,
                                  )
                                }
                              })
                            } else {
                              // Render as bullet list
                              items.push(
                                <ul
                                  key={`bullets-${currentHeading}-${index}`}
                                  className={styles.bulletList}
                                >
                                  {bulletItems.map((item, bulletIndex) => {
                                    // Check if item starts with bold labels
                                    const boldLabels = [
                                      'Applications:',
                                      'Available sizes:',
                                      'Unit of sale:',
                                      'Standard sizes:',
                                      'Standard lengths:',
                                      'Application:',
                                      'Standard size:',
                                      'Standard length:',
                                      'Panel depth:',
                                      'Panel length:',
                                      'Wire diameters:',
                                      'Aperture sizes:',
                                      'Finishes:',
                                      'Shank:',
                                      'Head:',
                                      'Material:',
                                    ]
                                    const trimmedItem = item.trim()
                                    const boldLabelMatch = boldLabels.find((label) =>
                                      trimmedItem.startsWith(label),
                                    )

                                    if (boldLabelMatch) {
                                      // Find the position in the original string
                                      const labelIndex = item.indexOf(boldLabelMatch)
                                      const labelEnd = labelIndex + boldLabelMatch.length
                                      const label = item.substring(labelIndex, labelEnd)
                                      const rest = item.substring(labelEnd)
                                      return (
                                        <li key={bulletIndex} className={styles.bulletItem}>
                                          <span className={styles.boldLabel}>{label}</span>
                                          {rest}
                                        </li>
                                      )
                                    }

                                    return (
                                      <li key={bulletIndex} className={styles.bulletItem}>
                                        {item}
                                      </li>
                                    )
                                  })}
                                </ul>,
                              )
                            }
                            bulletItems = []
                          }
                          currentHeading = feature
                          items.push(
                            <div key={`heading-${index}`} className={styles.featureItem}>
                              {isMainHeading ? (
                                <p className={styles.mainHeading}>{renderHeadingText(feature)}</p>
                              ) : isSubHeading ? (
                                <p className={styles.subHeading}>{renderHeadingText(feature)}</p>
                              ) : (
                                <p className={styles.featureHeading}>{renderHeadingText(feature)}</p>
                              )}
                            </div>,
                          )
                        } else if (isBulletFormat && currentHeading) {
                          // Add to bullet list
                          bulletItems.push(feature)
                        } else if (
                          isBulletFormat &&
                          !currentHeading &&
                          !isStandaloneHeading &&
                          !isMainHeading &&
                          !isSubHeading
                        ) {
                          // Bullet format without headings - add all items to bullet list
                          bulletItems.push(feature)
                        } else {
                          // Render previous bullet list if exists
                          if (currentHeading && bulletItems.length > 0) {
                            items.push(
                              <ul
                                key={`bullets-${currentHeading}-${index}`}
                                className={styles.bulletList}
                              >
                                {bulletItems.map((item, bulletIndex) => (
                                  <li key={bulletIndex} className={styles.bulletItem}>
                                    {item}
                                  </li>
                                ))}
                              </ul>,
                            )
                            bulletItems = []
                            currentHeading = null
                          }

                          // Regular rendering
                          // Skip empty lines (used for spacing)
                          if (!feature.trim()) {
                            items.push(<div key={index} className={styles.spacingDivider}></div>)
                            return
                          }

                          items.push(
                            <div key={index} className={styles.featureItem}>
                              {hasHeadingWithDescription ? (
                                isMainHeading ? (
                                  <>
                                    <p className={styles.mainHeading}>{renderHeadingText(parts[0])}</p>
                                    {parts[1] && (
                                      <p className={styles.featureDescription}>{parts[1]}</p>
                                    )}
                                  </>
                                ) : (
                                  <>
                                    <p className={styles.featureHeading}>{renderHeadingText(parts[0])}</p>
                                    {parts[1] && (
                                      <p className={styles.featureDescription}>{parts[1]}</p>
                                    )}
                                  </>
                                )
                              ) : isMainHeading ? (
                                <p className={styles.mainHeading}>{renderHeadingText(feature)}</p>
                              ) : isSubHeading ? (
                                <p className={styles.subHeading}>{renderHeadingText(feature)}</p>
                              ) : isStandaloneHeading ? (
                                <p className={styles.featureHeading}>{renderHeadingText(feature)}</p>
                              ) : (
                                <p className={styles.featureDescription}>{feature}</p>
                              )}
                            </div>,
                          )
                        }
                      })

                      // Render final bullet list if exists (with or without heading)
                      if (isBulletFormat && bulletItems.length > 0) {
                        // Check if the heading is "Key features of round wire nails:" - render as regular text, not bullets
                        const isKeyFeaturesHeading =
                          currentHeading !== null &&
                          typeof currentHeading === 'string' &&
                          (currentHeading as string).match(
                            /^Key features of round wire nails:$/i,
                          ) !== null

                        if (isKeyFeaturesHeading) {
                          // Render as regular text with bold labels
                          bulletItems.forEach((item, bulletIndex) => {
                            if (!item.trim()) return // Skip empty items

                            const boldLabels = [
                              'Applications:',
                              'Available sizes:',
                              'Unit of sale:',
                              'Standard sizes:',
                              'Standard lengths:',
                              'Application:',
                              'Standard size:',
                              'Standard length:',
                              'Panel depth:',
                              'Panel length:',
                              'Wire diameters:',
                              'Aperture sizes:',
                              'Finishes:',
                              'Shank:',
                              'Head:',
                              'Material:',
                            ]
                            const trimmedItem = item.trim()
                            const boldLabelMatch = boldLabels.find((label) =>
                              trimmedItem.startsWith(label),
                            )

                            if (boldLabelMatch) {
                              const labelIndex = item.indexOf(boldLabelMatch)
                              const labelEnd = labelIndex + boldLabelMatch.length
                              const label = item.substring(labelIndex, labelEnd)
                              const rest = item.substring(labelEnd)
                              items.push(
                                <div
                                  key={`feature-${currentHeading || 'no-heading'}-final-${bulletIndex}`}
                                  className={styles.featureItem}
                                >
                                  <p className={styles.featureDescription}>
                                    <span className={styles.boldLabel}>{label}</span>
                                    {rest}
                                  </p>
                                </div>,
                              )
                            } else {
                              items.push(
                                <div
                                  key={`feature-${currentHeading || 'no-heading'}-final-${bulletIndex}`}
                                  className={styles.featureItem}
                                >
                                  <p className={styles.featureDescription}>{item}</p>
                                </div>,
                              )
                            }
                          })
                        } else {
                          // Render as bullet list
                          items.push(
                            <ul
                              key={`bullets-${currentHeading || 'no-heading'}-final`}
                              className={styles.bulletList}
                            >
                              {bulletItems.map((item, bulletIndex) => {
                                // Check if item starts with bold labels
                                const boldLabels = [
                                  'Applications:',
                                  'Available sizes:',
                                  'Unit of sale:',
                                  'Standard sizes:',
                                  'Standard lengths:',
                                  'Application:',
                                  'Standard size:',
                                  'Standard length:',
                                  'Panel depth:',
                                  'Panel length:',
                                  'Wire diameters:',
                                  'Aperture sizes:',
                                  'Finishes:',
                                  'Shank:',
                                  'Head:',
                                  'Material:',
                                ]
                                const trimmedItem = item.trim()
                                const boldLabelMatch = boldLabels.find((label) =>
                                  trimmedItem.startsWith(label),
                                )

                                if (boldLabelMatch) {
                                  // Extract label and rest of text
                                  // Since trimmedItem starts with the label, we can safely extract from trimmed version
                                  const trimmedLabel = trimmedItem.substring(
                                    0,
                                    boldLabelMatch.length,
                                  )
                                  const trimmedRest = trimmedItem
                                    .substring(boldLabelMatch.length)
                                    .trimStart()
                                  return (
                                    <li key={bulletIndex} className={styles.bulletItem}>
                                      <span className={styles.boldLabel}>{trimmedLabel}</span>
                                      {trimmedRest ? ` ${trimmedRest}` : ''}
                                    </li>
                                  )
                                }

                                return (
                                  <li key={bulletIndex} className={styles.bulletItem}>
                                    {item}
                                  </li>
                                )
                              })}
                            </ul>,
                          )
                        }
                      }

                      if (activeTabData.html?.trim()) {
                        items.push(
                          <div
                            key="tab-html-content"
                            className={styles.richContent}
                            dangerouslySetInnerHTML={{ __html: activeTabData.html }}
                          />,
                        )
                      }

                      return items
                    })()}
                  </div>
                ) : null}
              </>
            )}
          </>
        ) : (
          <div className={styles.featuresList}>
            <p className={styles.featureDescription}>No tab data available.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default TabbedFeatures
