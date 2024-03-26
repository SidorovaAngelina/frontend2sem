import React, { useState } from "react";
import { Card, Container, FormControl } from "react-bootstrap";

function CharacterList (){
    const characterData = [
        {
            name: 'Пол Эджкомб',
            novel: '"Зеленая миля"',
            image: 'https://twizz.ru/wp-content/uploads/2023/06/1685710304_c6204b99e0f337d13e2581ea9bd02812.jpg',
        },
        {
            name: 'Энн Уилкс',
            novel: '"Мизери"',
            image: 'https://wexarts.org/sites/default/files/2018-07/fv_misery_2_1100x600.jpg',
        },
        {
            name: 'Энди Дюфрейн',
            novel: '"Рита Хейуорт и спасение из Шоушенка"',
            image: 'https://videobyte.ru/800/600/https/pbs.twimg.com/media/EbdeqvLXQAAJHjT.jpg',
        }, 
        {
            name: 'Перси Уэтмор',
            novel: '"Зеленая миля"',
            image: 'https://avatars.dzeninfra.ru/get-zen_doc/9196493/pub_645ca0dc581cc32b04227969_645ca8468b89190b00c1ff04/scale_1200',
        },
        {
            name: 'Джон Коффи',
            novel: '"Зеленая миля"',
            image: 'https://avatars.dzeninfra.ru/get-zen_doc/3512190/pub_60549852c9454051659b7f02_6055025383224c57fb7df374/scale_1200',
        },
        {
            name: 'Ред',
            novel: '"Рита Хейуорт и спасение из Шоушенка"',
            image: 'https://avatars.dzeninfra.ru/get-zen_doc/3532529/pub_6223b28b4edb4f71acc6eaea_6223cb29daf048086ea6027c/scale_1200',
        },
        {
            name: 'Пол Шелдон',
            novel: '"Мизери"',
            image: 'https://avatars.dzeninfra.ru/get-zen_doc/1872259/pub_61b75b5d20fb642517a41d5e_61b75be720fb642517a4b2a5/scale_1200',
        },
    ];
    
    
    const [searchTerm, setSearchTerm] = useState ('');
    
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };
    
    return (
        <Container style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
        <FormControl
        size="lg"
        type="text"
        placeholder="Поиск персонажа"
        className="mt-4 mb-4 text-success"
        onChange={handleChange}
        />
        
        {characterData.filter((character) => character.name.toLowerCase().includes(searchTerm.toLowerCase())).map((character, index) => (
          <Card
            key={index}
            className="m-3 bg-success"
            style={{
              width: "15rem",
              height: "20rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",

            }}
          >
            <div>
              <Card.Img variant="top" src={character.image}/>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Card.Title className="text-white">{character.name}</Card.Title>
              </div>
              <Card.Text className="text-white">{character.novel}</Card.Text>
            </div>
          </Card>
        ))}
    </Container>
    )
}

export default CharacterList;