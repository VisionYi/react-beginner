import React from 'react'

// 這裡全部使用 Tailwind CSS 配置所有的元素樣式
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
