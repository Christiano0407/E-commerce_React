//**? === PropTypes ===  */
import PropTypes from 'prop-types'
//** === Layout => Children ===  */
export function Layout({ children }) {
  return <div className="flex flex-col items-center mt-20">{children}</div>
}

//**? == */
Layout.propTypes = {
  children: PropTypes.string.isRequired,
}
