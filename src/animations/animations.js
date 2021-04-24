
export const fadeIn = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.35,
        }
    },
}

export const scaleIn = {
    hidden: {
        scale: 0.99
    },
    show: {
        scale: 1,
        transition: {
            duration: 0.5,
        }
    }
}

export const springIn = {
    hidden: {
        opacity: 0,
        x: -100,
        
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            x: {
                 type: "spring",
                 stiffness: 100,
                },
            default: {
                 duration: 0.75
                 },
            }
    }
}

