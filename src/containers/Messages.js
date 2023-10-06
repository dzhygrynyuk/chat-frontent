import React from "react";

import { useSelector, useDispatch } from 'react-redux';
import { fetchMessages } from "../redux/slices/messagesSlice";

import { Messages as BaseMessages } from "components";

const Messages = () => {
    const dispatch = useDispatch();
    const { currentDialog } = useSelector( state => state.dialogs);
    const { items, isLoading } = useSelector( state => state.messages);
    const messagesRef = React.useRef(null);
    
    React.useEffect(() => {
        if(currentDialog){
            dispatch(fetchMessages(currentDialog));
        }
    }, [currentDialog]);

    React.useEffect(() => {
        messagesRef.current.scrollTo(0, 999999);
    }, [items]);

    return (
        <BaseMessages blockRef={messagesRef} items={items} isLoading={isLoading} />
    );
}

export default Messages;