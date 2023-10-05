import React from "react";

import { useSelector, useDispatch } from 'react-redux';
import { fetchMessages } from "../redux/slices/messagesSlice";

import { Messages as BaseMessages } from "components";

const Messages = () => {
    const dispatch = useDispatch();
    const { currentDialog } = useSelector( state => state.dialogs);
    const { items } = useSelector( state => state.messages);
    
    React.useEffect(() => {
        if(currentDialog){
            dispatch(fetchMessages(currentDialog));
        }
    }, [currentDialog]);

    return (
        <BaseMessages items={items} />
    );
}

export default Messages;