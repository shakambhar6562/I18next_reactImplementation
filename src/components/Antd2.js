import React from "react";
import { useState } from "react";
import { Button, Checkbox, Form, Input, Select } from "antd";
import { Space } from "antd";
import { objects } from "./Antd";
const { Option } = Select;
const { Search } = Input;
const onFinish = (values) => {

  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Login = () => {
  const [form] = Form.useForm();
  const [activate, setActivate] = useState({
    Attribute: "",
    Parent: "",
    Code: "",
    Name: "",
  });

  const [show,setShow]=useState(true);
  
  const handle = (event) => {
    setActivate({
      ...activate,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.name);
  };

  const handle2 = (event) => {
    setActivate({
      ...activate,
      Attribute: event,
    });
  };
  const onFill = () => {
    const obj={...activate}
    form.setFieldsValue({
      Attribute: objects.Attribute,
      Parent: objects.Parent,
      Code: objects.Code,
      Name: objects.Name,
    });
    console.log("I am here");
  };
  const EditAddSib = () => {
    return (
      <Form.Item
        wrLoginerCol={{
          offset: 8,
          span: 20,
        }}
      >
        <Button onClick={onFill} danger>
          Edit
        </Button>
        <Button danger>ADD CHILD</Button>

        <Button danger>ADD SIBLING</Button>
      </Form.Item>
    );
  };

  const onReset = () => {
    form.resetFields();
    // setActivate({
    //   ...activate,
    //   Attribute: "",
    //   Parent: "",
    //   Code: "",
    //   Name: "",
    // });
  };
  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="Attribute"
        label="Attribute Level"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select defaultValue="Continent" onSelect={handle2} placeholder={objects.Attribute} allowClear>
          <Option value="Continent">Continent</Option>
          <Option value="Country">Country</Option>
          <Option value="State">State</Option>
          <Option value="City">District/City</Option>
          <Option value="Tashil">Tashil</Option>
          <Option value="Pincode">Pincode</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Parent"
        name="Parent"
        rules={[
          {
            required: true,
            message: "Please Select a parent !",
          },
        ]}
      >
        <Input name="Parent" onChange={handle} placeholder={objects.Parent} />
      </Form.Item>
      <Form.Item
        label="Code"
        name="Code"
        rules={[
          {
            required: true,
            message: "Please Enter the Code !",
          },
        ]}
      >
        <Input name="Code" onChange={handle} placeholder={objects.Code} />
      </Form.Item>

      <Form.Item
        label="Name"
        name="Name"
        rules={[
          {
            required: true,
            message: "Please input the name!",
          },
        ]}
      >
        <Input name="Name" onChange={handle} placeholder={objects.Name} />
      </Form.Item>

      {/* <Form.Item
        name="remember"
        valuePropName="checked"
        wrLoginerCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}
      <EditAddSib />

      

      <div>{activate.Attribute}</div>
      <div>{activate.Parent}</div>
      <div>{activate.Code}</div>
      <div>{activate.Name}</div>
      {/* <button onClick={checker}>Click me</button> */}
    </Form>
  );
};
export default Login;
