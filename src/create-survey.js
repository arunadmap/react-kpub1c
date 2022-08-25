import { Button, Checkbox, Form, Input, Space } from 'antd';
import React, { useState } from 'react';

const CreateSurvey = () => {
  const [survey, setSurvey] = useState([
  ])

  const addMCQ = () => {
    const newSurvey = [...survey];
    const newMCQ = {
      id: (survey.length + 1),
      questionType: "MCQ",
      answerList: [{ id: 1, description: "" }, { id: 2, description: "" }, { id: 3, description: "" }]
    }
newSurvey.push(newMCQ)
    setSurvey(newSurvey)
  }

  const onFinish = (values) => {
    console.log('Success:', values);

  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <Form
      name="survey"
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
      {survey.length ?
        survey.map((question) => {

          return (
            <>

              <Form.Item
                label="Description"
                name={question.id}
                initialValue={question.description}
                rules={[
                  {
                    required: false,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              {question.questionType === "MCQ" ?
                question.answerList.map((answer) => (
                  <Form.Item
                    label={answer.id}
                    name={question.id + "-" + answer.id}
                    initialValue={answer.description}
                    rules={[
                      {
                        required: false,
                        message: 'Please input your username!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                ))
                : null}

            </>
          )
        }
        )
        : null}

      
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button onClick={addMCQ} type={'dashed'}>Add MCQ</Button>
      <Button onClick={addMCQ} type={'dashed'}>Add OPEN_ENDED</Button>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>

    </Form>
  );
};

export default CreateSurvey;
