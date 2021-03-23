import Summary from '../Summary';
import { TransactionsTable } from '../TansactionsTable';
import { Container } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  )
}

export default Dashboard;