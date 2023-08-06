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

    const location = useLocation().pathname
    const [filter, setFilter] = useState([])
    return (
        <Box className={styles['container']}>
            <Nav
                routes={routes}
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
