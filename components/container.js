export default function Container({ children, ...props }) {
  return (
    <div className={`${props.cname ? props.cname : 'container mx-auto px-5'}`}>
      {children}
    </div>
  )
}
