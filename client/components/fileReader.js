import React from 'react'
import papa from 'papaparse'

//still need to connect this updated data to backend, create put route to update database, then show the list of companies with the updated database info

class FileReader extends React.Component {
  constructor() {
    super()
    this.state = {
      csvfile: undefined
    }

    this.updateData = this.updateData.bind(this)
  }

  handleChange = event => {
    this.setState({
      csvfile: event.target.files[0]
    })
  }

  importCSV = () => {
    const {csvfile} = this.state
    papa.parse(csvfile, {
      complete: this.updateData,
      header: true
    })
  }

  updateData(result) {
    let data = result.data
    console.log('data', data)
  }

  render() {
    console.log(this.state.csvfile)
    return (
      <div className="App">
        <h2>Import CSV File!</h2>
        <input
          className="csv-input"
          type="file"
          ref={input => {
            this.filesInput = input
          }}
          name="file"
          placeholder={null}
          onChange={this.handleChange}
        />
        <p />
        <button onClick={this.importCSV}> Upload now!</button>
      </div>
    )
  }
}

export default FileReader
