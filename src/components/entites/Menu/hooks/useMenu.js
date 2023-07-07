import { useState } from "react"

export const useMenu = (initValue = false) => {
    const [isShowMenu, setIsShowMenu] = useState(initValue)

    const openMenu = () => {
        setIsShowMenu(true)
    }

    const closeMenu = () => {
        setIsShowMenu(false)
    }

    return {
        isShowMenu,
        openMenu,
        closeMenu,
    }
}
