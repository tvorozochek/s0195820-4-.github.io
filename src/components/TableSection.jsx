import React from "react";
import "./Table-Section.css";

const TableSection = () => {
  return (
    <section className="table-section" id="table">
      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Имя</th>
              <th>Фамилия</th>
              <th>Возраст</th>
              <th>Должность</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan="2">Александр</td>
              <td>Иванов</td>
              <td>35</td>
              <td>Руководитель отдела маркетинга</td>
            </tr>
            <tr>
              <td>Смирнов</td>
              <td>28</td>
              <td>Ведущий дизайнер</td>
            </tr>
            <tr>
              <td>Дмитрий</td>
              <td>Кузнецов</td>
              <td>42</td>
              <td>Главный инженер</td>
            </tr>
            <tr>
              <td>Екатерина</td>
              <td>Петрова</td>
              <td>31</td>
              <td>Менеджер по продажам</td>
            </tr>
            <tr>
              <td>Алексей</td>
              <td>Васильев</td>
              <td>29</td>
              <td>Разработчик ПО</td>
            </tr>
            <tr>
              <td>Ольга</td>
              <td>Соколова</td>
              <td>33</td>
              <td>Специалист по кадрам</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TableSection;
