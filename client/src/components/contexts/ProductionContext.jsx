import { getProduction } from '../../services/api'
import { createContext, useContext, useEffect, useState } from 'react'
import { BatchContext } from './BatchContext'



export const ProductionContext = createContext({})

// eslint-disable-next-line react/prop-types
export function ProductionProvider({ children }) {
  const [production, setProductions] = useState([])
  const { batchState } = useContext(BatchContext)
  const [update, setUpdate] = useState("")


  useEffect(() => {
    if (batchState) {
      (async () => {
        try {
          const ProductionRequest = await getProduction(batchState.id)

          const requests = [ProductionRequest]

          const [
            { data: ProductionResponse },
          ] = await Promise.all(requests)

          setProductions(ProductionResponse)

        } catch (error) {
          setProductions([])
        }
      })()
    }
  }, [batchState, update])

  return (
    <ProductionContext.Provider value={{ production, setUpdate }}>
      {children}
    </ProductionContext.Provider>
  )
}
