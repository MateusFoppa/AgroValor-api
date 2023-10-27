import { getProduction } from '../../services/api'
import { createContext, useContext, useEffect, useState } from 'react'
import { BatchContext } from './BatchContext'



export const ProductionContext = createContext({})

// eslint-disable-next-line react/prop-types
export function ProductionProvider({ children }) {
  const [production, setProductions] = useState([])
  const { batchState } = useContext(BatchContext)



  useEffect(() => {
    if (batchState) {
      (async () => {
        try {
          const ProductionRequest = await getProduction(batchState.id)

          const requests = [ProductionRequest]

          console.log(requests)

          const [
            { data: ProductionResponse },
          ] = await Promise.all(requests)

          setProductions(ProductionResponse)

        } catch (error) {
          console.error(error)
        }
      })()
    }
  }, [batchState])

  return (
    <ProductionContext.Provider value={{ production }}>
      {children}
    </ProductionContext.Provider>
  )
}
