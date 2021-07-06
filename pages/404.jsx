
import SEO from './../components/SEO/SEO'
import NotFound from './../components/NotFound/NotFound'
import Footer from './../components/Footer/Footer'

import globalStyle from './../styles/global.style.js'
import { lightTheme , Layout} from './../styles/theme.config.js'

const Error = () => {

    globalStyle()

    return (
      <Layout>
        <SEO title="404"/>
        <NotFound />
        <Footer />
      </Layout>
    )
}

export default Error
