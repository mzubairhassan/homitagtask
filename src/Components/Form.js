import React from "react";
import {
  Form,
  Input,
  DatePicker,
  Select,
  Button,
  Upload,
  Tooltip,
} from "antd";
import { Layout } from "antd";
import { isPasswordValid,  minThreeCharRequired } from "../Validation/validations";
const { Header, Content, Footer } = Layout;

export const DemoForm = () => {
  const { Option } = Select;
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 5,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 12,
      },
    },
  };
  const imageUrl = "";
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="92">+92</Option>
        <Option value="1">+1</Option>
      </Select>
    </Form.Item>
  );

  
  const uploadButton = (
    <div>
      <div className="ant-upload-text">Click to Upload your</div>
    </div>
  );

  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <div className="header">FORM</div>
        </Header>
        <Content style={{ padding: "50px 50px" }}>
          <Form {...formItemLayout}>
            <Form.Item
              label="First name"
              name="firstname"
              rules={[
                {
                  required: true,
                  message: "Please input your First name!",
                },
                { validator: minThreeCharRequired }
              ]}
              hasFeedback
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Last name"
              name="lastname"
              rules={[
                {
                  required: true,
                  message: "Please input your Last name",
                },
                { validator: minThreeCharRequired }
              ]}
              hasFeedback
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
              hasFeedback
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
                { validator: isPasswordValid },
              ]}
              hasFeedback
            >
              <Tooltip
                trigger={["focus"]}
                title=" at least 8 digits, 1 uppercase, 1 number and 1 special character"
                placement="topLeft"
              >
                <Input.Password />
              </Tooltip>
            </Form.Item>

            <Form.Item label="Profile picture image">
              <Upload
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={true}
              >
                {imageUrl ? (
                  <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
                ) : (
                  uploadButton
                )}
              </Upload>
            </Form.Item>

            <Form.Item name="phone" label="Phone Number">
              <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item label="Birthday date">
              <DatePicker />
            </Form.Item>

            <Form.Item name="Country" label="Country" hasFeedback>
              <Select placeholder="Please select a country">
                <Option value="china">Pakistan</Option>
                <Option value="usa">U.S.A</Option>
              </Select>
            </Form.Item>
            <Form.Item wrapperCol={{ span: 24, offset: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Content>
        <Footer style={{ textAlign: "center" }}>Simple Form for Demo</Footer>
      </Layout>
    </div>
  );
};

