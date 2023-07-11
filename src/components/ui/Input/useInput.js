import { useState } from "react";

export const useInput = ([initValue = '', textOnClick = 'Клик по input']) => {
    const [value, setValue] = useState(initValue)

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const onClick = () => {
    }

    return {
        value,
        onChange,
        onClick
    }
}
