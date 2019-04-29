import React from 'react';

class Compra extends React.Component {

  constructor(props){
    super(props);
    this.state = {name: props.name, newName: props.name};
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }
  handleOnBlur(){
    this.setState({newName: this.state.name});
  }
  render() {
    return (
      <li className="w3-display-container">
        <input  className="w3-input w3-block w3-hover-border-blue" type="text" value={this.state.newName} 
          onBlur={() => this.props.onBlur(this.state.name, this.state.newName) || this.handleOnBlur()} 
          onChange={(e) => this.setState({newName: e.target.value})}/>
        <div className="w3-container w3-display-right">
          <span onSelect={()=>false} className="w3-display-container w3-margin-right">{this.props.qtd}</span>
          <button onClick={() => this.props.onRemove(this.props.name)} className="w3-button">&times;</button>
        </div>
      </li>
    );
  }
}

export default Compra;
