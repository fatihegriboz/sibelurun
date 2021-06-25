import React from 'react'
import cn from 'classnames'

function PageSubTitle({ children, className, ...props }) {
  return (
    <p
      className={cn('text-xl font-serif mb-10 md:text-2xl', className)}
      {...props}
    >
      {children}
    </p>
  )
}

export default PageSubTitle
