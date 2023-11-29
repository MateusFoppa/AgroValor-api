import { getExpense } from '../../services/api'
import { createContext, useContext, useEffect, useState } from 'react'
import { BatchContext } from './BatchContext'



export const ExpenseContext = createContext({})

// eslint-disable-next-line react/prop-types
export function ExpenseProvider({ children }) {
  const [expense, setExpenses] = useState([])
  const { batchState } = useContext(BatchContext)

  const [update, setUpdate] = useState("")



  useEffect(() => {
    if (batchState) {
      (async () => {
        try {
          const ExpenseRequest = await getExpense(batchState.id)

          const requests = [ExpenseRequest]

          const [
            { data: ExpenseResponse },
          ] = await Promise.all(requests)

          setExpenses(ExpenseResponse)

        } catch (error) {
          console.error(error)
          setExpenses([])
        }
      })()
    }
  }, [batchState, update])

  return (
    <ExpenseContext.Provider value={{ expense, setUpdate }}>
      {children}
    </ExpenseContext.Provider>
  )
}
