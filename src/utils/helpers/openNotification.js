import { notification } from 'antd';

export default ( {title, text, type = "info"} ) => {
    const messageObj = {
        message: title,
        description: text,
    };
    
    if(type === "success"){
        notification.success(messageObj);
    }else if(type === 'error'){
        notification.error(messageObj);
    }else if(type === 'warning'){
        notification.warning(messageObj);
    }else{
        notification.info(messageObj);
    }
};