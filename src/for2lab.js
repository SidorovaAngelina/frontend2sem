import React from 'react';

import {Container, Row, Col, Table, Image} from "react-bootstrap";

function CharacterInfo() {
  const characterData = {
    'Полное имя': 'Джек Дэниел Эдвард Торранс',
    Пол: 'Мужской',
    'Персонаж': 'Роман "Сияние"',
    'Дата рождения': '1947 год',
    'Дата смерти': '2 декабря 1977',
    Возраст: '30 лет',
    'Род занятий': 'Бывший учитель, писатель, зимний смотритель отеля "Оверлук"',
    Статус: 'Скончался',
  };
     return (
    <div>
      <Container>
        <h1
          className="mb-4 mt-3 bg-dark text-white p-2 rounded"
        >
          {characterData['Полное имя']}
        </h1>
         
        <Row>
          <Col md={6}>
            <Table striped="columns" bordered hover variant="dark">
              <tbody>
                {Object.entries(characterData).map(([key, value]) => (
                  <tr key={key}>
                    <th>{key}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>

          <Col md={6}>
            <Image
              src="https://sun9-75.userapi.com/impf/KdC5oZnKRoAqPwHt1ok1ch5s2HIFKRFDmTengg/Cdc1ahizE5Q.jpg?size=1280x720&quality=96&sign=40dd7bca4ff213335d32889433d46fc1&c_uniq_tag=ks79g27CSoogtRk_MhNfsp0yv38OhLqV6ZC71YkBT4w&type=album"
              alt="Джек Торренс"
             thumbnail
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CharacterInfo;