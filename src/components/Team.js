import EmployeeCard from "./EmployeeCard";
import { useState } from "react";

const Team = ({ teams, empData }) => {
    //console.log(empData);

    const [showTeams, setShowTeams] = useState(false);

    return (
        <div className="teams">
            {teams.children && teams.children.map(team => {
                return (
                    <div key={team.id}>
                        <div className="teamName" onClick={() => setShowTeams(!showTeams)}>{team}</div>
                        {showTeams &&
                            <div>
                                {empData.filter(mem => (mem.team === team && mem.position === "Team Lead"))
                                .map(mem =>

                                        <EmployeeCard emp={mem} key={mem.id} />

                                    )}
                                {empData.filter(mem => (mem.team === team && mem.position === "Team Member"))
                                .map(mem =>

                                        <EmployeeCard emp={mem} key={mem.id} />

                                    )}
                            </div>
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default Team;