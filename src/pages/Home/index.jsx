import React from "react";

import { TeamOutlined, FormOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Messages, Status, ChatInput } from "components";
import { Dialogs } from "containers";

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

                <div className="chat__sidebar-dialogs">
                    <Dialogs userId={0} items={[
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
                            _id: 2,
                            text: "Let your joy be in your journey - not in some distant goal. ",
                            created_at: new Date(2023, 8, 11),
                            user: {
                                _id: '5b30ee31708e6ab7',
                                fullname: 'Tim Cook',
                                avatar: 'https://media.idownloadblog.com/wp-content/uploads/2018/07/Tim-Cook-memoji.jpg',
                            },
                        },
                        {
                            _id: 3,
                            text: "My goal wasn't to make a ton of money. It was to build good computers.",
                            created_at: new Date(2023, 8, 12),
                            user: {
                                _id: '1b20de31708e6ab7',
                                fullname: 'Steve Wozniak',
                                avatar: 'https://www.celebrityspeakers.com.au/content/uploads/2021/02/Wozniack-Steve-web.png',
                            },
                        },
                        {
                            _id: 4,
                            text: "Patience is a key element of success.",
                            created_at: new Date(2023, 8, 13),
                            user: {
                                _id: '6b30ee31708e6ab7',
                                fullname: 'Bill Gates',
                                avatar: 'https://pbs.twimg.com/profile_images/1674815862879178752/nTGMV1Eo_400x400.jpg',
                            },
                        },
                        {
                            _id: 5,
                            text: "Intelligence is the ability to avoid doing work, yet getting the work done.",
                            created_at: new Date(2023, 8, 14),
                            user: {
                                _id: '5bc55ee31708e6ab7',
                                fullname: 'Linus Torvalds',
                                avatar: 'https://avatars.githubusercontent.com/u/1024025?v=4',
                            },
                        },
                        {
                            _id: 6,
                            text: "Figuring out what the next big trend is tells us what we should focus on.",
                            created_at: new Date(2023, 8, 15),
                            user: {
                                _id: '2bc30ee31708e6ab7',
                                fullname: 'Mark Zuckerberg',
                                avatar: 'https://static.independent.co.uk/2022/08/22/10/mark%20zuckerberg%20metaverse%20avatar.png',
                            },
                        },
                        {
                            _id: 7,
                            text: "It's really hard to design products by focus groups. A lot of times, people don't know what they want until you show it to them.",
                            created_at: new Date(2023, 8, 10),
                            user: {
                                _id: '76fee5e6598ccd5c',
                                fullname: 'Pichai Sundararajan',
                            },
                        },
                        {
                            _id: 8,
                            text: "Let your joy be in your journey - not in some distant goal. ",
                            created_at: new Date(2023, 8, 11),
                            user: {
                                _id: '5b9e1031708e6ab7',
                                fullname: 'Bjarne Stroustrup',
                            },
                        },
                        {
                            _id: 9,
                            text: "My goal wasn't to make a ton of money. It was to build good computers.",
                            created_at: new Date(2023, 8, 12),
                            user: {
                                _id: '1b21fd31708e6ab7',
                                fullname: 'Alan Turing',
                            },
                        },
                        {
                            _id: 10,
                            text: "Patience is a key element of success.",
                            created_at: new Date(2023, 8, 13),
                            user: {
                                _id: '5bc174e31708e6ab7',
                                fullname: 'Dennis Ritchie',
                            },
                        },
                        {
                            _id: 11,
                            text: "Intelligence is the ability to avoid doing work, yet getting the work done.",
                            created_at: new Date(2023, 8, 14),
                            user: {
                                _id: '5b111e31708e6ab7',
                                fullname: 'Larry Page',
                            },
                        },
                    ]} />
                </div>
            </div>
            <div className="chat__dialog">
                <div className="chat__dialog-header">
                    <div />
                    <div className="chat__dialog-header-center">
                        <b className="chat__dialog-header-username">Steve Wozniak</b>
                        <div className="chat__dialog-header-status">
                            <Status online />
                        </div>
                    </div>
                    <EllipsisOutlined />
                </div>

                <div className="chat__dialog-messages">
                    <Messages items={[1,2,3]}/>
                </div>

                <div className="chat__dialog-input">
                    <ChatInput />
                </div>
            </div>
        </div>
    </section>
);

export default Home;