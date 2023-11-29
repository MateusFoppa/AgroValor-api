import { getBatch } from '../../services/api'
import { createContext, useContext, useEffect, useState } from 'react'
import { PropertyContext } from './PropertyContext'



export const BatchContext = createContext({})

// eslint-disable-next-line react/prop-types
export function BatchProvider({ children }) {
  const { propertyState } = useContext(PropertyContext)

  const [batch, setBatchs] = useState([])
  const [batchState, setBatchState] = useState(JSON.parse(localStorage.getItem('StateBatch')) || "")
  const [update, setUpdate] = useState("")

  useEffect(() => {
    (async () => {
      try {
        const BatchRequest = await getBatch(propertyState.id)

        const requests = [BatchRequest]

        const [
          { data: batchResponse },
        ] = await Promise.all(requests)

        setBatchs(batchResponse)

      } catch (error) {
        setBatchs([])
      }
    })()
  }, [propertyState, update])

  return (
    <BatchContext.Provider value={{ batch, batchState, setUpdate, setBatchState, propertyState }}>
      {children}
    </BatchContext.Provider>
  )
}
