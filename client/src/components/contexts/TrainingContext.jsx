// import { getPropertys } from '../../services/api'
// import { createContext, useEffect, useState } from 'react'



// export const PropertyContext = createContext({})

// export function PropertyProvider(children) {
//   const [property, setPropertys] = useState([])


//   useEffect(() => {
//      (async () => {
//       try {
//         const PropertyRequest = await getPropertys()


//         const requests = [PropertyRequest]

//         console.log(requests)

//         const [
//           { data: propertyResponse },
//         ] = await Promise.all(requests)

//         setPropertys(propertyResponse)

//       } catch (error) {
//         console.error(error)
//       }
//     })()
//   }, [])



//   return (
//     <PropertyContext.Provider value={{ property }}>
//       {children}
//     </PropertyContext.Provider>
//   )
// }
