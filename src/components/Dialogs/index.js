import React from "react";
import { orderBy } from "lodash";

import { DialogItem } from '../';

import './Dialogs.scss';

const Dialogs = ({ items, userId }) => (
    <div className="dialogs">
        {orderBy(items, ['created_at'], ['desc']).map(item => (
            <DialogItem
                key={item._id}
                unreaded={0}
                isMe={item.user_id === userId}
                {...item}
            />
        ))}
    </div>
);

export default Dialogs;