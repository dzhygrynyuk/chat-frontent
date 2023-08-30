import React from "react";

import { Message } from "components";

import './Home.scss';

const Home = () => (
    <section className="home">
        <Message 
            avatar='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'
            text='Hello world!'
            date={new Date(2023, 7, 28)}
        />
        <Message 
            avatar='https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'
            text='Lorem Ipsum is simply dummy text!'
            date={new Date(2023, 7, 29)}
            isMe={true}
            isReaded={true}
        />
    </section>
);

export default Home;