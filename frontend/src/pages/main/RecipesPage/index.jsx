import { Box, Typography } from '@mui/material'
import { useState } from 'react'
import styles from './styles.module.scss'
import imgHref from '../../../assets/recipe_img.png'
import RecipeCard from '../../../components/main/RecipeCard'
import RecipesCardSkeleton from '../../../components/skeletons/RecipesCardSkeleton'
import { FAVOURITES_RECIPES_ROUTER, MY_RECIPES_ROUTER, RECIPES_ROUTER } from '../../../consts/consts'
import { useLocation } from 'react-router-dom'
import AddRecipeIcon from '@mui/icons-material/PostAddOutlined';

import AddFavouriteIcon from '@mui/icons-material/BookmarkAdd';

export default function RecipesPage() {
    const location = useLocation().pathname

    const status = 'done'

    const [recipes, setRecipes] = useState(new Array(6).fill({
        img: imgHref,
        title: 'Пирог с малиной',
        tags: ["Завтрак", "Обед", "Ужин"],
        cookingTime: 20,
        author: {
            name: 'Вероника',
            surname: 'Чернова'
        },
    }))


    if (status === 'loading') {
        return (
            <Box className={styles['card-container']}>
                {new Array(6).fill(0).map((_, index) => (
                    <RecipesCardSkeleton key={index} />
                ))}
            </Box>
        )
    }


    if (recipes.length === 0) {
        return (
            <>
                {location === RECIPES_ROUTER &&
                    <Box className={styles['empty_page_container']}>
                        <AddRecipeIcon className={styles['empty_page_icon']} />
                        <Typography className={styles['empty_page_text']}>
                            Создайте первый рецепт
                        </Typography>
                    </Box>
                }

                {location === MY_RECIPES_ROUTER &&
                    <Box className={styles['empty_page_container']}>
                        <AddRecipeIcon className={styles['empty_page_icon']} />
                        <Typography className={styles['empty_page_text']}>
                            Создайте первый рецепт
                        </Typography>
                    </Box>
                }

                {location === FAVOURITES_RECIPES_ROUTER &&
                    <Box className={styles['empty_page_container']}>
                        <AddFavouriteIcon className={styles['empty_page_icon']} />
                        <Typography className={styles['empty_page_text']}>
                            Добавьте первый рецепт в избранное
                        </Typography>
                    </Box>
                }
            </>

        )
    }

    return (
        <Box className={styles['card-container']}>
            {recipes.map((item) => (
                <RecipeCard
                    {...item}
                    canAddFavourite={true}
                    canEdit={true}
                />
            ))}
        </Box>
    )
}
