import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    teamsList: [],
    isLoader: true,
  }

  updateTeamsListData = eachTeam => {
    const teamDetails = {
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }
    return teamDetails
  }

  componentDidMount = () => {
    this.getTeamsListDetails()
  }

  getTeamsListDetails = async () => {
    const {isLoader} = this.state

    const response = await fetch('https://apis.ccbp.in/ipl')
    const teamsDetails = await response.json()
    const {teams} = teamsDetails

    const updatedTeamsList = teams.map(eachTeam =>
      this.updateTeamsListData(eachTeam),
    )

    this.setState({teamsList: updatedTeamsList, isLoader: !isLoader})
  }

  render() {
    const {teamsList, isLoader} = this.state

    const mainEle = (
      <div className="mainDashboardContainer">
        <div className="logoContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="appLogo"
          />
          <h1 className="dashboardHeader">IPL DashBoard</h1>
        </div>

        {isLoader ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <ul className="teamsListContainer">
            {teamsList.map(eachTeam => (
              <TeamCard key={eachTeam.id} teamDetails={eachTeam} />
            ))}
          </ul>
        )}
      </div>
    )

    return mainEle
  }
}

export default Home
