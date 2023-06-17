import { useState } from "react";

export const useInput = ([initValue = '', textOnClick = 'Клик по input']) => {
    const [value, setValue] = useState(initValue)

    const onChange = (event) => {
        setValue(event.target.value);
        console.log(value);
    }

    const onClick = () => {
        console.log(textOnClick);
    }

    return {
        value,
        onChange,
        onClick
    }
}
