import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.setState({
      submitted: true
    });
    var url = window.location.href + '/api/hello'
    fetch(url)
    .then((response) => {
      return response.text()
    })
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
        console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            This is a cool app
          </p>
          <form onSubmit={this.handleSubmit}>
            <Button type="submit" variant="primary" className="submitButton">Send</Button>
          </form>
        </header>
      </div>
    );
  }
}

export default Home;
