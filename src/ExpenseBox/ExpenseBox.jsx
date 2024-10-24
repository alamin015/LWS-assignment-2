import { useState } from "react";
import RightColumn from "./RightColumn";
import SubmissionForm from "./SubmissionForm";
const defaultData = {
  id: crypto.randomUUID(),
  name: "Income",
  category: "Salary",
  amount: 2000,
  date: "2024-10-23"
};

export default function ExpenseBox() {
  const [editableData, setEditableData] = useState(null);
  const [incomeList, setIncomeList] = useState(null);
  const [expenseList, setExpenseList] = useState(null);
  const [isIncome, setIsIncome] = useState(false);
  const [data, setData] = useState([defaultData]);
  const [inputData, setInputData] = useState(
    editableData || {
      id: crypto.randomUUID(),
      category: "",
      amount: "",
      date: "2024-10-23"
    }
  );

  function addData(newData, isEdit) {
    if (!isEdit) {
      setData((item) => [...item, newData]);
      myFunc(data);
    } else {
      setData(
        data.map((item) => {
          if (item.id === newData.id) {
            return newData;
          }
          return item;
        })
      );

      setEditableData(null);
    }
  }

  // delete item
  function deleteData(incomingItem) {
    const newData = data.filter((item) => item.id !== incomingItem.id);
    setData(newData);
    sortData(incomingItem);
    sortExpenseData(incomingItem);
  }

  function editData(newData) {
    if (newData.name === "Income") {
      setIsIncome(true);
    } else {
      setIsIncome(false);
    }

    setEditableData(newData);
    setInputData(newData);
  }

  function myFunc(datas) {
    console.log(datas);
  }

  // sorting
  function sortData(value) {
    if (value && value.name === "Income") {
      const Try = incomeList.filter((item) => item.id !== value.id);
      setIncomeList(Try);
    }

    let incomeArray = data.filter((item) => item.name === "Income");
    if (value === 1) {
      const newData = incomeArray.sort((a, b) => a.amount - b.amount);
      setIncomeList(newData);
    } else if (value === 2) {
      const newData = incomeArray.sort((a, b) => b.amount - a.amount);
      setIncomeList(newData);
    }
  }

  function sortExpenseData(value) {
    if (value && value.name === "Expense") {
      const Try = expenseList.filter((item) => item.id !== value.id);
      setExpenseList(Try);
    }

    let ExpenseArray = data.filter((item) => item.name === "Expense");
    if (value === 1) {
      const newData = ExpenseArray.sort((a, b) => a.amount - b.amount);
      setExpenseList(newData);
    } else if (value === 2) {
      const newData = ExpenseArray.sort((a, b) => b.amount - a.amount);
      setExpenseList(newData);
    }
  }

  return (
    <main className='relative mx-auto mt-10 w-full max-w-7xl'>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {/* Submission form  */}
        <div className='p-6 py-8 bg-[#F9FAFB] border rounded-md'>
          <SubmissionForm
            addData={addData}
            editableData={editableData}
            inputData={inputData}
            setInputData={setInputData}
            setIsIncome={setIsIncome}
            isIncome={isIncome}
          />
        </div>
        <RightColumn
          data={data}
          incomeList={incomeList}
          deleteData={deleteData}
          editData={editData}
          sortData={sortData}
          sortExpenseData={sortExpenseData}
          expenseList={expenseList}
        />
      </section>
    </main>
  );
}
