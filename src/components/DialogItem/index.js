import React from "react";
import classNames from "classnames";
import format from "date-fns/format";
import isToday from "date-fns/isToday";

import { IconReaded, Avatar } from '../';

const getMessageTime = created_at => {
    if(isToday(created_at)){
        return format(new Date(created_at), 'HH:mm');
    }else{
        return format(new Date(created_at), 'dd.MM.yyyy');
    }
}

const DialogItem = ({ _id, text, created_at, user, unreaded, isMe, currentDialogId, onSelect }) => (
    <div className={classNames("dialogs__item", {
        "dialogs__item--online": user.isOnline,
        "dialogs__item--selected": currentDialogId === _id
    })} onClick={() => onSelect(_id)}>
        <div className="dialogs__item-avatar">
            <Avatar user={user} />
        </div>
        <div className="dialogs__item-info">
            <div className="dialogs__item-info-top">
                <b>{user.fullname}</b>
                <span>{getMessageTime(created_at)}</span>
            </div>
            <div className="dialogs__item-info-bottom">
                <p>{text}</p>
                {isMe && <IconReaded isMe={true} isReaded={true} />}
                {unreaded > 0 && (
                    <div className="dialogs__item-info-bottom-count">
                        {unreaded > 9 ? "+9" : unreaded}
                    </div>
                )}
            </div>
        </div>
    </div>
);

export default DialogItem;