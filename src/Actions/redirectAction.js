import { routes } from "../Containers/Router";
import { push } from "connected-react-router";


export const redirecttoDashBoard = () => async(dispatch) => {
  try {
      dispatch(push("/"))
  } catch(err) {
      console.log(err)
      alert("Ocorreu um erro inesperado. Tente novamente")
  }
}

export const redirecttoClients = () => async(dispatch) => {
  try {
      dispatch(push(routes.clientes))
  } catch {
      alert("Ocorreu um erro inesperado. Tente novamente")
  }
}

export const redirecttoAddClients = () => async(dispatch) => {
  try {
      dispatch(push(routes.add))
  } catch {
      alert("Ocorreu um erro inesperado. Tente novamente")
  }
}