import "./eng.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "./Datatable"

const Eng = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable header = "Engineering Council Memberships"/>
      </div>
    </div>
  )
}

export default Eng