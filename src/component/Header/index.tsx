import logoImg from '../../assets/edu.finance.svg'
import { Container, Content } from './styles'

export function Header(){
  return(
    <Container>
      <Content>
        <img src={logoImg} alt="edu money" height='60px' width="172px" />
        <button type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  )
}