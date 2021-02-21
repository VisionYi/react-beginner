import React from 'react'

const Spinner = ({ message }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <i className="mr-3 animate-spin">
        <span className="iconify" data-icon="ant-design:loading-3-quarters-outlined" data-inline="false"></span>
      </i>
      <p>{ message }</p>
    </div>
  )
}

Spinner.defaultProps = {
  message: 'Loading...'
}

export default Spinner
