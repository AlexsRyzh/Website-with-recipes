import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router'
import Nav from '../../components/main/Nav'
import styles from './styles.module.scss'
import Header from '../../components/main/Header'
import {
    MY_RECIPES_ROUTER,
    RECIPES_ROUTER,
    FAVOURITES_RECIPES_ROUTER,
    CREATE_RECIPE_ROUTER,
} from '../../consts/consts'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMe, getUser, isAuthSelector } from '../../redux/slices/auth'

const routes = [
    {
        path: RECIPES_ROUTER,
        label: "Рецепты",
        private: false,
    },
    {
        path: MY_RECIPES_ROUTER,
        label: "Мои рецепты",
        private: true,
    },
    {
        path: FAVOURITES_RECIPES_ROUTER,
        label: "Избранное",
        private: true,
    },
    {
        path: CREATE_RECIPE_ROUTER,
        label: "Создать рецепт",
        private: true,
    }
]

export default function MainLayot() {
    const dispatch = useDispatch()
    const user = useSelector(getUser)
    const isAuth = useSelector(isAuthSelector)

    const location = useLocation().pathname
    const [filter, setFilter] = useState([])

    useEffect(() => {
        dispatch(fetchMe())
    }, [])


    return (
        <Box className={styles['container']}>
            <Nav
                isAuth={isAuth}
                routes={routes}
                name={user?.name}
                surname={user?.surename}
            />
            {routes.map((item) => (
                item.path === location &&
                <Header
                    title={item.label}
                    setFilter={setFilter}
                    canFilter={item.path !== CREATE_RECIPE_ROUTER}
                />
            ))}
            <Outlet />
        </Box>
    )
}
