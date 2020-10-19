class CreateForm extends React.Component {
<<<<<<< HEAD
  state = {
    newAttractionName: '',
    newAttractionCity: '',
    newAttractionCost: '',
    newAttractionDuration: '',
    newAttractionActivitylevel: ''
  }

  createAttraction = (event) => {
    console.log('hello from create attraction');
=======
  createAttraction = (event) => {
>>>>>>> d9c1fa3af8d64ffed831cdaed0e9b5f598893c2a
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
<<<<<<< HEAD
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

=======
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
  changeNewAttractionDuration = (event) => {
    this.setState({
      newAttractionDuation:event.target.value
    })
  }
  changeNewAttractionActivitylevel = (event) => {
    this.setState({
      newAttractionActivitylevel:event.target.value
    })
  }
  render = () => {
    return <div>
      <h2>Create Activity</h2>
      <form onSubmit={this.createActivity}>
        <input onKeyUp={this.changeNewActivityName}
          type="text" placeholder="name" /><br/>
        <input onKeyUp={this.changeNewActivityCity}
          type="text" placeholder="city" /><br/>
        <input onKeyUp={this.changeNewActivityCost}
          type="number" placeholder="cost" /><br/>
        <input onKeyUp={this.changeNewActivityDuration}
          type="text" placeholder="duration" /><br/>
        <input onKeyUp={this.changeNewActivityActivitylevel}
          type="text" placeholder="activitylevel" /><br/>
        <input type="submit" value="Create Activity"/>
      </form>
>>>>>>> d9c1fa3af8d64ffed831cdaed0e9b5f598893c2a
    </div>
  }
}
