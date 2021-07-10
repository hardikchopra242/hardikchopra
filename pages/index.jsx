import {useState, useEffect} from 'react'

import Loader from './../components/Loader/Loader'
import SEO from './../components/SEO/SEO'
import Navigation from './../components/Navigation/Navigation'
import Introduction from './../components/Introduction/Introduction'
import About from './../components/About/About'
import Projects from './../components/Projects/Projects'
import Skills from './../components/Skills/Skills'
import Contact from './../components/Contact/Contact'
import Footer from './../components/Footer/Footer'

import globalStyle from './../styles/global.style.js'
import { lightTheme , Layout} from './../styles/theme.config.js'

const Home = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },1000);
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
        <Skills />
        <Projects/>
        <Contact/>
        <Footer/>
      </Layout >
    </>
  )
}

export default Home
