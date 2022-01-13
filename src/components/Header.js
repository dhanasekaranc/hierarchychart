import "./Header.css";

const Header = () => {
    return (
        <div className= "header">
            <div className="title">XYZ Ltd</div>
            <div className= "add">
            <button className= "addTeam">ADD TEAM</button>
            <button className= "addMember">ADD TEAM MEMBER</button>
            </div>
        </div>
    )
}

export default Header;