import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';

const CreateSurvey = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  {
    "createReward":{
       "createLater":false,
       "paymentMethod":"PAY_LATER",
       "merchantId":1,
       "merchantName":"Deshala Mendis",
       "dealId":1,
       "count":17,
       "remainingCount":167,
       "publishDate":"2022-08-23T12:34:15",
       "expiryDate":"2022-09-21T12:29:58",
       "invoiceInfo":{
          "baseCost":100,
          "tax":1259.7,
          "costPerDeal":124.1,
          "dealCount":17,
          "totalCost":2109.7,
          "targetCost":2109.7,
          "addtionalCost":1190,
          "discount":850,
          "taxDeatil":{
             "nbt":1,
             "vat":1,
             "cess":1,
             "telco":1.1
          }
       },
       "targetingParamInfo":[
          
       ],
       "taskInfo":{
          "id":5,
          "type":"SURVEY",
          "image":"",
          "surveyDetail":{
             "questionList":[
                {
                   "questionType":"MCQ",
                   "answerList":[
                      {
                         "id":1,
                         "description":"0-20"
                      },
                      {
                         "id":2,
                         "description":"21-30"
                      },
                      {
                         "id":3,
                         "description":"31-40"
                      },
                      {
                         "id":4,
                         "description":""
                      },
                      {
                         "id":5,
                         "description":""
                      }
                   ],
                   "description":"What is your age range?"
                },
                {
                   "questionType":"MCQ",
                   "answerList":[
                      {
                         "id":1,
                         "description":"ADL"
                      },
                      {
                         "id":2,
                         "description":"Dialog"
                      },
                      {
                         "id":3,
                         "description":"Mobitel"
                      },
                      {
                         "id":4,
                         "description":"Ncell"
                      },
                      {
                         "id":5,
                         "description":"XL"
                      }
                   ],
                   "description":"What is your company name?"
                },
                {
                   "questionType":"OPEN_ENDED",
                   "answerList":null,
                   "description":"What is your company name?"
                }
             ]
          },
          "downloadAppInfoDto":null
       },
       "generateDigitalVoucherInfo":{
          "isFileUpload":false,
          "file":null
       },
       "rewardTitle":"SV Test",
       "rewardDescription":"SV Test"
    },
    "requestHeader":{
       "requestId":1661226174821,
       "timestamp":"2022-08-23T09:12:53",
       "channel":"freezone-merchant",
       "clientip":"N/A",
       "msisdn":"",
       "user":"Deshala Mendis",
       "userId":1
    }
 }

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateSurvey;
