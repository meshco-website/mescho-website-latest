'use client'

import React, { useMemo, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { productTypeConfigs } from '../ProductTypePage/configs'
import styles from './productInfo.module.css'

const formatCategorySlug = (slug: string) =>
  slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

// Thumbnail component that only renders if image loads successfully
const ThumbnailImage: React.FC<{
  src: string
  alt: string
  isSelected: boolean
  onClick: () => void
}> = ({ src, alt, isSelected, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const img = new window.Image()
    img.onload = () => setImageLoaded(true)
    img.onerror = () => setHasError(true)
    img.src = src
  }, [src])

  if (!imageLoaded || hasError) {
    return null
  }

  return (
    <button
      type="button"
      className={`${styles.thumbnail} ${isSelected ? styles.thumbnailSelected : ''}`}
      onClick={onClick}
      aria-label={alt}
    >
      <Image src={src} alt={alt} fill className={styles.thumbnailImage} sizes="80px" />
    </button>
  )
}

interface Specification {
  label: string
  value: string
  format?: 'inline' | 'list'
  labelBold?: boolean
  labelMediumBold?: boolean
  wrapAlign?: boolean
}

interface ProductInfoProps {
  name: string
  title: string
  category: string
  heroImage: string
  description: string
  specifications: Specification[]
  images?: string[]
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  name,
  title,
  category,
  heroImage,
  description,
  specifications,
  images,
}) => {
  // Use images prop if available, otherwise fall back to heroImage only
  const availableImages = useMemo(() => {
    if (images && images.length > 0) {
      return images
    }
    return heroImage ? [heroImage] : []
  }, [images, heroImage])

  // Initialize selected image to the first available image
  const [selectedImage, setSelectedImage] = useState(() => {
    if (images && images.length > 0) {
      return images[0]
    }
    return heroImage || ''
  })

  // Update selected image when availableImages changes
  useEffect(() => {
    if (availableImages.length > 0 && !availableImages.includes(selectedImage)) {
      setSelectedImage(availableImages[0])
    }
  }, [availableImages, selectedImage])

  const [hasImageError, setHasImageError] = useState(!selectedImage?.trim())
  const [hasWhiteBackground, setHasWhiteBackground] = useState(false)

  const resolvedHeroImage = useMemo(
    () => (!selectedImage?.trim() || hasImageError ? '/placeholder.svg' : selectedImage),
    [selectedImage, hasImageError],
  )

  const isPlaceholder = resolvedHeroImage.includes('placeholder.svg')

  const categoryHref = `/products/${category}`
  const categoryLabel = productTypeConfigs[category]?.title ?? formatCategorySlug(category)

  // Detect if image has white background
  useEffect(() => {
    if (isPlaceholder || !resolvedHeroImage) {
      setHasWhiteBackground(false)
      return
    }

    const detectWhiteBackground = async () => {
      try {
        const img = new window.Image()
        img.crossOrigin = 'anonymous'
        
        img.onload = () => {
          const canvas = document.createElement('canvas')
          const ctx = canvas.getContext('2d')
          
          if (!ctx) {
            setHasWhiteBackground(false)
            return
          }

          // Set canvas size to match image
          canvas.width = img.width
          canvas.height = img.height
          
          // Draw image on canvas
          ctx.drawImage(img, 0, 0)
          
          // Sample pixels from corners and edges
          const samplePoints = [
            { x: 10, y: 10 }, // top-left
            { x: img.width - 10, y: 10 }, // top-right
            { x: 10, y: img.height - 10 }, // bottom-left
            { x: img.width - 10, y: img.height - 10 }, // bottom-right
            { x: img.width / 2, y: 10 }, // top-center
            { x: img.width / 2, y: img.height - 10 }, // bottom-center
            { x: 10, y: img.height / 2 }, // left-center
            { x: img.width - 10, y: img.height / 2 }, // right-center
          ]
          
          let whitePixelCount = 0
          const threshold = 240 // RGB values above this are considered white/near-white
          
          samplePoints.forEach(point => {
            const pixel = ctx.getImageData(point.x, point.y, 1, 1).data
            const r = pixel[0]
            const g = pixel[1]
            const b = pixel[2]
            
            // Check if pixel is white or near-white
            if (r > threshold && g > threshold && b > threshold) {
              whitePixelCount++
            }
          })
          
          // If more than 60% of sampled pixels are white, consider it a white background
          const whitePercentage = whitePixelCount / samplePoints.length
          setHasWhiteBackground(whitePercentage > 0.6)
        }
        
        img.onerror = () => {
          setHasWhiteBackground(false)
        }
        
        img.src = resolvedHeroImage
      } catch (error) {
        console.error('Error detecting image background:', error)
        setHasWhiteBackground(false)
      }
    }

    detectWhiteBackground()
  }, [resolvedHeroImage, isPlaceholder])

  // Helper function to get label CSS class based on bold/mediumBold props
  const getLabelClassName = (spec: Specification) => {
    if (spec.labelBold) {
      return styles.specLabelBold
    }
    if (spec.labelMediumBold) {
      return styles.specLabelMediumBold
    }
    return ''
  }

  const handleImageError = () => {
    if (!hasImageError) {
      setHasImageError(true)
    }
  }

  const handleThumbnailClick = (imagePath: string) => {
    setSelectedImage(imagePath)
    setHasImageError(false)
  }

  return (
    <div className={styles.productInfo}>
      <div className={styles.container}>
        <div className={styles.breadcrumb}>
          <Link href="/" className={styles.breadcrumbLink}>
            Home
          </Link>
          <span className={styles.breadcrumbSeparator}>{' > '}</span>
          <Link href="/products" className={styles.breadcrumbLink}>
            Products
          </Link>
          <span className={styles.breadcrumbSeparator}>{' > '}</span>
          <Link href={categoryHref} className={styles.breadcrumbLink}>
            {categoryLabel}
          </Link>
          <span className={styles.breadcrumbSeparator}>{' > '}</span>
          <span className={styles.breadcrumbCurrent}>{name}</span>
        </div>

        <div className={styles.productLayout}>
          <div className={styles.imageColumn}>
            <div
              className={`${styles.imageContainer} ${
                isPlaceholder ? styles.placeholderContainer : ''
              } ${hasWhiteBackground ? styles.whiteBackgroundContainer : ''}`}
            >
              {isPlaceholder ? (
                <Image
                  src={resolvedHeroImage}
                  alt={name}
                  width={220}
                  height={190}
                  className={styles.heroPlaceholderImage}
                  priority
                />
              ) : (
                <Image
                  src={resolvedHeroImage}
                  alt={name}
                  fill
                  className={`${styles.productImage} ${
                    hasWhiteBackground ? styles.whiteBackgroundImage : ''
                  }`}
                  priority
                  onError={handleImageError}
                />
              )}
            </div>
            {!isPlaceholder && availableImages.length > 0 && (
              <div className={styles.thumbnailContainer}>
                {availableImages.slice(0, 5).map((imagePath, index) => {
                  const isSelected = imagePath === selectedImage
                  return (
                    <ThumbnailImage
                      key={`${imagePath}-${index}`}
                      src={imagePath}
                      alt={`${name} view ${index + 1}`}
                      isSelected={isSelected}
                      onClick={() => handleThumbnailClick(imagePath)}
                    />
                  )
                })}
              </div>
            )}
          </div>

          <div className={styles.detailsColumn}>
            <div className={styles.detailsBlock}>
              <div className={styles.categoryLabel}>{category.toUpperCase()}</div>
              <h1 className={styles.productTitle}>
                {title.split('\n').map((line, index, lines) => (
                  <React.Fragment key={line}>
                    {line}
                    {index < lines.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h1>

              <div className={styles.description}>
                {(() => {
                  // First split by triple newlines to identify those breaks
                  console.log('Description:', description)
                  console.log('Has triple newline:', description.includes('\n\n\n'))
                  const tripleSplit = description.split(/\n\n\n/)
                  console.log('Triple split length:', tripleSplit.length)
                  console.log('Triple split:', tripleSplit)
                  const paragraphs: Array<{
                    text: string
                    isAfterTriple: boolean
                    isBeforeTriple: boolean
                  }> = []

                  tripleSplit.forEach((section, sectionIndex) => {
                    // Split each section by double newlines
                    const doubleSplit = section.split(/\n\n/).filter((p) => p.trim())
                    console.log(`Section ${sectionIndex}, doubleSplit length:`, doubleSplit.length)
                    doubleSplit.forEach((para, paraIndex) => {
                      const isAfterTriple = sectionIndex > 0 && paraIndex === 0
                      const isBeforeTriple =
                        sectionIndex < tripleSplit.length - 1 &&
                        paraIndex === doubleSplit.length - 1
                      console.log(
                        `  Para ${paraIndex}: isAfterTriple=${isAfterTriple}, isBeforeTriple=${isBeforeTriple}`,
                      )
                      paragraphs.push({
                        text: para.trim(),
                        isAfterTriple,
                        isBeforeTriple,
                      })
                    })
                  })

                  return paragraphs.map((para, index) => {
                    const processed = para.text.replace(
                      /\n/g,
                      '<br class="description-line-break" />',
                    )
                    const className = [
                      para.isAfterTriple ? styles.descriptionParagraphTriple : '',
                      para.isBeforeTriple ? styles.descriptionParagraphBeforeTriple : '',
                    ]
                      .filter(Boolean)
                      .join(' ')
                    console.log(
                      `Para ${index}: isAfterTriple=${para.isAfterTriple}, isBeforeTriple=${para.isBeforeTriple}, className=${className}`,
                    )
                    return (
                      <p
                        key={index}
                        className={className || undefined}
                        dangerouslySetInnerHTML={{
                          __html: processed,
                        }}
                      />
                    )
                  })
                })()}
              </div>

              <div className={styles.specifications}>
                {(() => {
                  // Check if we have "AVAILABLE SIZES" and "SHEET LENGTH" as consecutive specs for table-like layout
                  const availableSizesIndex = specifications.findIndex(
                    (spec) => spec.label === 'AVAILABLE SIZES',
                  )
                  const sheetLengthIndex = specifications.findIndex(
                    (spec) => spec.label === 'SHEET LENGTH',
                  )
                  const shouldDisplayTableLayout =
                    availableSizesIndex !== -1 &&
                    sheetLengthIndex !== -1 &&
                    Math.abs(availableSizesIndex - sheetLengthIndex) === 1

                  // Check if we have "AVAILABLE STOCK SIZES" and "LENGTH / COIL" as consecutive specs for table-like layout
                  const availableStockSizesIndex = specifications.findIndex(
                    (spec) => spec.label === 'AVAILABLE STOCK SIZES',
                  )
                  const lengthPerCoilIndex = specifications.findIndex(
                    (spec) => spec.label === 'LENGTH / COIL',
                  )
                  const shouldDisplayStockSizesTableLayout =
                    availableStockSizesIndex !== -1 &&
                    lengthPerCoilIndex !== -1 &&
                    Math.abs(availableStockSizesIndex - lengthPerCoilIndex) === 1

                  // Check if we have "AVAILABLE SIZES" and "UNIT OF SALE" as consecutive specs for table-like layout
                  const availableSizesUpperCaseIndex = specifications.findIndex(
                    (spec) => spec.label === 'AVAILABLE SIZES',
                  )
                  const unitOfSaleUpperCaseIndex = specifications.findIndex(
                    (spec) => spec.label === 'UNIT OF SALE',
                  )
                  const shouldDisplayAvailableSizesTableLayout =
                    availableSizesUpperCaseIndex !== -1 &&
                    unitOfSaleUpperCaseIndex !== -1 &&
                    Math.abs(availableSizesUpperCaseIndex - unitOfSaleUpperCaseIndex) === 1

                  // Check if we have "Available Sizes" and "Unit of Sale" as consecutive specs for side-by-side layout
                  const availableSizesIndexLower = specifications.findIndex(
                    (spec) => spec.label === 'Available Sizes',
                  )
                  const unitOfSaleIndex = specifications.findIndex(
                    (spec) => spec.label === 'Unit of Sale',
                  )
                  const shouldDisplaySideBySide =
                    availableSizesIndexLower !== -1 &&
                    unitOfSaleIndex !== -1 &&
                    Math.abs(availableSizesIndexLower - unitOfSaleIndex) === 1 &&
                    specifications[availableSizesIndexLower]?.format === 'list' &&
                    specifications[unitOfSaleIndex]?.format === 'list'

                  const renderedSpecs: React.ReactElement[] = []
                  let i = 0

                  while (i < specifications.length) {
                    const spec = specifications[i]

                    // Handle table-like layout for AVAILABLE SIZES and SHEET LENGTH (labels on same row)
                    if (
                      shouldDisplayTableLayout &&
                      (spec.label === 'AVAILABLE SIZES' || spec.label === 'SHEET LENGTH')
                    ) {
                      const tableSpecs = [
                        specifications[availableSizesIndex],
                        specifications[sheetLengthIndex],
                      ]

                      // Get the maximum number of rows
                      const maxRows = Math.max(...tableSpecs.map((s) => s.value.split('\n').length))

                      renderedSpecs.push(
                        <div key={`table-layout-${i}`} className={styles.tableLayout}>
                          {/* Labels row */}
                          <div className={styles.tableLabelsRow}>
                            {tableSpecs.map((tableSpec, tableIndex) => (
                              <div key={`label-${tableIndex}`} className={styles.tableLabelCell}>
                                <div
                                  className={`${styles.specLabel} ${getLabelClassName(tableSpec)}`}
                                >
                                  {tableSpec.label}:
                                </div>
                              </div>
                            ))}
                          </div>
                          {/* Values rows */}
                          {Array.from({ length: maxRows }).map((_, rowIndex) => (
                            <div key={`row-${rowIndex}`} className={styles.tableValuesRow}>
                              {tableSpecs.map((tableSpec, tableIndex) => {
                                const values = tableSpec.value.split('\n')
                                const value = values[rowIndex] || ''
                                return (
                                  <div key={`cell-${tableIndex}`} className={styles.tableValueCell}>
                                    <div className={styles.listItem}>{value}</div>
                                  </div>
                                )
                              })}
                            </div>
                          ))}
                        </div>,
                      )

                      // Skip both specs since we rendered them together
                      i += 2
                      continue
                    }

                    // Handle table-like layout for AVAILABLE STOCK SIZES and LENGTH / COIL (labels on same row)
                    if (
                      shouldDisplayStockSizesTableLayout &&
                      (spec.label === 'AVAILABLE STOCK SIZES' || spec.label === 'LENGTH / COIL')
                    ) {
                      const tableSpecs = [
                        specifications[availableStockSizesIndex],
                        specifications[lengthPerCoilIndex],
                      ]

                      // Get the maximum number of rows
                      const maxRows = Math.max(...tableSpecs.map((s) => s.value.split('\n').length))

                      renderedSpecs.push(
                        <div key={`table-layout-stock-${i}`} className={styles.tableLayout}>
                          {/* Labels row */}
                          <div className={styles.tableLabelsRow}>
                            {tableSpecs.map((tableSpec, tableIndex) => (
                              <div key={`label-${tableIndex}`} className={styles.tableLabelCell}>
                                <div
                                  className={`${styles.specLabel} ${getLabelClassName(tableSpec)}`}
                                >
                                  {tableSpec.label}:
                                </div>
                              </div>
                            ))}
                          </div>
                          {/* Values rows */}
                          {Array.from({ length: maxRows }).map((_, rowIndex) => (
                            <div key={`row-${rowIndex}`} className={styles.tableValuesRow}>
                              {tableSpecs.map((tableSpec, tableIndex) => {
                                const values = tableSpec.value.split('\n')
                                const value = values[rowIndex] || ''
                                return (
                                  <div key={`cell-${tableIndex}`} className={styles.tableValueCell}>
                                    <div className={styles.listItem}>{value}</div>
                                  </div>
                                )
                              })}
                            </div>
                          ))}
                        </div>,
                      )

                      // Skip both specs since we rendered them together
                      i += 2
                      continue
                    }

                    // Handle table-like layout for AVAILABLE SIZES and UNIT OF SALE (labels on same row)
                    if (
                      shouldDisplayAvailableSizesTableLayout &&
                      (spec.label === 'AVAILABLE SIZES' || spec.label === 'UNIT OF SALE')
                    ) {
                      const tableSpecs = [
                        specifications[availableSizesUpperCaseIndex],
                        specifications[unitOfSaleUpperCaseIndex],
                      ]

                      // Get the maximum number of rows
                      const maxRows = Math.max(...tableSpecs.map((s) => s.value.split('\n').length))

                      renderedSpecs.push(
                        <div key={`table-layout-available-${i}`} className={styles.tableLayout}>
                          {/* Labels row */}
                          <div className={styles.tableLabelsRow}>
                            {tableSpecs.map((tableSpec, tableIndex) => (
                              <div key={`label-${tableIndex}`} className={styles.tableLabelCell}>
                                <div
                                  className={`${styles.specLabel} ${getLabelClassName(tableSpec)}`}
                                >
                                  {tableSpec.label}:
                                </div>
                              </div>
                            ))}
                          </div>
                          {/* Values rows */}
                          {Array.from({ length: maxRows }).map((_, rowIndex) => (
                            <div key={`row-${rowIndex}`} className={styles.tableValuesRow}>
                              {tableSpecs.map((tableSpec, tableIndex) => {
                                const values = tableSpec.value.split('\n')
                                const value = values[rowIndex] || ''
                                return (
                                  <div key={`cell-${tableIndex}`} className={styles.tableValueCell}>
                                    <div className={styles.listItem}>{value}</div>
                                  </div>
                                )
                              })}
                            </div>
                          ))}
                        </div>,
                      )

                      // Skip both specs since we rendered them together
                      i += 2
                      continue
                    }

                    // Handle side-by-side layout for Available Sizes and Unit of Sale
                    if (
                      shouldDisplaySideBySide &&
                      (spec.label === 'Available Sizes' || spec.label === 'Unit of Sale')
                    ) {
                      const sideBySideSpecs = [
                        specifications[availableSizesIndexLower],
                        specifications[unitOfSaleIndex],
                      ]

                      renderedSpecs.push(
                        <div key={`side-by-side-${i}`} className={styles.sideBySideLists}>
                          {sideBySideSpecs.map((sideSpec, sideIndex) => (
                            <div
                              key={`list-${sideIndex}`}
                              className={styles.specItemListSideBySide}
                            >
                              <div className={`${styles.specLabel} ${getLabelClassName(sideSpec)}`}>
                                {sideSpec.label}:
                              </div>
                              <div className={styles.specValueList}>
                                {sideSpec.value.split('\n').map((item, itemIndex) => (
                                  <div key={itemIndex} className={styles.listItem}>
                                    {item}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>,
                      )

                      // Skip both specs since we rendered them together
                      i += 2
                      continue
                    }

                    // Skip if this spec is part of table layout (already rendered)
                    if (
                      shouldDisplayStockSizesTableLayout &&
                      (spec.label === 'AVAILABLE STOCK SIZES' || spec.label === 'LENGTH / COIL')
                    ) {
                      i++
                      continue
                    }

                    // Skip if this spec is part of table layout (already rendered)
                    if (
                      shouldDisplayAvailableSizesTableLayout &&
                      (spec.label === 'AVAILABLE SIZES' || spec.label === 'UNIT OF SALE')
                    ) {
                      i++
                      continue
                    }

                    // Skip if this spec is part of side-by-side (already rendered)
                    if (
                      shouldDisplaySideBySide &&
                      (spec.label === 'Available Sizes' || spec.label === 'Unit of Sale')
                    ) {
                      i++
                      continue
                    }

                    // Render inline spec
                    if (spec.format === 'inline' || !spec.format) {
                      renderedSpecs.push(
                        <div
                          key={`inline-${i}`}
                          className={`${styles.specItemInline} ${spec.wrapAlign ? styles.specItemWrapAlign : ''}`}
                        >
                          {spec.label?.trim() && (
                            <span className={`${styles.specLabel} ${getLabelClassName(spec)}`}>
                              {spec.label}:
                            </span>
                          )}
                          <span className={styles.specValue}>{spec.value}</span>
                        </div>,
                      )
                    }
                    // Render list spec
                    else if (spec.format === 'list') {
                      renderedSpecs.push(
                        <div key={`list-${i}`} className={styles.specItemList}>
                          {spec.label?.trim() && (
                            <div className={`${styles.specLabel} ${getLabelClassName(spec)}`}>
                              {spec.label}:
                            </div>
                          )}
                          <div className={styles.specValueList}>
                            {spec.value.split('\n').map((item, itemIndex) => (
                              <div
                                key={itemIndex}
                                className={styles.listItem}
                                dangerouslySetInnerHTML={{ __html: item }}
                              />
                            ))}
                          </div>
                        </div>,
                      )
                    }

                    i++
                  }

                  return <>{renderedSpecs}</>
                })()}
              </div>

              <div className={styles.quoteButton}>
                <Link
                  href={category.toLowerCase() === 'wirewall' ? '/wirewall-quote' : '/quote'}
                  className={styles.quoteBtn}
                >
                  Get a quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
