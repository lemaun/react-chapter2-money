import { Container } from "./styles"

export function TransactionsTable() {
  return (
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
            <td>Desenvolvimento de WebSite</td>
            <td className="deposit">R$ 9800,00</td>
            <td>Venda</td>
            <td>24/10/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 1100,00</td>
            <td>Casa</td>
            <td>20/10/2021</td>
          </tr>
          
        </tbody>
      </table>
    </Container>
  )
}