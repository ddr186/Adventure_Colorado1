
class App extends React.Component {
 main
  state = {
    attractions:[]
  }
  componentDidMount =() => {
    this.updateAttractions();
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
        updatedAttractionDuration:event.target.value
      })
    }
    changeUpdateAttractionActivitylevel = (event) => {
      this.setState({
        updatedAttractionActivitylevel:event.target.value
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
  updateAttraction = () => {
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
  render = () => {
    return<div>
      <CreateForm createCallback={this.updateAttractions}></CreateForm>
      <h2>List of Attractions</h2>
      <ul>
        {
          this.state.attractions.map(
            (attractions) => {
              return <li>
              {attraction.name}:
              {attraction.city}:
              {attraction.cost}:
              {attraction.duration}:
              {attraction.activitylevel}
              <button value ={attracion.id}
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
                  type="number" placeholder="cost" /><br/>
                <input
                onKeyUp={this.changeUpdateAttractionDuration}
                  type="text" placeholder="duration" /><br/>
                <input
                onKeyUp={this.changeUpdateAttractionActivitylevel}
                  type="text" placeholder="activitylevel" /><br/>
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
