import { Box, Tabs, Tab, Button, Typography, Divider } from '@mui/material'
import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { useLocation, useNavigate } from 'react-router'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import useWindowSize from '../../../hooks/useWindowSize'
import BurgerIcon from '@mui/icons-material/MenuRounded';
import {
    LOGIN_ROUTER,
    REGISTER_ROUTER
} from '../../../consts/consts'
import BurgerMenu from '../BurgerMenu'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLogout, isAuthSelector } from '../../../redux/slices/auth'

export default function Nav({ routes, name, surname, isAuth }) {
    const location = useLocation().pathname
    const { width } = useWindowSize()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [open, setOpen] = useState(false)


    useEffect(() => {
        setOpen(false)
    }, [location])

    if (width < 650) {
        return (
            <>
                <nav className={styles['mob_container']}>
                    <Button onClick={() => { setOpen(true) }}>
                        <BurgerIcon className={styles['mob_icon']} />
                    </Button>

                </nav>

                <BurgerMenu
                    open={open}
                    setOpen={setOpen}
                >
                    <Box className={styles['burger_container']}>

                        <Box className={styles['btn_container']}>
                            {!isAuth ?
                                <>
                                    <Link to={LOGIN_ROUTER}>
                                        <Button
                                            className={clsx(
                                                styles['btn'],
                                                styles['outlined_btn']
                                            )}
                                            variant='outlined'
                                        >
                                            Войти
                                        </Button>
                                    </Link>
                                    <Link to={REGISTER_ROUTER}>
                                        <Button
                                            className={clsx(
                                                styles['btn'],
                                                styles['contained_btn']
                                            )}
                                            variant="contained"
                                        >
                                            Создать аккаунт
                                        </Button>
                                    </Link>

                                </>
                                :
                                <>
                                    <Typography className={styles['name']}>
                                        {name} {surname}
                                    </Typography>
                                    <Button
                                        onClick={() => {
                                            dispatch(fetchLogout())
                                        }}
                                        className={clsx(
                                            styles['btn'],
                                            styles['contained_btn']
                                        )}
                                        variant="contained"
                                    >
                                        Выйти
                                    </Button>
                                </>
                            }

                        </Box>

                        <Divider />

                        <ul className={styles['tabs']}>
                            {routes.map((item) => (
                                isAuth >= item.private &&
                                <Link
                                    key={item.label}
                                    className={clsx(
                                        styles['tab'],
                                        { [styles['tab-selected']]: item.path === location }
                                    )}
                                    to={item.path}
                                >
                                    {item.label}
                                </Link>


                            ))}
                        </ul>

                        <Divider />
                    </Box>

                </BurgerMenu>
            </>

        )
    }


    return (
        <>
            <nav className={styles['container']}>
                <ul className={styles['tabs']}>
                    {routes.map((item) => (
                        isAuth >= item.private &&
                        <li
                            key={item.label}
                            onClick={() => {
                                navigate(item.path)
                            }}
                            className={clsx(
                                styles['tab'],
                                { [styles['tab-selected']]: item.path === location }
                            )}
                        >
                            {item.label}
                            {location === item.path ? (
                                <motion.div
                                    className={styles['underline']}
                                    layoutId="underline"
                                />
                            ) : null}

                        </li>


                    ))}
                </ul>

                <Box className={styles['btn_container']}>
                    {!isAuth ?
                        <>
                            <Link to={LOGIN_ROUTER}>
                                <Button
                                    className={clsx(
                                        styles['btn'],
                                        styles['outlined_btn']
                                    )}
                                    variant='outlined'
                                >
                                    Войти
                                </Button>
                            </Link>
                            <Link to={REGISTER_ROUTER}>
                                <Button
                                    className={clsx(
                                        styles['btn'],
                                        styles['contained_btn']
                                    )}
                                    variant="contained"
                                >
                                    Создать аккаунт
                                </Button>
                            </Link>

                        </>
                        :
                        <>
                            <Typography className={styles['name']}>
                                {name} {surname}
                            </Typography>
                            <Button
                                onClick={() => {
                                    dispatch(fetchLogout())
                                }}
                                className={clsx(
                                    styles['btn'],
                                    styles['contained_btn']
                                )}
                                variant="contained"
                            >
                                Выйти
                            </Button>
                        </>
                    }

                </Box>

            </nav>
        </>

    )
}
