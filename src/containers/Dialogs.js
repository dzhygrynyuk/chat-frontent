import React from "react";

import { useSelector, useDispatch } from 'react-redux';
import { fetchDialogs } from "redux/slices/dialogsSlice";

import { Dialogs as BaseDialogs } from "components";

const Dialogs = ({ userId }) => {
    const dispatch = useDispatch();
    const { items } = useSelector( state => state.dialogs);
    const [inputValue, setValue] = React.useState("");
    const [filtred, setFiltredItems] = React.useState(Array.from(items));
    
    React.useEffect(() => {
        if(!items.length){
            dispatch(fetchDialogs());
        }else{
            setFiltredItems(Array.from(items));
        }
    }, [items]);

    const onChangeInput = value => {
        setFiltredItems(
            items.filter(
                dialog => dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
            )
        );
        setValue(value);
    };

    return (
        <BaseDialogs
            userId={userId}
            items={filtred}
            onSearch={onChangeInput}
            inputValue={inputValue}
        />
    );
}

export default Dialogs;