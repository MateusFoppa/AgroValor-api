import { format } from "date-fns";


export default function formatData(data) {
  const currentDate = new Date(data);
  return format(currentDate, 'dd/MM/yyyy');
}
