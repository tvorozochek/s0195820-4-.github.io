import React from "react";
import "antd/dist/reset.css";
import { Layout } from "antd";
import HeaderComponent from "./components/HeaderSection";
import Links from "./components/LinksSection";
import TableSection from "./components/TableSection";
import FormSection from "./components/FormSection";
import FooterComponent from "./components/FooterSection";
import "./App.css";

const { Content } = Layout;

function App() {
  return (
    <Layout>
      <HeaderComponent />
      <Content className="content">
        <Links />
        <TableSection />
        <FormSection />
      </Content>
      <FooterComponent />
    </Layout>
  );
}

export default App;
