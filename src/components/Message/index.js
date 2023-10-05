import React from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";

import { convertCurrentTime } from "utils/helpers";
import { Time, IconReaded, Avatar } from '../';

import waveSvg from "assets/img/wave.svg";
import playSvg from "assets/img/play.svg";
import pauseSvg from "assets/img/pause.svg";

import './Message.scss';

const MessageAudio = ({ audioSrc }) => {
    const audioElement = React.useRef(null);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [progress, setProgress] = React.useState(0);
    const [currentTime, setCurrentTime] = React.useState(0);

    const togglePlay = () => {
        if( !isPlaying ){
            audioElement.current.play();
        }else{
            audioElement.current.pause();
        }
    }

    React.useEffect(() => {
        audioElement.current.addEventListener('playing', () => {
            setIsPlaying(true);
        }, false);

        audioElement.current.addEventListener('ended', () => {
            setIsPlaying(false);
            setProgress(0);
            setCurrentTime(0);
        }, false);

        audioElement.current.addEventListener('pause', () => {
            setIsPlaying(false);
        }, false);

        audioElement.current.addEventListener('timeupdate', () => {
            const duration = (audioElement.current && audioElement.current.duration) || 0;
            setCurrentTime(audioElement.current.currentTime);
            setProgress((audioElement.current.currentTime / duration) * 100);
        });
    }, []);

    return(
        <div className="message__audio">
            <audio ref={audioElement} src={audioSrc} preload="auto" />
            <div className="message__audio-progress" style={{ width: progress + "%" }} />
            <div className="message__audio-info">
                <div className="message__audio-btn">
                    <button onClick={togglePlay}>
                        {isPlaying ? (
                            <img src={pauseSvg} alt="Pause" />
                        ) : (
                            <img src={playSvg} alt="Play" />
                        )}
                    </button>    
                </div>
                <div className="message__audio-wave">
                    <img src={waveSvg} alt="Wave svg" />
                </div>
                <span className="message__audio-duration">{convertCurrentTime(currentTime)}</span>
            </div>
        </div>
    );
};

const Message = ({ avatar, user, text, date, isMe, isReaded, isTyping, attachments, audio }) => {
    return(
        <div className={classNames("message", {
                "message--isme": isMe,
                "message--is-typing": isTyping,
                "message--is-audio": audio,
                "message--image": attachments && attachments.length === 1
            })}>
            <div className="message__content">
                <IconReaded isMe={isMe} isReaded={isReaded} />
                <div className="message__avatar">
                    <Avatar user={user} />
                </div>
                <div className="message__info">
                    {(text || audio || isTyping) && (
                        <div className="message__bubble">
                            {text && <p className="message__text">{text}</p>}
                            {isTyping && (
                                <div className="message__typing">
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            )}
                            {audio && <MessageAudio audioSrc={audio} />}
                        </div>
                    )}
                    <div className="message__attachments">
                        {attachments && attachments.map(item => (
                            <div className="message__attachments-item">
                                <img src={item.url} alt={item.filename} />
                            </div>
                        ))}
                    </div>
                    {date && <span className="message__date"><Time date={date} /></span>}
                </div>
            </div>
        </div>    
    );
};

Message.defaultProps = {
    user: {}
};

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    user: PropTypes.object,
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool,
    isTyping: PropTypes.bool,
    attachments: PropTypes.array,
    audio: PropTypes.string,
};

export default Message;