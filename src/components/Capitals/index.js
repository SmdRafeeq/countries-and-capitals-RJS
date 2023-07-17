import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({activeId: event.target.value})
  }

  getCountry = () => {
    const {activeId} = this.state
    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeId,
    )
    return activeCountryAndCapital.country
  }

  render() {
    const {activeId} = this.state
    const country = this.getCountry(activeId)

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Countries and Capitals</h1>
          <select
            className="select-options"
            value={activeId}
            onChange={this.onChangeCapital}
          >
            {countryAndCapitalsList.map(eachCountry => (
              <option
                key={eachCountry.id}
                value={eachCountry.id}
                className="option"
              >
                {eachCountry.capitalDisplayText}
              </option>
            ))}
          </select>
          is capital of which country?
          <p className="country-name">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
