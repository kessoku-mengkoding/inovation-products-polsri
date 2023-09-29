import PropTypes from 'prop-types';


export function ButtonPrimary({children}) {
  return(
    <button className='primaryButton overflow-hidden relative bg-brand uppercase font-medium shadow-md text-xs text-white py-[12px] px-[24px] rounded-[4px] tracking-[2px]'>
      {children}
    </button>
  )
}

export function ButtonSecondary({children}) {
  return(
    <button className='bg-white uppercase shadow-md font-medium text-xs text-brand border border-brand py-[12px] px-[24px] rounded-[4px] tracking-[2px]'>
      {children}
    </button>
  )
}

export function ButtonSecondaryS({children}) {
  return(
    <button className='bg-white uppercase shadow-md font-medium text-xs text-brand border border-brand py-[6px] px-[12px] rounded-[4px] tracking-[2px]'>
      {children}
    </button>
  )
}

ButtonPrimary.propTypes = {
  children: PropTypes.node
}

ButtonSecondary.propTypes = {
  children: PropTypes.node
}

ButtonSecondaryS.propTypes = {
  children: PropTypes.node
}