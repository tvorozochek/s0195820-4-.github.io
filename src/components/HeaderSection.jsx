import React from "react";
import { Layout } from "antd";

const { Header } = Layout;

const HeaderComponent = () => {
  return (
    <Header className="header">
      <div className="header-top">
        <div className="logo">🌐</div>
        <div className="site-title">Мой Сайт</div>
      </div>
      <nav className="custom-nav">
        <a href="#links">Ссылки</a>
        <a href="#table">Таблица</a>
        <a href="#form">Форма</a>
      </nav>
    </Header>
  );
};

export default HeaderComponent;
