/* eslint-disable react/prop-types */
import { ExpenseCategory, IncomeCategory } from "../utils/IncomeCategory";

export default function SubmissionForm({
  addData,
  editableData,
  inputData,
  setInputData,
  isIncome,
  setIsIncome
}) {
  const categoryList = isIncome ? IncomeCategory : ExpenseCategory;
  function handleInput(e) {
    const name = e.target.name;
    let value = e.target.value;

    setInputData({
      ...inputData,
      name: isIncome ? "Income" : "Expense",
      [name]: value
    });
  }

  function handleFormData(e) {
    e.preventDefault();
    setInputData({ ...inputData });
    addData(inputData, editableData?.name);
    setInputData({
      id: crypto.randomUUID(),
      category: "",
      amount: "",
      date: "2024-10-23"
    });
  }
  return (
    <>
      <h2 className='text-3xl font-semibold leading-7 text-gray-800 text-center'>
        Expense Tracker
      </h2>

      <form>
        <div className='flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 mt-6'>
          <div
            onClick={() => setIsIncome(!isIncome)}
            className={`cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 ${
              isIncome || "active"
            }`}
          >
            Expense
          </div>
          <div
            onClick={() => setIsIncome(!isIncome)}
            className={`cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 ${
              isIncome && "active"
            }`}
          >
            Income
          </div>
        </div>

        <div className='mt-3'>
          <label
            htmlFor='category'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Category
          </label>
          <div className='mt-2'>
            <select
              onChange={handleInput}
              value={inputData.category}
              id='category'
              name='category'
              autoComplete='category-name'
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6'
            >
              {categoryList.map((item) => (
                <option key={item.id}>{item.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className='mt-3'>
          <label
            htmlFor='amount'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Amount
          </label>
          <div className='mt-2'>
            <input
              onChange={handleInput}
              value={inputData.amount}
              type='number'
              name='amount'
              id='amount'
              autoComplete='off'
              placeholder='12931'
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>

        <div className='mt-3'>
          <label
            htmlFor='date'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Date
          </label>
          <div className='mt-2'>
            <input
              onChange={handleInput}
              value={inputData.date}
              type='date'
              name='date'
              id='date'
              autoComplete='off'
              placeholder='12931'
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>

        <button
          onClick={handleFormData}
          type='submit'
          className='mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full'
        >
          {editableData ? "Update" : "Save"}
        </button>
      </form>
    </>
  );
}
