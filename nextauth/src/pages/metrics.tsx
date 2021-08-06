
import { setupAPIClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth";


export default function Metrics() {



  return (
    <>
      <h1>Metrics </h1>

    </>


  )
}

export const getServerSideProps = withSSRAuth(async (contexto) => {
  const apiClient = setupAPIClient(contexto);
  const response = await apiClient.get('/me');

    // console.log(response.data)
    
  return {
    props: {}
  } 
});