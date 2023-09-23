import React from "react";

const booking = () => {
  return (
    <div id="booking" className="max-w-[1140px] m-auto w-full p-4">
       <h2 className='text-center text-gray-600 p-4'>Booking</h2>
      <form className="lg:flex lg:justify-between w-full item-center">
        <div  className="flex flex-col py-2 my-2">
          <label>Destination</label>
          <select className="lg:w-[300px] md:w-full border rounded-md p-2">
            <option>maldives</option>
            <option>dubai</option>
            <option>switzerland</option>
            <option>london</option>
          </select>
        </div>
        <div  className="flex w-full">
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label>check-in</label>
            <input  className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label>check-out</label>
            <input className="border rounded-md p-2"  type="date" />
          </div>
        </div>
        <div className="flex flex-col my-2 p-2 w-full">
            <label>Search</label>
            <button className="w-full">Rates & Availablities</button>
        </div>
      </form>
    </div>
  );
};

export default booking;
