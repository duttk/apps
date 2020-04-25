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
    console.log("Hello World");
    console.log(this.state);
    this.setState({
      submitted: true
    });
    // fetch()
    // .then(function(response) {
    //   console.log(response.text);
    // })
    // .catch(function(error) {
    //     console.log(error);
    // });
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
