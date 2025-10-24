import React from 'react'

interface ArrowIconProps {
  size?: number
  color?: string
  className?: string
}

const ArrowIcon: React.FC<ArrowIconProps> = ({ size = 14, color = '#DEAF38', className = '' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 19 19"
      fill="none"
      className={className}
      style={{ marginLeft: '8px' }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 17.5385V0L16.0769 0V14.01L2.495 0.428127L0.428076 2.49505L14.0099 16.0769H0L0 19H17.5385H19V17.5385Z"
        fill={color}
      />
    </svg>
  )
}

export default ArrowIcon
