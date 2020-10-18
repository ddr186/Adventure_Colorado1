class CreateForm extends React.Component {
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
        ).then(
            (response) => {
                this.props.createCallback();
            }
        )
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
    changeNewAttractionduration = (event) => {
        this.setState({
            newAttractionDuration:event.target.value
        })
    }
    changeNewAttractionActivitylevel = (event) => {
        this.setState({
            newAttractionActivitylevel:event.target.value
        })
    }
    render = () => {
        return <div>
            <h2>Create Attraction</h2>
            <form onSubmit={this.createAttraction}>
                <input onKeyUp={this.changeNewAttracionName} type="text" placeholder="name" /><br/>
                <input onKeyUp={this.changeNewAttractionCity} type="text" placeholder="city" /><br/>
                <input onKeyUp={this.changeNewAttractionCost} type="number" placeholder="cost" /><br/>
                <input onKeyUp={this.changeNewAttractionDuration} type="text" placeholder="duration" /><br/>
                <input onKeyUp={this.changeNewAttractionActivitylevel} type="text" placeholder="activity level" /><br/>
                <input type="submit" value="Create Attraction"/>
            </form>
        </div>
    }
}

class App extends React.Component {
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
    return <div>
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
