import React from 'react'
import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';

class AppSeason extends React.Component {
  state = { lat: null, errorMessage: '' }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    )
  }

  renderContent = () => {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage} </div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay className="h-1/2" lat={this.state.lat}/>
    }

    return <Spinner message="Please accept location request"/>
  }

  render() {
    return (
      <div className="h-screen">
        {this.renderContent()}
      </div>
    )
  }
}

export default AppSeason
