import { useState } from "react";


export const useInput = (initValue = '') => {
    const [value, setValue] = useState(initValue)

    const onChange = (event) => {
        setValue(event.target.value);
    }

    return {
        value,
        onChange
    }
}