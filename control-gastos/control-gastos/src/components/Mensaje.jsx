

// eslint-disable-next-line react/prop-types
const Mensaje = ({children, tipo}) => {
  return (
    <div className={`alerta ${tipo}`}>{children}</div>
  )
}

export default Mensaje