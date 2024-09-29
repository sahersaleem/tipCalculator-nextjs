import Image from "next/image";
import TipCalculator from "./component/TipCalculator";

export default function Home() {
  return (
  <div className="w-full h-screen bg-slate-50 flex items-center justify-center flex-shrink">


    <TipCalculator/>
  </div>
  );
}
