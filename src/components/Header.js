import "./Header.css";
import { useState,useContext } from "react";
import AddTeamMember from "./AddTeamMember";
import { DataContext } from "./ContextProvider";

const Header = () => {

    const [open,setOpen] = useState(false);
    const {data,setData} = useContext(DataContext);

    const addTeamMember = (teamData,setTeamData,initState) => {
       //console.log(teamData);
       const newData = [...data,{...teamData}];
       setData(newData);
       localStorage.setItem("DATA", JSON.stringify(newData));
       setTeamData(initState);
       setOpen(false);
    }
    return (
        <div className= "header">
            <div className="title">XYZ Ltd</div>
            <div className= "add">
            {/* <button className= "addTeam">ADD TEAM</button> */}
            <button className= "addMember" onClick={() => setOpen(true)}>ADD TEAM MEMBER</button>
            <AddTeamMember open={open} handleClose={() => setOpen(false)} addTeamMember={addTeamMember} />
            </div>
        </div>
    )
}

export default Header;