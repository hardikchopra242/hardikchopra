import * as S from './NotFound.style.js'

const NotFound = () =>{
  return(
    <S.Container>
      <S.Content>
        <S.Header>Error 404 ! </S.Header>
        <S.Header>Not Found</S.Header>
      </S.Content>
      <S.Para>
        We are unable to find this page 😕<br />
        Go to <S.Link href="/">Home Page </S.Link>
      </S.Para>
    </S.Container>
  )
}

export default NotFound
