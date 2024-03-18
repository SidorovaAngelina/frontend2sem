import React from 'react';

const HelloWorld = () =>{
    function sayMessage(){
        alert('Have a good day!');
    }
    
    return(
        <p><button onClick={sayMessage}> Click here ♡</button></p>
    );
};


const MyFirstComponent = () =>{
    return(
        <div>
            <h3>Если нажать на кнопку-выведется сообщение.</h3>
            <p>Это первый простой компонент, а картинка - второй.</p>
            <p><button type="button" class="btn btn-primary"> Primary  ♡</button></p>
        </div>
    );
};


const PictureComponent = () =>{
    return(
        <img
            src="https://i.pinimg.com/originals/25/94/ed/2594edee0d2c3a6187f851186584db07.jpg"
            alt="Hamster with a peace sign"
        />
    );
};


export {HelloWorld, MyFirstComponent, PictureComponent};