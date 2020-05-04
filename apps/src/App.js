import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FileUpload from './FileUpload';
import Display from './Display';


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      prediction: null
    }
    this.setResult = this.setResult.bind(this)
  }

  setResult(val) {
    this.setState({prediction: val})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Upload an image of a Kannada numeral
          </p>
          <div>
            <FileUpload 
              setResult={this.setResult}
            />
          </div>
          {this.state.prediction? (
            <Display prediction={this.state.prediction}/>
          ) :(null)}
          
        </header>
      </div>
    )
  }
}

export default Home
