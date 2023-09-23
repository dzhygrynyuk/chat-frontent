import React from "react";
import { Dialogs as BaseDialogs } from "components";

const Dialogs = ({ items, userId }) => {
    const [inputValue, setValue] = React.useState("");
    const [filtred, setFiltredItems] = React.useState(Array.from(items));

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