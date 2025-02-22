//file not being used, separate process started for uploading file

import React, {Component} from 'react'
// import styles from '../public/Upload.css'
import Dropzone from './Dropzone'

class Upload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      files: [],
      uploading: false,
      uploadProgress: {},
      successfullUploaded: false
    }

    this.onFilesAdded = this.onFilesAdded.bind(this)
    this.uploadFiles = this.uploadFiles.bind(this)
    this.sendRequest = this.sendRequest.bind(this)
    this.renderActions = this.renderActions.bind(this)
  }

  onFilesAdded(files) {
    this.setState(prevState => ({
      files: prevState.files.concat(files)
    }))
  }

  render() {
    return (
      <div className="Upload">
        <span className="Title">Upload Files</span>
        <div className="Content">
          <div>
            <Dropzone
              onFilesAdded={this.onFilesAdded}
              disabled={this.state.uploading || this.state.successfullUploaded}
            />
          </div>
          <div className="Files">
            {/* Add this: */}
            {this.state.files.map(file => {
              return (
                <div key={file.name} className="Row">
                  <span className="Filename">{file.name}</span>
                </div>
              )
            })}
          </div>
        </div>
        <div className="Actions" />
      </div>
    )
  }
}

export default Upload
