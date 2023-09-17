import React from "react";

import { Dialogs, Message } from "components";

import './Home.scss';

const Home = () => (
    <section className="home">
        <Dialogs items={[
            {
                _id: 1,
                text: "It's really hard to design products by focus groups. A lot of times, people don't know what they want until you show it to them.",
                created_at: new Date(2023, 8, 14),
                user: {
                    _id: 101,
                    fullname: 'Steve Jobs',
                    avatar: 'https://i.pinimg.com/236x/e0/7d/06/e07d0688389b79d19a014fd12d9bea28--flat-design-illustration-illustration-styles.jpg',
                },
            },
            {
                _id: 2,
                text: "My goal wasn't to make a ton of money. It was to build good computers.",
                created_at: new Date(2023, 8, 16),
                user: {
                    _id: 102,
                    fullname: 'Steve Wozniak',
                    avatar: 'https://www.celebrityspeakers.com.au/content/uploads/2021/02/Wozniack-Steve-web.png',
                },
            }
        ]} />
        <Message 
            avatar='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'
            date={new Date(2023, 7, 28)}
            audio='https://ringtonlife.com/uploads/files/2022-10/ringtonlife.com_karna-poltergejst.mp3'
        />
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