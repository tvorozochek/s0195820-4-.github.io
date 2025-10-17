import React from "react";
import { Form, Input, Button, Select, Radio, Checkbox, DatePicker } from "antd";
const { Option } = Select;

function FormSection() {
  return (
    <section className="form-section" id="form">
      <h2>Форма</h2>
      <Form layout="vertical" className="form">
        <Form.Item label="Ваше ФИО" name="fio" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Ваш номер телефона" name="tel" rules={[{ required: true }]}>
          <Input type="tel" />
        </Form.Item>
        <Form.Item label="Ваш e-mail" name="email" rules={[{ required: true, type: "email" }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Дата рождения" name="date" rules={[{ required: true }]}>
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item label="Ваш пол" name="gender" rules={[{ required: true }]}>
          <Radio.Group>
            <Radio value="male">Мужской</Radio>
            <Radio value="female">Женский</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Любимый язык программирования" name="lang" rules={[{ required: true }]}>
          <Select>
            <Option value="pas" class="form-option">Pascal</Option>
                    <Option value="c" class="form-option">C</Option>
                    <Option value="cpp" class="form-option">C++</Option>
                    <Option value="js" class="form-option">JavaScript</Option>
                    <Option value="php" class="form-option">PHP</Option>
                    <Option value="py" class="form-option">Python</Option>
                    <Option value="java" class="form-option">Java</Option>
                    <Option value="hask" class="form-option">Haskel</Option>
                    <Option value="clo" class="form-option">Clojure</Option>
                    <Option value="pro" class="form-option">Prolog</Option>
                    <Option value="sca" class="form-option">Scala</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Биография" name="bio" rules={[{ required: true }]}>
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item name="agreement" valuePropName="checked" rules={[{ required: true }]}>
          <Checkbox>С контрактом ознакомлен(а)</Checkbox>
        </Form.Item>
        <Button type="primary" htmlType="submit">Сохранить</Button>
      </Form>
    </section>
  );
}

export default FormSection;
