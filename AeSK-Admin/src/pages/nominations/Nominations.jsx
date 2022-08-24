import "./nominations.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "./Datatable"

const Nominations = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable header = "Award Nominations"/>
      </div>
    </div>
  )
}

export default Nominations