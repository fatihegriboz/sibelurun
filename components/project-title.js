import React from 'react'
import cn from 'classnames'

function ProjectTitle({ children, className, ...props }) {
  return (
    <p
      className={cn('text-sm font-bold text-highlight mt-10', className)}
      {...props}
    >
      {children}
    </p>
  )
}

export default ProjectTitle
