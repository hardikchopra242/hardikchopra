import globalStyle from './../../styles/global.style.js'
import {lightTheme, Layout } from './../../styles/theme.config.js'


const Wrapper = (props) => {
globalStyle()

  return(
    <div >
      {props.children}
    </div>
  )
}

export default Wrapper
