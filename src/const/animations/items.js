export const buttonAnimations = {
    whileHover: { scale: 1.010 },
    whileTap: { scale: 0.95 },
}

export const inputAnimations = {
    whileHover: { scale: 1.015 },
    whileTap: { scale: 1 },
}

export const animationAscent = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
}

// ! В местах где нужна анимация развернуть константу [...buttonAnimations]