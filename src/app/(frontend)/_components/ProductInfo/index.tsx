'use client'

import React, { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './productInfo.module.css'

interface Specification {
  label: string
  value: string
  format?: 'inline' | 'list'
}

interface ProductInfoProps {
  name: string
  title: string
  category: string
  heroImage: string
  description: string
  specifications: Specification[]
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  name,
  title,
  category,
  heroImage,
  description,
  specifications,
}) => {
  const [hasImageError, setHasImageError] = useState(!heroImage?.trim())

  const resolvedHeroImage = useMemo(
    () => (!heroImage?.trim() || hasImageError ? '/placeholder.svg' : heroImage),
    [heroImage, hasImageError],
  )

  const isPlaceholder = resolvedHeroImage.includes('placeholder.svg')

  const handleImageError = () => {
    if (!hasImageError) {
      setHasImageError(true)
    }
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
          <Link href={`/products/${category.toLowerCase()}`} className={styles.breadcrumbLink}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Link>
          <span className={styles.breadcrumbSeparator}>{' > '}</span>
          <span className={styles.breadcrumbCurrent}>{name}</span>
        </div>

        <div className={styles.productLayout}>
          <div className={styles.imageColumn}>
            <div
              className={`${styles.imageContainer} ${
                isPlaceholder ? styles.placeholderContainer : ''
              }`}
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
                  className={styles.productImage}
                  priority
                  onError={handleImageError}
                />
              )}
            </div>
          </div>

          <div className={styles.detailsColumn}>
            <div className={styles.detailsBlock}>
              <div className={styles.categoryLabel}>{category.toUpperCase()}</div>
              <h1 className={styles.productTitle}>{title}</h1>

              <div className={styles.description}>
                {description.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
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
                    Math.abs(availableSizesIndexLower - unitOfSaleIndex) === 1

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
                                <div className={styles.specLabel}>{tableSpec.label}:</div>
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
                                <div className={styles.specLabel}>{tableSpec.label}:</div>
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
                                <div className={styles.specLabel}>{tableSpec.label}:</div>
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
                              <div className={styles.specLabel}>{sideSpec.label}:</div>
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
                        <div key={`inline-${i}`} className={styles.specItemInline}>
                          {spec.label?.trim() && (
                            <span className={styles.specLabel}>{spec.label}:</span>
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
                            <div className={styles.specLabel}>{spec.label}:</div>
                          )}
                          <div className={styles.specValueList}>
                            {spec.value.split('\n').map((item, itemIndex) => (
                              <div key={itemIndex} className={styles.listItem}>
                                {item}
                              </div>
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
