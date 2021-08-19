import { useContext, useEffect } from "react"
import { Can } from "../components/Can";
import { AuthContext, signOut } from "../contexts/AuthContext";
import { useCan } from "../hooks/useCan"; 
import { setupAPIClient } from "../services/api";
import { api } from "../services/apiClient";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Dashboard() {

  const { user } = useContext(AuthContext);

  const userCanSeeMetrics = useCan({
    permissions: ['metrics.list']
  })

  useEffect(() => {
    api.get('/me')
    .then(response => console.log(response))
    .catch(err => console.log(err))
  }, [])

  return (
    <>
      <h1>Dashboard {user?.email}</h1>
      {userCanSeeMetrics && (
        <div>Métricas</div>
      )}

      <Can roles={['editor', 'administrator']}>
        <div>Métricas 2</div>
      </Can>

      <button onClick={signOut}>Sair</button>

    </>


  )
}

export const getServerSideProps = withSSRAuth(async (contexto) => {
  const apiClient = setupAPIClient(contexto);
  const response = await apiClient.get('/me');

    console.log(response.data)

  return {
    props: {}
  }
})