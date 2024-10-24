/* eslint-disable react/prop-types */
import SortSvg from "../Components/FilterSvg";
export default function Sorting({ setisOpenSort, isOpenSort, sortData }) {
  return (
    <div className='relative inline-block text-left'>
      <div>
        <button
          type='button'
          onClick={() => setisOpenSort(!isOpenSort)}
          className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
          id='menu-button'
          aria-expanded='true'
          aria-haspopup='true'
        >
          <SortSvg />
        </button>
      </div>

      <div
        className={`${
          isOpenSort && "hidden"
        } absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        role='menu'
        id='dropDown'
        aria-orientation='vertical'
        aria-labelledby='menu-button'
        tabIndex='-1'
      >
        <div className='py-1' role='none'>
          <a
            href='#'
            onClick={(e) => {
              e.preventDefault();
              sortData(1);
            }}
            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all'
            role='menuitem'
            tabIndex='-1'
            id='menu-item-0'
          >
            Low to High
          </a>
          <a
            href='#'
            onClick={(e) => {
              e.preventDefault();
              sortData(2);
            }}
            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all'
            role='menuitem'
            tabIndex='-1'
            id='menu-item-0'
          >
            High to Low
          </a>
        </div>
      </div>
    </div>
  );
}
