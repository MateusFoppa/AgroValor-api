import { ExpenseProvider } from "../../../components/contexts/ExpenseContext";
import SideBar from "../../../components/SideBar/SideBar";
import TableExpenseList from "../../../components/Expense/TableExpenseList";

export default function Expences() {
  return (
    <div className="bg-slate-600 flex">
      <div className="h-screen">
        <SideBar />
      </div>
      <div className="flex h-screen mx-auto">
        <div className="flex h-full w-full items-center justify-center text-white">
          <ExpenseProvider>
            <TableExpenseList></TableExpenseList>
          </ExpenseProvider>
        </div>
      </div>
    </div>
  )
}
