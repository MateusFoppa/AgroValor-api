import { getPropertys } from '../../services/api'
import { createContext, useEffect, useState } from 'react'



export const PropertyContext = createContext({})

// eslint-disable-next-line react/prop-types
export function PropertyProvider({ children }) {
  const [property, setPropertys] = useState([])
  const [propertyState, setPropertyState] = useState(JSON.parse(localStorage.getItem('StateProperty')) || "");
  const [update, setUpdate] = useState("")



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
        setPropertys([])
      }
    })()
  }, [setPropertys, update])



  return (
    <PropertyContext.Provider value={{ property, propertyState, setUpdate, setPropertyState }}>
      {children}
    </PropertyContext.Provider>
  )
}
