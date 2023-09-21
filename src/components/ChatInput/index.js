import React from "react";
import PropTypes from "prop-types";
import { Button, Input } from "antd";
import { SmileOutlined, CameraOutlined, AudioOutlined, SendOutlined } from '@ant-design/icons';

import './ChatInput.scss';

const ChatInput = ({ online }) => {
    const [value, setValue] = React.useState('');

    return (
        <div className="chat-input">
            <div className="chat-input__smile-btn">
                <Button type="link" icon={<SmileOutlined />} />
            </div>
            <Input 
                onChange={e => setValue(e.target.value)}
                value={value}
                size="large" 
                placeholder="Input message text" 
            />
            <div className="chat-input__actions">
                <Button type="link" icon={<CameraOutlined />} />
                {value ? (
                    <Button type="link" icon={<SendOutlined />} />
                ) : (
                    <Button type="link" icon={<AudioOutlined />} />
                )}
            </div>
        </div>
    );
};

export default ChatInput;