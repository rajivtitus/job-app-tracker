
export const fadeIn = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.75,
        }
    }
}

export const scaleIn = {
    hidden: {
        opacity: 0.5,
        scale: 0.95
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
        }
    }
}
