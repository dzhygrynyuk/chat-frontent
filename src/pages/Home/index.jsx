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
                    <Dialogs userId={0} />
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