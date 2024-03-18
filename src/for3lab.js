import React, { useState } from 'react';
import { Container, Row, Col, Button, FormControl } from 'react-bootstrap';

function InputComponent() {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const inputChange = (event) => {
    setInputValue(event.target.value);
    setOutputValue(event.target.value);
  };

  const clearInput = () => {
    setInputValue('');
    setOutputValue('');
  };

  return (
    <Container>
      <Row className="mb-3 mt-3">
        <Col>
            <FormControl
                type="text"
                placeholder="Введите текст"
                value={inputValue}
                onChange={inputChange}
              />
        </Col>

        <Col>
          <FormControl
                type="text"
                placeholder="Вывод текста"
                value={outputValue}
                disabled
              />
        </Col>
      </Row>
      
      <Row>
        <Col>
          <Button variant="outline-danger" onClick={clearInput}>
            Удалить
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default InputComponent;