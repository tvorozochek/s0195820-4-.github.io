import React from "react";
import { Layout } from "antd";
import HeaderComponent from "./components/Header";
import Links from "./components/Links";
import TableSection from "./components/TableSection";
import FormSection from "./components/FormSection";
import FooterComponent from "./components/Footer";
import "./App.css";

const { Content } = Layout;

function App() {
  return (
    <Layout>
      <HeaderComponent />
      <Content className="content">
        <div className="main-sections">
          {/* Секции с таблицей, ссылками и формой */}
          <div className="upper-block">
            <Links />
            <TableSection />
          </div>
          <div className="lower-block">
            <FormSection />
          </div>
        </div>
      </Content>
      <FooterComponent />
    </Layout>
  );
}

export default App;
