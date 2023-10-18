import { getPropertys } from '../../services/api'
import { createContext, useEffect, useState } from 'react'



export const PropertyContext = createContext({})

// eslint-disable-next-line react/prop-types
export function PropertyProvider({children}) {
  const [property, setPropertys] = useState([])
  const [propertyState, setPropertyState] = useState(JSON.parse(localStorage.getItem('StateProperty')) || "");



  useEffect(() => {
     (async () => {
      try {
        const PropertyRequest = await getPropertys()


        const requests = [PropertyRequest]

        console.log(requests)

        const [
          { data: propertyResponse },
        ] = await Promise.all(requests)

        setPropertys(propertyResponse)

      } catch (error) {
        console.error(error)
      }
    })()
  }, [])



  return (
    <PropertyContext.Provider value={{ property, propertyState, setPropertyState }}>
      {children}
    </PropertyContext.Provider>
  )
}
