export const errorTextAnimations = {
    initial: {
        opacity: 0,
        x: 10
    },
    animate: {
        opacity:1,
        x: 0,
    },
    exit: {
        opacity: 0,
        x: 10
    },
    transition: {
        duration: .5,
        delay: .2,
        type: "spring"
    }
}

export const errorIconAnimations = {
    initial: {
        x: 10,
        opacity: 0,
        scale: .5
    },
    animate: {
        x: 0,
        opacity: 1,
        scale: 1
    },
    exit: {
        x: 10,
        opacity: 0,
        scale: .5
    },
    transition: {
        duration: .5,
        type: "spring"
   }
 }


 export const selectListAnimations = {
    initial: {
        y: 10,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
    },
    exit: {
        y: 10,
        opacity: 0,
    },
    transition: {
        duration: .6,
        type: "spring",
        opacity: {
            duration: .1
        }
   }
 }

 export const checkboxAnimations = {
    initial: {
        scale: 0
    },
    animate: {
        scale: 1
    },
    exit: {
        scale: 0
    },
    transition: {
        duration: .5,
        type: "spring",
   }
 }


 export const clickableAnimations = {
    whileHover: {
        scale: 1,
    },
    whileTap: {
        scale: 0.95,
        opacity: .7
    }
}

export const accordionAnimations = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: .3
        }
    },
    exit: {
        opacity: 0,
        transition: {
            delay: 0
        }
    },transition: {
        duration: .2,
        type: "spring",
   }
}


export const fadeAnimations = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    }
}

export const modalAnimations = {
    initial: {
        opacity: 0,
        y:  50
    },
    animate: {
        opacity: 1,
        y: 0
    },
    exit: {
        opacity: 0,
        y: 50
    },
    transition: {
        duration: .5,
        type: "spring",
   }

}

export const tabsAnimations = {
    initial: {
        opacity: 0,
        y:  5
    },
    animate: {
        opacity: 1,
        y: 0
    },
    exit: {
        opacity: 0,
        y: 5
    },
    transition: {
        duration: .5,
        type: "spring",
   }
}


export const selectTextAnimations = {
    initial: {
        opacity: 0,
        y: -5,
    },
    animate: {
        opacity: 1,
        y: 0
    },
    exit: {
        opacity: 0,
        y: 5
    },
    transition: {
        y: {
            duration: .2,
            stiffness: 300,
            type: "spring",
        },
        opacity: {
            duration: .2
        }

   }
}


export const pageTranisitions = {
    initial: {
        opacity: 0,
        x: 50
    },
    animate: {
        opacity: 1,
        x: 0
    },
    exit: {
        opacity: 0,
        x: -50
    },
    transition: {
        duration: .5,
        type: "spring",
   }
}

export const loadingIconAnimations = {
    initial: {
        rotate: 0
    },
    animate: {
        rotate: 360
    },
    transition: {
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        duration: .5,
    }
}

export const loadingTextAnimations = {
    initial: {
        opacity: .5
    },
    animate: {
        opacity: 1
    },
    transition: {
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        duration: 1,
    }
}
