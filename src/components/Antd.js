import React from "react";
import { useState } from "react";
import { Button, Checkbox, Form, Input, Select } from "antd";
import Login from './Antd2';
import { Space } from "antd";
const { Option } = Select;
const { Search } = Input;
let objects= [{}];
const onFinisher = (values) => {
  console.log(values);
  objects=values;
  
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Antd = () => {
  const [form] = Form.useForm();
  const [activate, setActivate] = useState({
    Attribute: "",
    Parent: "",
    Code: "",
    Name: "",
  });
//   const checker = ()=> {
//     console.log(activate.length);
//   }
  const [show,setShow]=useState(true);
  const changer = () => {

    const obj={...activate}
    // console.log(obj);
    // if(obj.Attribute.length>0 && obj.Parent.length>0 && obj.Code.length>0 && obj.Name.length>0){
    //     if(show==false)
    //     {
    //         setShow(true);
    //         form.resetFields();
    //     }
    //     else
    //     {
    //     setShow(false);
    //     form.resetFields();
    //     }
    // }

  } 
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
      Attribute: obj.Attribute,
      Parent: obj.Parent,
      Code: obj.Code,
      Name: obj.Name,
    });
    console.log("I am here");
  };

  const SaveResetButton = () => {
    return (
      <Form.Item
        wrAntderCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={changer}>
          Save
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    );
  };

  const EditAddSib = () => {
    return (
      <Form.Item
        wrAntderCol={{
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
      onFinish={onFinisher}
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
        <Select defaultValue="Continent" onSelect={handle2} placeholder="Continent" allowClear>
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
        <Input name="Parent" onChange={handle} placeholder="Parent" />
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
        <Input name="Code" onChange={handle} placeholder="Code" />
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
        <Input name="Name" onChange={handle} placeholder="Name" />
      </Form.Item>

      {/* <Form.Item
        name="remember"
        valuePropName="checked"
        wrAntderCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}
       <SaveResetButton />

      {/* <SaveResetButton />
      <EditAddSib /> */}

      <div>{activate.Attribute}</div>
      <div>{activate.Parent}</div>
      <div>{activate.Code}</div>
      <div>{activate.Name}</div>
      {/* <button onClick={checker}>Click me</button> */}
    </Form>
  );
};
export default Antd;
export {objects};
