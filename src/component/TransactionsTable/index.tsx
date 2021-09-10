
import { Container } from "./styles"

export function TransactionsTable(){
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Criação de logotipos</td>
            <td className="deposit"> 41.000 kz</td>
            <td>Design</td>
            <td>1/09/2021</td>
          </tr>

          <tr>
            <td>Pagar internet</td>
            <td className="withdraw">21.000 kz</td>
            <td>Internet</td>
            <td>1/09/2021</td>
          </tr>

          <tr>
            <td>Criação de logotipos</td>
            <td className="deposit"> 41.000 kz</td>
            <td>Design</td>
            <td>1/09/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}