import React from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

import readedSvg from "assets/img/readed.svg";
import noReadedSvg from "assets/img/noreaded.svg";

import './Message.scss';

const Message = ({ avatar, user, text, date, isMe, isReaded, isTyping, attachments }) => (
    <div className={classNames("message", {
            "message--isme": isMe,
            "message--is-typing": isTyping,
            "message--image": attachments && attachments.length === 1
        })}>
        <div className="message__content">
            {isMe && isReaded ? (
                <img
                    className="message__icon-readed"
                    src={readedSvg}
                    alt="Readed icon"
                />
            ) : (
                <img
                    className="message__icon-readed message__icon-readed--no"
                    src={noReadedSvg}
                    alt="No readed icon"
                />
            )}
            <div className="message__avatar">
                <img src={avatar} alt={`Avatar ${user.fullname}`} />
            </div>
            <div className="message__info">
                {(text || isTyping) && (
                    <div className="message__bubble">
                        {text && <p className="message__text">{text}</p>}
                        {isTyping && (
                            <div className="message__typing">
                                <span />
                                <span />
                                <span />
                            </div>
                        )}
                    </div>
                )}
                <div className="message__attachments">
                    {attachments && attachments.map(item => (
                        <div className="message__attachments-item">
                            <img src={item.url} alt={item.filename} />
                        </div>
                    ))}
                </div>
                {date && <span className="message__date">{formatDistanceToNow(date)}</span>}
            </div>
        </div>
    </div>    
);

Message.defaultProps = {
    user: {}
};

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    user: PropTypes.object
};

export default Message;