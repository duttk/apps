import React from 'react';

class FileUpload extends React.Component {

    constructor(props) {
      super(props)
        this.state = {
          uploadStatus: false
        }
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
      e.preventDefault()
      this.setState({
          submitted: true
      })
      const data = new FormData()
      data.append('file', this.uploadInput.files[0])

    //   const url = 'http://127.0.0.1:5000' + '/api/numeral'
      const url = window.location.href + '/api/numeral'
      fetch(url, {
        method: 'POST',
        body: data
      })
      .then((response) => {
          this.setState({
              uploadStatus: true 
          })
          return response.json()
      })
      .then((data) => {
          this.props.setResult(data.prediction)
      }) 
      .catch((error) => {
          console.log(error)
      })
    }
    
    render() {
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                <input className="form-control"  ref={(ref) => { this.uploadInput = ref }} type="file" />
                </div>
                <button className="btn btn-success" type>Upload</button>
    
            </form>
            </div>
        )
    }
}

export default FileUpload