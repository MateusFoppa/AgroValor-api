import { ExpenseProvider } from "../../../components/contexts/ExpenseContext";
import SideBar from "../../../components/SideBar/SideBar";
import TableExpenseList from "../../../components/Expense/TableExpenseList";

export default function Expences() {
  return (
    <div className="bg-slate-600 flex max-w-full h-screen overflow-hidden">
      <div className="h-screen block">
        <SideBar />
      </div>
      <div className="flex-1 justify-center items-center h-screen overflow-y-auto">
        <ExpenseProvider>
          <TableExpenseList></TableExpenseList>
        </ExpenseProvider>
      </div>
    </div>
  )
}
