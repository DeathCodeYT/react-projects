import AddTransection from "./components/AddTransection"
import Balance from "./components/Balance"
import Header from "./components/Header"
import TransictionList from "./components/History/TransictionList"
import IncomeKharcha from "./components/IncomeKharcha"

function App() {
  return (
    <>
     <Header/>
     <div className="text-2xl flex flex-col my-8 mx-auto w-[400px]">
      <Balance/>
      <IncomeKharcha/>
      <TransictionList/>
      <AddTransection/>
     </div>
    </>
  )
}

export default App
