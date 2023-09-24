import React from 'react'
import { Button, Card, Form, Input } from 'antd'
import { apiCall } from '../utilities/apiCall'
import { setUser } from '../utilities/generalUtility'

const Login = () => {
  return (
    <React.Fragment>
      <div className="login-container">
        <div className="lc-logo">
          <img src="images/logo.png" alt="" />
        </div>
        <Card bodyStyle={{ padding: '0 32px' }} bordered={false} className="login-card">
          <h4>Login</h4>
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            layout="vertical"
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your Email!',
                },
                {
                  // pattern: new RegExp('^[a-zA-Z0-9 ]+$'),       for only alph and number
                  pattern: new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/),
                  message: 'Email incorrect',
                },
              ]}
            >
              <Input
                type="email"
                // prefix={
                //   <UserOutlined className="site-form-item-icon text-primary" />
                // }
                placeholder="Email"
                size="large"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
                // {
                //   min: 8,
                //   message: 'Value should be greter than 8 character',
                // },
                {
                  max: 20,
                  message: 'Value should be less than 20 character',
                },
              ]}
            >
              <Input.Password
                // prefix={
                //   <LockOutlined className="site-form-item-icon text-primary" />
                // }
                placeholder="Password"
                size="large"
              />
            </Form.Item>
            {/* <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Link to="/forgot-password" className="float-right" href="">
                Forgot password
              </Link>
            </Form.Item> */}
            <Form.Item className="mb-0">
              <Button
                block
                size="large"
                type="primary"
                onClick={() => {
                  // apiCall('/user', 'get')
                  setUser({ id: 1, name: 'temp', email: 'temp@temp.com', token: '12345' })
                }}
              >
                Sign In
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </React.Fragment>
  )
}

export default Login
