import './index.css'

const MatchCard = props => {
  const {recentTeamMatch} = props

  const {
    competingTeam,
    competingTeamLogo,
    result,
    matchStatus,
  } = recentTeamMatch

  const rmStatusClassName =
    matchStatus === 'Won' ? 'rmWonStatus' : 'rmLostStatus'

  const mainEle = (
    <li className="matchCardContainer">
      <img
        src={competingTeamLogo}
        className="rmTeamLogo"
        alt={`competing team ${competingTeam}`}
      />
      <p className="rmTeam">{competingTeam}</p>
      <p className="rmResult">{result}</p>
      <p className={`rmStatus ${rmStatusClassName}`}>{matchStatus}</p>
    </li>
  )

  return mainEle
}

export default MatchCard
