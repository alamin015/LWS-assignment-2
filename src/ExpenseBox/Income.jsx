/* eslint-disable react/prop-types */

import { useState } from "react";

import IncomeSvg from "../Components/IncomeSvg";

import HandleDropDown from "../utils/HandleDropDown";
import { Options } from "../utils/Options";
import Filtering from "./Filtering";
import Sorting from "./Sorting";

export default function Income({
  incomeArray,
  deleteData,
  editData,
  sortData,
  incomeList
}) {
  const [isOpenFilter, setisOpenFilter] = useState(true);
  const [isOpenSort, setisOpenSort] = useState(true);

  const result = incomeList ? incomeList : incomeArray;

  HandleDropDown("menu-button", "dropDown", setisOpenSort);
  HandleDropDown("filter-button", "filter-dropdown", setisOpenFilter);

  return (
    <div className='border rounded-md relative'>
      {/* <!-- Header --> */}
      <div className='flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md'>
        <div className='flex items-center gap-2'>
          {/* <!-- Icon --> */}
          <div className='h-10 w-10 bg-teal-600 text-white rounded-md text-center object-center place-content-center text-base'>
            <IncomeSvg />
          </div>
          {/* <!-- Text --> */}
          <div>
            <h3 className='text-xl font-semibold leading-7 text-gray-800'>
              Income
            </h3>
          </div>
        </div>
        <div>
          {/* <!-- Sorting --> */}
          <Sorting
            isOpenSort={isOpenSort}
            sortData={sortData}
            setisOpenSort={setisOpenSort}
          />

          {/* <!-- Filtering --> */}
          <Filtering
            setisOpenFilter={setisOpenFilter}
            isOpenFilter={isOpenFilter}
          />
        </div>
      </div>

      <div className='p-4 divide-y'>
        {/* row  */}
        {result.map((item) => (
          <div
            key={item.id}
            className='flex justify-between items-center py-2 relative group cursor-pointer'
          >
            <div>
              <h3 className='text-base font-medium leading-7 text-gray-600'>
                {item.category}
              </h3>
              <p className='text-xs text-gray-600'>
                {new Date(item.date).toLocaleDateString("en-GB", Options)}
              </p>
            </div>
            <div className='flex items-center gap-2'>
              <p className='text-base font-semibold text-gray-600 transition-all group-hover:-translate-x-14'>
                BDT {item.amount}
              </p>

              {/* <!-- 3 Dots --> */}
              <div className='translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2 transition-all'>
                <button
                  className='hover:text-teal-600'
                  role='button'
                  title='Edit Button'
                  onClick={() => editData(item)}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='18'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                    <path d='M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4' />
                    <path d='M13.5 6.5l4 4' />
                  </svg>
                </button>

                <button
                  className='hover:text-red-600'
                  role='button'
                  onClick={() => deleteData(item)}
                  title='Delete'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='18'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                    <path d='M4 7l16 0' />
                    <path d='M10 11l0 6' />
                    <path d='M14 11l0 6' />
                    <path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12' />
                    <path d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3' />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
