class CreateForm extends React.Component {
  state = {
    newAttractionName: '',
    newAttractionCity: '',
    newAttractionCost: '',
    newAttractionDuration: '',
    newAttractionActivitylevel: ''
  }

  createAttraction = (event) => {
    console.log('hello from create attraction');
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
        console.log(response.data);
        
      })
      .then(() => {
        this.props.updateAttractions()
      })
  }
  onInputChange = (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }


  render = () => {
    return <div>
      <h2>Create Attraction</h2>
      <form onSubmit={this.createAttraction}>
        <input name='newAttractionName' value={this.state.newAttractionName} onChange={this.onInputChange}
          type="text" placeholder="name" /><br/>
        <input name='newAttractionCity' value={this.state.newAttractionCity} onChange={this.onInputChange}
          type="text" placeholder="city" /><br/>
        <input name='newAttractionCost' value={this.state.newAttractionCost} onChange={this.onInputChange}
          type="number" placeholder="cost" /><br/>
        <input name='newAttractionDuration' value={this.state.newAttractionDuration} onChange={this.onInputChange}
          type="text" placeholder="duration" /><br/>
        <input name='newAttractionActivitylevel' value={this.state.newAttractionActivitylevel} onChange={this.onInputChange}
          type="text" placeholder="activitylevel" /><br/>
        <input type="submit" value="Create Activity"/>
      </form>

    </div>
  }
}
