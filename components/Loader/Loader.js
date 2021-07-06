import * as S from './Loader.style.js'

const Loader = ({style}) => {
  return(
    <S.Container style={style}>
      <S.Content>
        <S.Load>
          #
        </S.Load>
      </S.Content>
    </S.Container>
  )
}

export default Loader
