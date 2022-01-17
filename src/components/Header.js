import "./Header.css";
import { useState } from "react";

const Header = () => {

    const [open,setOpen] = useState(false);

    const addTeamMember = () => {

    }
    return (
        <div className= "header">
            <div className="title">XYZ Ltd</div>
            <div className= "add">
            <button className= "addTeam">ADD TEAM</button>
            <button className= "addMember" onClick={() => addTeamMember()}>ADD TEAM MEMBER</button>
            </div>
        </div>
    )
}

export default Header;