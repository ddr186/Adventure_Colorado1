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
    </div>
  }
}
