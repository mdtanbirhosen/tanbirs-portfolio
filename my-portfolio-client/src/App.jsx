import { Outlet } from "react-router-dom"


function App() {

  return (
    <div className="bg-black text-slate-300    overflow-y-scroll">
      <Outlet></Outlet>
      
    </div>
  )
}

export default App
