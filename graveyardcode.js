class App extends React.Component {
  state = {
    attractions:[],
    name: '',
    city: '',
    cost: '',
    duration: '',
    activitylevel: ''
  }
  componentDidMount =() => {
    this.updateAttractions();
  }
    onInputChange = (event) => {
      this.setState({
        [event.target.name]:event.target.value
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
  updateAttraction = (event, id) => {
    event.preventDefault();
    axios.put(
      '/attractions/'+id,
      {
        name:this.state.name,
        city:this.state.city,
        cost:this.state.cost,
        duration:this.state.duration,
        activitylevel:this.state.activitylevel
      }
    ).then((response) => {
        this.setState({
            attractions:response.data
          })
      })
    }
  updateAttractions = () => {
    axios.get('/attractions')
    .then((response) => {
      console.log(response.data, 'hi from update attractions');
        this.setState({
            attractions:response.data
          })
      })
  }
  render = () => {
    return(
      <div>
      <CreateForm updateAttractions={this.updateAttractions}></CreateForm>
      <h2>List of Attractions</h2>
      <ul>
        {
          this.state.attractions.map((attraction) => {
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
              onSubmit={()=>{this.updateAttraction(event, attraction.id)}}>
              <input name='name' value={this.state.name} onChange={this.onInputChange}
                type="text" placeholder="name" /><br/>
              <input name='city' value={this.state.city} onChange={this.onInputChange}
                type="text" placeholder="city" /><br/>
              <input name='cost' value={this.state.cost} onChange={this.onInputChange}
                type="number" placeholder="cost" /><br/>
              <input name='duration' value={this.state.duration} onChange={this.onInputChange}
                type="text" placeholder="duration" /><br/>
              <input name='activitylevel' value={this.state.activitylevel} onChange={this.onInputChange}
                type="text" placeholder="activitylevel" /><br/>
                <input type="submit" value="Update"/>
              </form>
            </li>
          })
        }
      </ul>
    </div>
    )
  }
}
ReactDOM.render(
  <App></App>,
  document.querySelector('main')
)
