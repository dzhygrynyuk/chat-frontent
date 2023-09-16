import React from "react";

import { Message, DialogItem } from "components";

import './Home.scss';

const Home = () => (
    <section className="home">
        <div className="dialogs">
            <DialogItem
                user={{
                    fullname: "Федор Достоевский",
                    isOnline: true
                }}
                unreaded={4}
            />
        </div>  
        {/* <Message 
            avatar='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'
            text='Hello world!'
            date={new Date(2023, 7, 28)}
            attachments={[
                {
                    filename: "image.jpg",
                    url: "https://images.unsplash.com/photo-1694376015496-140430f9bf88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=60"
                },
                {
                    filename: "image.jpg",
                    url: "https://images.unsplash.com/photo-1691637111378-c3080d80df4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=100&q=60"
                },
                {
                    filename: "image.jpg",
                    url: "https://images.unsplash.com/photo-1635418921255-6ee53b68464c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=60"
                }
            ]}
        />
        <Message 
            avatar='https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'
            text='Lorem Ipsum is simply dummy text!'
            date={new Date(2023, 7, 29)}
            isMe={true}
            isReaded={true}
        />
        <Message 
            avatar='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'
            isTyping
        />
        <Message 
            avatar='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'
            attachments={[
                {
                    filename: "image.jpg",
                    url: "https://images.unsplash.com/photo-1694746027247-4b6f9c6b261d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                }
            ]}
            date={new Date(2023, 8, 12)}
        /> */}
    </section>
);

export default Home;