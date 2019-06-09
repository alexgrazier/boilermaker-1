import React from 'react'
import {connect} from 'react-redux'
import {fetchCompanies} from '../store/companies'

export class CompanyList extends React.Component {
  componentDidMount() {
    this.props.fetchCompanies()
  }

  render() {
    const {companies} = this.props
    return (
      <div>
        <h2>Companies</h2>
        <div>
          {companies.map(company => {
            return (
              <li key={company['Company ID']}>
                Company: {company['Company Name']}, Share Price Date:{' '}
                {company['Share Price Date']}, Share Price:{' '}
                {company['Share Price']}, Comments: {company.Comments}
              </li>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    companies: state.companies
  }
}

const mapDispatchToProps = {fetchCompanies}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyList)
