import React from 'react'

interface ArrowIconProps {
  size?: number
  color?: string
  className?: string
  isActive?: boolean
}

const ArrowIcon: React.FC<ArrowIconProps> = ({
  size = 14,
  color = '#DEAF38',
  className = '',
  isActive = false,
}) => {
  if (isActive) {
    return (
      <svg
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ marginLeft: '2px' }}
      >
        <path
          d="M11.0955 6.01044L5.08511 12.0208L4.16049 11.0962L8.59234 6.66437L2.25299e-05 6.66368V5.35719L8.59234 5.3565L4.16049 0.924654L5.08511 2.94745e-05L11.0955 6.01044Z"
          fill={color}
        />
      </svg>
    )
  }

  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ marginLeft: '4px' }}
    >
      <path
        d="M8.5 8.5H0L0 7.19238H6.26758L0.192383 1.11621L1.11621 0.192383L7.19238 6.26758V0L8.5 0V8.5Z"
        fill={color}
      />
    </svg>
  )
}

export default ArrowIcon
