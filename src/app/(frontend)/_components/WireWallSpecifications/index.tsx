import React from 'react'
import styles from './wireWallSpecifications.module.css'

interface WireWallSpecification {
  height: string[]
  vBends: string[]
  length: string[]
  aperture: string[]
  wireDiameter: string[]
  zincCoating: string[]
  tensileStrength: string[]
  weldStrength: string[]
  colourCoating: string[]
}

interface WireWallSpecificationsProps {
  specifications: WireWallSpecification
}

const WireWallSpecifications: React.FC<WireWallSpecificationsProps> = ({ specifications }) => {
  const {
    height,
    vBends,
    length,
    aperture,
    wireDiameter,
    zincCoating,
    tensileStrength,
    weldStrength,
    colourCoating,
  } = specifications

  const rows = height.map((_, index) => ({
    height: height[index],
    vBends: vBends[index],
    length: length[index],
    aperture: aperture[index],
    wireDiameter: wireDiameter[index],
    zincCoating: zincCoating[index],
    tensileStrength: tensileStrength[index],
    weldStrength: weldStrength[index],
    colourCoating: colourCoating[index],
  }))

  return (
    <div className={styles.specificationsTable}>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Height (mm)</th>
              <th>V-Bends</th>
              <th>Length (mm)</th>
              <th>Aperture (mm)</th>
              <th>Wire Diameter</th>
              <th>Zinc Coating</th>
              <th>Tensile Strength</th>
              <th>Weld Strength</th>
              <th>Colour Coating</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>{row.height}</td>
                <td>{row.vBends}</td>
                <td>{row.length}</td>
                <td>{row.aperture}</td>
                <td>{row.wireDiameter}</td>
                <td>{row.zincCoating}</td>
                <td>{row.tensileStrength}</td>
                <td>{row.weldStrength}</td>
                <td>{row.colourCoating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default WireWallSpecifications
