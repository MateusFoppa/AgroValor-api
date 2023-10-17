import { getBatch } from '../../services/api'
import { createContext, useContext, useEffect, useState } from 'react'
import { PropertyContext } from './PropertyContext'



export const BatchContext = createContext({})

// eslint-disable-next-line react/prop-types
export function BatchProvider({children}) {
  const {propertyState} = useContext(PropertyContext)


  const [batch, setBatchs] = useState([])
  const [batchState, setBatchState] = useState(JSON.parse(localStorage.getItem('StateBatch')) || "")
  useEffect(() => {
    (async () => {
     try {
       const BatchRequest = await getBatch(propertyState.id)

       console.log(BatchRequest)

       const requests = [BatchRequest]

       console.log(requests)

       const [
         { data: batchResponse },
       ] = await Promise.all(requests)

       setBatchs(batchResponse)

     } catch (error) {
       console.error(error)
     }
   })()
 }, [])

 console.log(batch)



  return (
    <BatchContext.Provider value={{ batch, batchState, setBatchState, propertyState }}>
      {children}
    </BatchContext.Provider>
  )
}
