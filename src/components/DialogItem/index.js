import React from "react";
import classNames from "classnames";

import { Time, IconReaded } from '../';

import './DialogItem.scss';

const getAvatar = avatar => {
    if (avatar) {
        return (
            <img
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                alt="Image"
            />
        );
    } else {
        // make avatar
    }
};

const DialogItem = ({ user, message, unreaded }) => (
    <div className={classNames("dialogs__item", {
        "dialogs__item--online": user.isOnline
    })}>
        <div className="dialogs__item-avatar">
            {getAvatar("https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200")}
        </div>
        <div className="dialogs__item-info">
            <div className="dialogs__item-info-top">
                <b>Steve Jobs</b>
                <span><Time date={new Date(2023, 8, 14)} /></span>
            </div>
            <div className="dialogs__item-info-bottom">
                <p>It's really hard to design products by focus groups. A lot of times, people don't know what they want until you show it to them.</p>
                <IconReaded isMe={true} isReaded={true} />
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