import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { destroyCookie, parseCookies } from "nookies";
import { AuthTokenError } from "../services/errors/AuthTokenError";
import decode from 'jwt-decode';

export function withSSRAuth<P>(fn: GetServerSideProps<P>) {
  return async (contexto: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(contexto)
    const token = cookies['nextauth.token'];

    if(!token) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        }
      }
    }

    const user = decode(token);
    console.log(user);
    
    try {
      return await fn(contexto);
      
    } catch (error) {
      if(error instanceof AuthTokenError) {
        destroyCookie(contexto, 'nextauth.token')
        destroyCookie(contexto, 'nextauth.refreshToken')

        return {
          redirect: {
            destination: '/',
            permanent: false,
          }
        }
      }
    }
  }
}