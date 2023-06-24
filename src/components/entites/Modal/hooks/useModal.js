import { useState } from "react"

export const useModal = (initValue = false) => {
    const [isShow, setIsShow] = useState(initValue)

    const openModal = () => {
        setIsShow(true)
    }

    const closeModal = () => {
        setIsShow(false)
    }

    return {
        isShow,
        openModal,
        closeModal,
    }
}
