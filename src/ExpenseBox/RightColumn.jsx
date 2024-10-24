/* eslint-disable react/prop-types */
import Expense from "./Expense";
import Income from "./Income";
import TotalBalance from "./TotalBalance";

export default function RightColumn({
  data,
  deleteData,
  incomeList,
  editData,
  sortData,
  sortExpenseData,
  expenseList
}) {
  // const [incomeSort, setIncomeSort] = useState(null);
  let incomeArray = data.filter((item) => item.name === "Income");
  let expenseArray = data.filter((item) => item.name === "Expense");

  return (
    <>
      <div className='lg:col-span-2'>
        <TotalBalance data={data} />
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8'>
          <Income
            incomeArray={incomeArray}
            deleteData={deleteData}
            editData={editData}
            sortData={sortData}
            incomeList={incomeList}
          />
          <Expense
            expenseArray={expenseArray}
            deleteData={deleteData}
            editData={editData}
            sortExpenseData={sortExpenseData}
            expenseList={expenseList}
          />
        </div>
      </div>
    </>
  );
}
