import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    latestMatchDetails: {},
    recentMatches: [],
    teamBannerUrl: '',
    isLoader: true,
  }

  updateTeamDetails = teamData => {
    const teamDataDetails = {
      latestMatchDetails: teamData.latest_match_details,
      recentMatches: teamData.recent_matches,
      teamBannerUrl: teamData.team_banner_url,
    }
    return teamDataDetails
  }

  updateMatchDetails = matchDetails => {
    const updatedDetails = {
      umpires: matchDetails.umpires,
      result: matchDetails.result,
      manOfTheMatch: matchDetails.man_of_the_match,
      id: matchDetails.id,
      date: matchDetails.date,
      venue: matchDetails.venue,
      competingTeam: matchDetails.competing_team,
      competingTeamLogo: matchDetails.competing_team_logo,
      firstInnings: matchDetails.first_innings,
      secondInnings: matchDetails.second_innings,
      matchStatus: matchDetails.match_status,
    }
    return updatedDetails
  }

  componentDidMount = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.getTeamMatchesDetails(id)
  }

  getTeam = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  getTeamMatchesDetails = async id => {
    const {isLoader} = this.state
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const matchDetailsData = await response.json()
    console.log(typeof matchDetailsData)

    const updatedTeamDetails = this.updateTeamDetails(matchDetailsData)

    const updatedLatestMatchDetails = this.updateMatchDetails(
      updatedTeamDetails.latestMatchDetails,
    )

    const updatedRecentMatchesDetails = updatedTeamDetails.recentMatches.map(
      eachMatch => this.updateMatchDetails(eachMatch),
    )

    this.setState({
      latestMatchDetails: updatedLatestMatchDetails,
      recentMatches: updatedRecentMatchesDetails,
      teamBannerUrl: updatedTeamDetails.teamBannerUrl,
      isLoader: !isLoader,
    })
  }

  render() {
    const {
      latestMatchDetails,
      recentMatches,
      teamBannerUrl,
      isLoader,
    } = this.state

    const teamBgColor = this.getTeam()

    const mainEle = (
      <div className={`teamMatchesBgContainer ${teamBgColor}`}>
        <img alt="team banner" src={teamBannerUrl} className="teamBannerImg" />

        <h1 className="latestMatchHeader">Latest Matches</h1>
        <LatestMatch latestMatchDetails={latestMatchDetails} />

        {isLoader ? (
          <div className="loader">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <ul className="matchCardsContainer">
            {recentMatches.map(eachMatch => (
              <MatchCard key={eachMatch.id} recentTeamMatch={eachMatch} />
            ))}
          </ul>
        )}
      </div>
    )

    return mainEle
  }
}

export default TeamMatches
