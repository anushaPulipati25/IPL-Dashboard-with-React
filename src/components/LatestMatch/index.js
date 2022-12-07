import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props

  const {
    competingTeam,
    competingTeamLogo,
    venue,
    date,
    result,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchDetails

  const mainEle = (
    <div className="matchContainer">
      <div className="teamLogoContainer">
        <div className="competingTeamContainer">
          <p className="competingTeamName">{competingTeam}</p>
          <p className="matchDate">{date}</p>
          <p className="matchDetails">{venue}</p>
          <p className="matchDetails">{result}</p>
        </div>
        <img
          alt={`latest match ${competingTeam}`}
          src={competingTeamLogo}
          className="competingTeamLogo matchDetails"
        />
      </div>

      <div className="inningsDetailsContainer">
        <p className="matchDetails">First Innings</p>
        <p className="matchDetails inningsDetails">{firstInnings}</p>
        <p className="matchDetails">Second Innings</p>
        <p className="matchDetails inningsDetails">{secondInnings}</p>
        <p className="matchDetails">Man Of The Match</p>
        <p className="matchDetails inningsDetails">{manOfTheMatch}</p>
        <p className="matchDetails">Umpires</p>
        <p className="matchDetails inningsDetails">{umpires}</p>
      </div>
    </div>
  )

  return mainEle
}

export default LatestMatch
