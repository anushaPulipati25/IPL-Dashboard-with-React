import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  const mainEle = (
    <li className="teamContainer">
      <Link to={`/team-matches/${id}`} className="listTeamContainer">
        <img src={teamImageUrl} alt={name} className="teamLogo" />
        <p className="teamName">{name}</p>
      </Link>
    </li>
  )

  return mainEle
}

export default TeamCard
