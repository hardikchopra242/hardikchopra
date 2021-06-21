import Head from 'next/head'
import favicon from './../../public/favicon.png'

const SEO = ({title}) => {
  const description = "I am Hardik Chopra - a programmer and a developer from NIT Jalandhar."
  const link = '#'
  return(
    <>
    <Head>
      <title>{ title }</title>
      <meta property="og:title" content={title} />
      <meta property="twitter:title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={link} />
      <meta property="og:description" content={description} />
      <meta property="twitter:url" content={link} />
      <meta property="twitter:description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <meta name="theme-color" content="#1b1b1b" />

      <link rel="icon" href = {favicon} />
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Raleway:wght@800&family=Roboto&display=swap" rel="stylesheet"/>
      <link rel="stylesheet" href="animate.min.css" />
    </Head>
    </>
  )
}

export default SEO