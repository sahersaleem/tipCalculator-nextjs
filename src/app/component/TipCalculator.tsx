"use client";
import React from "react";
import { useState, ChangeEvent } from "react";


function TipCalculator() {
  const [billAmount, setBillAmount] = useState<number | null>(null);
  const [tipAmount, setTipAmount] = useState<number | null>(null);
  const [tipPercentage, setTipPercentage] = useState<number | null>(null);
  const [totalAmount, setTotalAmount] = useState<number | null>(null);

    const handleBillAMountChange = (e: ChangeEvent<HTMLInputElement>) => {
      setBillAmount(parseFloat(e.target.value));
    };

    const handleTipAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
      setTipAmount(parseFloat(e.target.value));
    };

    const calculateTip = () => {
      if (billAmount !== null && tipAmount !== null) {
        const tip = billAmount * (tipAmount/ 100);
       setTipPercentage(tip)
       setTotalAmount(billAmount+tip)

      }
    };

  return(
  <div className="w-[400px] h-[550px] bg-green-50 flex flex-col gap-7 sm:p-4 md:p-6 flex-shrink  justify-center items-center border-[2px] border-lime-700 rounded-xl sm:m-9">
<div className="flex gap-4 flex-col justify-center items-center">
<h1 className="text-green-700 text-center text-4xl font-bold">Tip Calculator.</h1>
<p className="text-green-500 font-thin text-lg text-center">Enter the bill amount and tip percentage to calculate the tip and total</p>
</div>
<div className="flex flex-col gap-3">
<label htmlFor="bill-amount" className="text-green-800">Bill Amount</label>
<input 
id="bill-amount"
type="number"
placeholder="Enter the bill amount"
value={billAmount!==null?billAmount:""}
onChange={handleBillAMountChange}
className="text-black w-full p-2 rounded-2xl "

/>
</div>
<div className="flex justify-center items-center">
<div className="flex flex-col gap-3">

<label htmlFor="tip-amount" className="text-green-800">Tip Percentage</label>
<input 
id="tip-amount"
type="number"
placeholder="Enter the tip amount"
value={tipAmount!==null?tipAmount:""}
onChange={handleTipAmountChange}
className="text-black w-full p-2 rounded-2xl"
/>

</div>
</div>
<div>
<button className="px-12 py-4 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200" onClick={calculateTip}>
  Calculate Tip
</button>
</div>

<div className="text-gray-950 flex justify-between items- flex-col gap-3">
<div className="flex justify-between gap-32 font-bold text-green-700"> Tip Amount:<span>{tipPercentage?.toFixed(2)}</span></div>
   
   <div className="flex justify-between gap-32 font-bold text-green-700"> Total Amount:<span>{totalAmount?.toFixed(2)}</span></div>
</div>

  </div>)
}

export default TipCalculator;
