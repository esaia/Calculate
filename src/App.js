import { useState } from "react";
import "./App.css";

function App() {
  const [price, setprice] = useState(1.1655);
  const [usdt, setusdt] = useState(955);

  return (
    <div className='w-full h-[100vh] bg-black flex justify-center items-center'>
      <div className='w-[90%]  md:w-[400px] p-5 m-5 bg-white flex justify-start flex-col gap-5 rounded-sm'>
        <h1 className='text-blue-900 text-[20px] font-bold text-center'>
          WMZ TO USDT
        </h1>

        <div className='flex flex-col justify-evenly gap-5 items-center  p-4'>
          <div className='flex flex-col gap-3 '>
            <div className='flex gap-5 items-center w-[150px]'>
              <h2 className='flex-1'>Price:</h2>
              <input
                type='number'
                className='w-[70px] p-2 border-[1px] rounded-sm  border-blue-900'
                placeholder='1.1690'
                onChange={(e) => setprice(e.target.value)}
                value={price}
              />
            </div>
            <div className='flex gap-5 items-center  w-[150px]'>
              <h2 className='flex-1'>USDT:</h2>
              <input
                type='number'
                className='w-[70px] p-2 border-[1px] rounded-sm  border-blue-900'
                onChange={(e) => setusdt(e.target.value)}
                value={usdt}
              />
            </div>
          </div>

          <h3 className='text-blue-900 font-bold text-[20px]'>
            {(usdt * price).toFixed(2)}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
