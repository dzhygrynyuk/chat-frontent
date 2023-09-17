import React from "react";
import { orderBy } from "lodash";

import { DialogItem } from '../';

import './Dialogs.scss';

const Dialogs = ({ items, userId }) => (
    <div className="dialogs">
        {orderBy(items, ['created_at'], ['desc']).map(item => (
            <DialogItem
                key={item._id}
                user={item.user}
                message={item}
                unreaded={0}
                isMe={item.user_id === userId}
            />
        ))}
    </div>
);

export default Dialogs;