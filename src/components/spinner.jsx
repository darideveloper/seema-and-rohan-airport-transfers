import PropTypes from 'prop-types'

export default function Spinner ({size="l", alt=false}) {

  const dimension = size == "l" ? "w-16 h-16" : "w-8 h-8"
  const borderColor = alt ? "border-black/20" : "border-white/20"
  const arcColor = alt ? "border-t-black" : "border-t-white"

  return (
    <div
      className={`${dimension} ${borderColor} ${arcColor} border-4 rounded-full animate-spin`}
      role="status"
      aria-label="Loading"
    />
  )
}

Spinner.propTypes = {
  size: PropTypes.string,
  alt: PropTypes.bool,
}
