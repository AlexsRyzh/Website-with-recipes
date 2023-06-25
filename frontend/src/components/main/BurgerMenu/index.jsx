import { AnimatePresence, motion } from "framer-motion";
import { useScrollLock } from "../../../hooks/useScrollLock";
import { useEffect } from "react";
import styles from './styles.module.scss'
import { Divider, Box } from "@mui/material";

export default function BurgerMenu({
    open,
    setOpen,
    children
}) {

    const [
        lockScroll,
        unlockScroll
    ] = useScrollLock()

    useEffect(() => {
        if (open) {
            lockScroll()
        } else {
            unlockScroll()
        }
    }, [open])

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className={styles['burger_background']}
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            setOpen(false)
                        }
                    }}
                    initial={{
                        background: 'rgba(0, 0, 0, 0)'
                    }}
                    animate={{
                        background: 'rgba(0, 0, 0, 0.4)'
                    }}
                    exit={{
                        background: 'rgba(0, 0, 0, 0)'
                    }}
                >
                    <motion.div
                        className={styles['burger_container']}
                        initial={{
                            transform: 'translateX(100%)'
                        }}
                        animate={{
                            transform: 'translateX(0%)'
                        }}
                        exit={{
                            transform: 'translateX(100%)'
                        }}
                        transition={{
                            duration: 0.1
                        }}
                    >
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
