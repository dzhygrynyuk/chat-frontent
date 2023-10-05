import React from "react";
import PropTypes from "prop-types";
import { Empty } from "antd";

import { Message } from "../";

const Messages = ({ items }) => {
    return (
        <div>
            {items.length > 0 ? (
                items.map(item => <Message key={item._id} {...item} />)
            ) : (
                <Empty description="Open dialogue" />
            )}
        </div>
    );
};

Messages.propTypes = {
    items: PropTypes.array
};

export default Messages;