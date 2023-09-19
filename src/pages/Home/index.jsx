import React from "react";

import { Input, Button } from "antd";
import { TeamOutlined, FormOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Dialogs, Message } from "components";

import './Home.scss';

const Home = () => (
    <section className="home">
        <div className="chat">
            <div className="chat__sidebar">
                <div className="chat__sidebar-header">
                    <div>
                        <TeamOutlined />
                        <span>List of chats</span>
                    </div>
                    <FormOutlined />
                </div>
                
                <div className="chat__sidebar-search">
                    <Input.Search placeholder="input search text" />
                </div>

                <div className="chat__sidebar-dialogs">
                    <Dialogs items={[
                        {
                            _id: 1,
                            text: "It's really hard to design products by focus groups. A lot of times, people don't know what they want until you show it to them.",
                            created_at: new Date(2023, 8, 10),
                            user: {
                                _id: '76fee5e6598ccd5c',
                                fullname: 'Steve Jobs',
                                avatar: 'https://i.pinimg.com/236x/e0/7d/06/e07d0688389b79d19a014fd12d9bea28--flat-design-illustration-illustration-styles.jpg',
                            },
                        },
                        {
                            _id: 3,
                            text: "Let your joy be in your journey - not in some distant goal. ",
                            created_at: new Date(2023, 8, 11),
                            user: {
                                _id: '5b30ee31708e6ab7',
                                fullname: 'Tim Cook',
                                avatar: 'https://media.idownloadblog.com/wp-content/uploads/2018/07/Tim-Cook-memoji.jpg',
                            },
                        },
                        {
                            _id: 2,
                            text: "My goal wasn't to make a ton of money. It was to build good computers.",
                            created_at: new Date(2023, 8, 12),
                            user: {
                                _id: '1b20de31708e6ab7',
                                fullname: 'Steve Wozniak',
                                avatar: 'https://www.celebrityspeakers.com.au/content/uploads/2021/02/Wozniack-Steve-web.png',
                            },
                        },
                        {
                            _id: 3,
                            text: "Patience is a key element of success.",
                            created_at: new Date(2023, 8, 13),
                            user: {
                                _id: '6b30ee31708e6ab7',
                                fullname: 'Bill Gates',
                                avatar: 'https://pbs.twimg.com/profile_images/1674815862879178752/nTGMV1Eo_400x400.jpg',
                            },
                        },
                        {
                            _id: 3,
                            text: "Intelligence is the ability to avoid doing work, yet getting the work done.",
                            created_at: new Date(2023, 8, 14),
                            user: {
                                _id: '5bc55ee31708e6ab7',
                                fullname: 'Linus Torvalds',
                                avatar: 'https://avatars.githubusercontent.com/u/1024025?v=4',
                            },
                        },
                        {
                            _id: 3,
                            text: "Figuring out what the next big trend is tells us what we should focus on.",
                            created_at: new Date(2023, 8, 15),
                            user: {
                                _id: '2bc30ee31708e6ab7',
                                fullname: 'Mark Zuckerberg',
                                avatar: 'https://static.independent.co.uk/2022/08/22/10/mark%20zuckerberg%20metaverse%20avatar.png',
                            },
                        }
                    ]} />
                </div>
            </div>
            <div className="chat__dialog">
                <div className="chat__dialog-header">
                    <div />
                    <div className="chat__dialog-header-center">
                        <b className="chat__dialog-header-username">Steve Wozniak</b>
                        <div className="chat__dialog-header-status">
                            
                        </div>
                    </div>
                    <EllipsisOutlined />
                </div>

                <div className="chat__dialog-messages">
                    <Message 
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
                    />
                </div>

                <div className="chat__dialog-input"></div>
            </div>
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
        />
        <Message 
            avatar='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'
            date={new Date(2023, 7, 28)}
            audio='https://ringtonlife.com/uploads/files/2022-10/ringtonlife.com_karna-poltergejst.mp3'
        /> */}
    </section>
);

export default Home;