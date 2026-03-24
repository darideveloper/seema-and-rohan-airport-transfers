import PropTypes from 'prop-types'
import { useState } from 'react'

export default function TransportType ({id, text, handleUpdateType, transportType}) {

  const [hover, setHover] = useState (false)

  function handleChange (e) {
    // Submit activate checked to parent
    handleUpdateType (id)
  }

  return (
    <div className="transport-type">

      <div className="checkbox opacity-80 ms-3">
        <label 
          htmlFor={id} 
          className='flex items-center justify-start mb-10 md:justify-center cursor-pointer'
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >

          <div className="box border-2 w-14 h-8 border-black flex items-center justify-center">
            {/* Activate this div when selected */}
            <div className="inside bg-black w-8 h-4 transition-opacity duration-300" style={{opacity: transportType == id ? "1" : (hover ? "0.6" : "0")}}></div>
          </div>

          <div className="text ms-5 w-full block">
            <h3 className='uppercase text-xl'>{text}</h3>
          </div>

        </label>
        
        <input type="radio" name="transport-type" className='hidden no-collect' id={id} onChange={(e) => {handleChange (e)}} checked={transportType == id ? true : false} />
        
      </div>
    </div>
  )
}

TransportType.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleUpdateType: PropTypes.func.isRequired,
  transportType: PropTypes.string.isRequired,
}