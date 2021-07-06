import {useState, useEffect} from 'react'

import Loader from './../components/Loader/Loader.js'
import SEO from './../components/SEO/SEO.js'
import Navigation from './../components/Navigation/Navigation.js'
import Introduction from './../components/Introduction/Introduction.js'
import About from './../components/About/About.js'
import Contact from './../components/Contact/Contact.js'
import Footer from './../components/Footer/Footer.js'

import globalStyle from './../styles/global.style.js'
import { lightTheme , Layout} from './../styles/theme.config.js'

const Home = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },0);
  }, []);

  globalStyle()

  return(
    <>
      <Layout>
        <Loader style={loading ? {} : { opacity: 0, visibility: 'hidden', display : 'none' }} />
        <SEO title = "Home"/>
        <Navigation/>
        <Introduction/>
        <About/>
        <Contact/>
        <Footer/>
      </Layout >
    </>
  )
}

export default Home
