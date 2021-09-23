import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Circle from "../UI/Loader/Circle";

const WeatherSearch = ({ location, onChange, onSubmit, isLoading }) => {
  return (
    <form className="flex items-end" id="wheatherForm" onSubmit={onSubmit}>
      <div className="flex-grow px-10">
        <input
          type="text"
          value={location}
          onChange={onChange}
          placeholder="Another Location"
          className="bg-transparent focus:outline-none border-b-2 w-full py-2 text-xl text-white placeholder-gray-400 border-gray-400 focus:border-white"
        />
      </div>
      <button
        className={`flex-none h-16 w-16 bg-primary hover:bg-secondary text-white flex items-center justify-center ${
          isLoading ? "cursor-wait" : ""
        } disabled:bg-gray-300 disabled:bg-opacity-20`}
        type="submit"
        form="wheatherForm"
        disabled={!location && !isLoading}
      >
        {!isLoading ? <AiOutlineSearch className="text-2xl" /> : <Circle />}
      </button>
    </form>
  );
};

export default WeatherSearch;
