class App extends React.Component {
  state = {
    attractions:[]
  }
  changeNewAttractionName = (event) => {
      this.setState({
          newAttractionName:event.target.value
      })
  }
  changeNewAttractionCity = (event) => {
      this.setState({
          newAttractionCity:event.target.value
      })
  }
  changeNewAttractionCost = (event) => {
      this.setState({
          newAttractionCost:event.target.value
      })
  }
  changeNewAttractionDuration = (event) => {
      this.setState({
          newAttractionDuration:event.target.value
      })
  }
  changeNewAttractionActivitylevel = (event) => {
      this.setState({
          newAttractionActivitylevel:event.target.value
      })
  }
  deleteAttraction = (event) => {
    axios.delete('/attractions/' + event.target.value).then(
      (response) => {
        this.setState(
          {
            attractions:response.data
          }
        )
      }
    )
  }
    changeUpdateAttractionName = (event) => {
      this.setState({
        updateAttractionName:event.target.value
      })
    }
    changeUpdateAttractionCity = (event) => {
      this.setState({
        updateAttractionCity:event.target.value
      })
    }
    changeUpdateAttractionCost = (event) => {
      this.setState({
        updateAttractionCost:event.target.value
      })
    }
    changeUpdateAttractionDuration = (event) => {
      this.setState({
        updateAttractionDuration:event.target.value
      })
    }
    changeUpdateAttractionActivitylevel = (event) => {
      this.setState({
        updateAttractionActivitylevel:event.target.value
      })
    }
  updateAttraction = (event) => {
    event.preventDefault();
    const id = event.target.getAttribute('id');
    axios.put(
      '/attractions/'+id,
      {
        name:this.state.updateAttractionName,
        city:this.state.updateAttractionCity,
        cost:this.state.updateAttractionCost,
        duration:this.state.updateAttractionDuration,
        activitylevel:this.state.updateAttractionActivitylevel
      }
    ).then(
      (response) => {
        this.setState(
          {
            attractions:response.data
          }
        )
      }
    )
  }
  updateAttractions = () => {
    axios.get('/attractions'),then(
      (response) => {
        this.setState(
          {
            attractions:response.data
          }
        )
      }
    )
  }
  createAttraction = (event) => {
      event.preventDefault();
      axios.post(
          '/attractions',
          {
              name:this.state.newAttractionName,
              city:this.state.newAttractionCity,
              cost:this.state.newAttractionCost,
              duration:this.state.newAttractionDuration,
              activitylevel:this.state.newAttractionActivitylevel
          }
      ).then((response) => {
          this.setState({
            attractions: response.data
        })
      })
  }
  componentDidMount =() => {
    axios.get('/attractions').then(
      (response) => {
        this.setState({
          attractions: response.data
        }
      )
    })
  }
  render = () => {
    return <div>
    <form onSubmit={this.createAttraction}>
        <input onKeyUp={this.changeNewAttractionName} type="text" placeholder="name" /><br/>
        <input onKeyUp={this.changeNewAttractionCity} type="text" placeholder="city" /><br/>
        <input onKeyUp={this.changeNewAttractionCost} type="text" placeholder="cost" /><br/>
        <input onKeyUp={this.changeNewAttractionDuration} type="text" placeholder="duration" /><br/>
        <input onKeyUp={this.changeNewAttractionActivitylevel} type="text" placeholder="actvity level" /><br/>
        <input type="submit" value="Create Attraction"/>
    </form>
      <h2>List of Attractions</h2>
      <ul>
        {
          this.state.attractions.map(
            (attraction) => {
              return <li>
              {attraction.name}:
              {attraction.city}:
              {attraction.cost}:
              {attraction.duration}:
              {attraction.activitylevel}
              <button value ={attraction.id}
              onClick={this.deleteAttraction}>
                Delete
              </button>
              <form id={attraction.id}
              onSubmit={this.updateAttraction}>
                <input
                onKeyUp={this.changeUpdateAttractionName}
                  type="text" placeholder="name" /><br/>
                <input
                onKeyUp={this.changeUpdateAttractionCity}
                  type="text" placeholder="city" /><br/>
                <input
                onKeyUp={this.changeUpdateAttractionCost}
                  type="text" placeholder="cost" /><br/>
                <input
                onKeyUp={this.changeUpdateAttractionDuration}
                  type="text" placeholder="duration" /><br/>
                <input
                onKeyUp={this.changeUpdateAttractionActivitylevel}
                  type="text" placeholder="activity level" /><br/>
                <input type="submit" value="Update Attraction"/>
              </form>
            </li>
            }
          )
        }
      </ul>
    </div>
  }
}
ReactDOM.render(
  <App></App>,
  document.querySelector('main')
)
