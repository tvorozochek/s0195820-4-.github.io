import React from "react";

const LinksSection = () => {
  return (
    <section className="links-section" id="links">
      <div className="container">
        <ul className="links-list">
          <li><a href="http://kubsu.ru">абсолютная гиперссылка на главную страницу сайта kubsu.ru</a></li>
          <li><a href="https://kubsu.ru">абсолютная на главную сайта kubsu.ru в протоколе https</a></li>
          <li>
            <a href="https://kubsu.ru">
              <img src="/images/spider-man.webp" alt="человек паук" className="links-img" />
            </a>
          </li>
          <li><a href="./about/about.html">сокращенная ссылка на внутреннюю страницу</a></li>
          <li><a href="./index.html">сокращенная ссылка на главную страницу</a></li>
          <li><a href="#links">ссылка на фрагмент текущей страницы</a></li>
          <li><a href="https://kubsu.ru/search?query=math&sort=date&limit=10">ссылка с тремя параметрами в URL</a></li>
          <li><a href="https://kubsu.ru/profile?id=12345">ссылка с параметром id в URL</a></li>
          <li><a href="./hello.html">относительная на страницу в текущем каталоге</a></li>
          <li><a href="./about/about.html">относительная на страницу в каталоге about</a></li>
          <li><a href="../hello.html">относительная на страницу уровнем выше текущего</a></li>
          <li><a href="../../hello.html">относительная на страницу двумя уровнями выше</a></li>
          <li>
            <p>
              а так же вы можете посетить наш <a href="https://kubsu.ru">чудесный сайт</a>
            </p>
          </li>
          <li><a href="https://example.com/article#chapter2">ссылка на фрагмент страницы стороннего сайта</a></li>
          <li>
            <div className="links-map">
              <img src="/images/spider-man.webp" alt="Человек-паук" useMap="#imageMap" className="links-img" />
              <map name="imageMap">
                <area shape="circle" coords="150,150,50" href="https://kubsu.ru" alt="Перейти на сайт КубГУ" />
                <area shape="rect" coords="10,10,100,100" href="https://kubsu.ru/about" alt="О КубГУ" />
              </map>
            </div>
          </li>
          <li><a href="">ссылка с пустым href</a></li>
          <li><a>ссылка без href</a></li>
          <li><a href="https://kubsu.ru" rel="nofollow">ссылка, по которой запрещен переход поисковикам</a></li>
          <li><a href="https://kubsu.ru" rel="noindex">запрещенная для индексации поисковиками</a></li>
          <li>
            <ol className="links-ol">
              <li><a href="https://kubsu.ru" title="Главная страница КубГУ">Главная</a></li>
              <li><a href="https://kubsu.ru/about" title="О университете">О нас</a></li>
              <li><a href="https://kubsu.ru/admission" title="Поступление">Поступление</a></li>
            </ol>
          </li>
          <li><a href="ftp://user:password@ftp.example.com/file.txt">ссылка на файл на сервере FTP с авторизацией</a></li>
        </ul>
      </div>
    </section>
  );
};

export default LinksSection;
