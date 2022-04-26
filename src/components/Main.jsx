import React from "react";
import "../index.css";
import demo from "../imgs/demo.png";
import { MdAccountBalanceWallet, MdImportExport } from "react-icons/md";
import SingleExpense from "./SingleExpense";

function Main() {
  let year = new Date().getFullYear();
  return (
    <section className=" md:grow bg-dark-secondary">
      {/* NAVIGATION BAR */}
      <nav className="h-[10vh] px-8 flex items-center justify-between">
        <h1 className="text-2xl text-primary-orange font-bold">
          Expense Tracker
        </h1>
        <img
          className="ring-2 cursor-pointer ring-gray-400 inline h-[2.5rem] rounded-full"
          src={demo}
          alt=""
        />
      </nav>

      {/* MAIN SECTION */}
      <main className="h-[85vh]">
        <form className=" h-[30%] flex flex-col items-center justify-center">
          <div className="mt-10 mb-5">
            <input
              className="ring ring-dark-main ring-offset-3 mr-5 px-4 py-2 rounded-md focus:ring-primary-orange outline-none"
              type="text"
              name=""
              placeholder="Enter Your Expense"
            />
            <input
              className="ring ring-dark-main ring-offset-3 mr-5 px-4 py-2 rounded-md focus:ring-primary-orange outline-none"
              type="number"
              name=""
              placeholder="Enter Your Amount"
            />
          </div>
          <button className="ring ring-dark-main bg-primary-orange text-white px-6 py-2 rounded-md hover:size-3">
            Add Expense
          </button>
        </form>

        {/* BOTTOM SECTION */}
        <section className="h-[70%] flex items-start justify-between xs:flex-col sm:flex-col md:flex-row  gap-10 px-20 py-10">
          {/* LEFT SECTION */}
          <div className="bg-dark-main p-10 w-[50%] rounded-3xl">
            <p className="text-3xl">
              <span>
                <MdAccountBalanceWallet className="text-primary-orange mb-2" />
              </span>
              <span className="font-bold text-white">124502</span>
            </p>
          </div>

          {/* RIGHT SECTION */}
          <div className=" bg-dark-main w-[50%] relative  rounded-3xl">
            <h1 className="text-center text-2xl text-primary-orange font-bold py-2">
              Spent List
            </h1>
            <ul className="right-section p-6 max-h-64 overflow-scroll">
              <SingleExpense expenseName="Netflix" amount="200" />
              <SingleExpense expenseName="Electricity" amount="25400" />
              <SingleExpense expenseName="Water Bill" amount="1500" />
              <SingleExpense expenseName="Netflix" amount="200" />
              <SingleExpense expenseName="Electricity" amount="25400" />
              <SingleExpense expenseName="Water Bill" amount="1500" />
              <SingleExpense expenseName="Netflix" amount="200" />
              <SingleExpense expenseName="Electricity" amount="25400" />
              <SingleExpense expenseName="Water Bill" amount="1500" />
              <SingleExpense expenseName="Netflix" amount="200" />
              <SingleExpense expenseName="Electricity" amount="25400" />
              <SingleExpense expenseName="Water Bill" amount="1500" />
              <SingleExpense expenseName="Netflix" amount="200" />
              <SingleExpense expenseName="Electricity" amount="25400" />
              <SingleExpense expenseName="Water Bill" amount="1500" />
            </ul>
            <p className=" text-center shadow-sm absolute left-64 bottom-0 bg-dark-main rounded">
              <MdImportExport className="text-center text-white text-3xl" />
            </p>
          </div>
        </section>
      </main>
      <footer className="h-[5vh] text-center font-thin ">
        ©Copyright {year}
      </footer>
    </section>
  );
}

export default Main;
