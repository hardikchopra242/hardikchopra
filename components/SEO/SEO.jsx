
import Head from 'next/head'

const SEO = ({title}) => {
  const description = "I am Hardik Chopra - a programmer and a web developer from NIT Jalandhar."
  const link = 'https://hardik.vercel.app/'
  const url = 'https://github.com/hardikchopra242/hardikchopra/blob/main/public/screenshot.png?raw=true'
  return(
    <>
    <Head>
    <title>Hardik Chopra - { title }</title>
    <meta property="og:title" content={title} />
    <meta property="twitter:title" content={title} />
    <meta name="description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={url} />
    <meta property="og:url" content={link} />
    <meta property="og:description" content={description} />
    <meta property="twitter:url" content={link} />
    <meta property="twitter:description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="theme-color" content="#1b1b1b" />

    <link rel="icon" href = '/favicon.png' />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Poppins&family=Raleway:wght@800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="animate.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css" />
    </Head>
    </>
  )
}

export default SEO
