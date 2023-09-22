import { Button, Result } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const SomethingWentWrong = () => {
  const history = useNavigate()

  return (
    <Result
      status="500"
      title=""
      subTitle="Sorry, something went wrong."
      extra={
        <Button
          type="primary"
          onClick={() => {
            history.goBack()
          }}
        >
          Back Home
        </Button>
      }
    />
  )
}

export default SomethingWentWrong
