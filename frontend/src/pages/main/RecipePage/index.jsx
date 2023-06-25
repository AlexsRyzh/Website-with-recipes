import React from 'react'
import Header from '../../../components/main/Header'
import { Box, Card, Divider, Typography } from '@mui/material'
import ProfileIcon from '@mui/icons-material/AccountCircleOutlined';
import imgHref from '../../../assets/recipe_img.png'
import styles from './styles.module.scss'
import Tags from '../../../components/main/Tags';
import IngredientRow from '../../../components/main/IngredientRow';

const recipe = {
    img: imgHref,
    title: 'Пирог с малиной',
    tags: ["Завтрак", "Обед", "Ужин"],
    ingredients: [
        {
            name: 'Темный шоколад',
            amount: '1'
        },
        {
            name: 'Мука сделанная из стеблей',
            amount: '3'
        },
        {
            name: 'Куриное яйцо',
            amount: '4'
        },
        {
            name: 'Грецкий орех',
            amount: '512'
        },

    ],
    cookingTime: 120,
    author: {
        name: 'Вероника',
        surname: 'Чернова'
    },
    desc: 'Один из самых популярных десертов в мире — брауни — был придуман в 1893 году на кухне легендарного отеля Palmer House в Чикаго. Этот пирог там пекут до сих пор по оригинальному рецепту, покрывая сверху абрикосовой глазурью. В домашней версии, впрочем, у брауни получается такая изумительная сахарная корочка, что глазировать ее было бы преступлением. У традиционных шоколадных брауни ванильный аромат, хрустящая корочка и влажная серединка. В торт также добавляют грецкие орехи или фисташки, а еще клюкву.'
}


export default function RecipePage() {


    return (
        <>
            <Header
                title={'Рецепт'}
                canFilter={false}
            />
            <Card elevation={6} className={styles['container']}>
                <img src={recipe.img} className={styles['img']} />

                <Box className={styles['profile_container']}>
                    <ProfileIcon className={styles['profile_icon']} />
                    <Typography className={styles['profile_author']}>{recipe.author.name} {recipe.author.surname}</Typography>
                </Box>

                <Typography className={styles['title']} component={'h1'}>{recipe.title}</Typography>

                <Tags
                    tags={recipe.tags}
                />

                <Box className={styles['ingredient_container']}>
                    <Typography className={styles['section_title']} component={'h2'}>Ингредиенты:</Typography>
                    <Box className={styles['ingredients_section']}>
                        {recipe.ingredients.map(({ name, amount }) => (
                            <IngredientRow
                                name={name}
                                amount={amount}
                            />
                        ))}
                    </Box>
                </Box>

                <Box className={styles['cooking_time_container']}>
                    <Typography className={styles['section_title']} component={'h2'}>
                        Время приготовления:
                    </Typography>
                    <Typography className={styles['section_title']}>
                        {recipe.cookingTime} минут
                    </Typography>
                </Box>


                <Box className={styles['desc_container']}>
                    <Typography className={styles['section_title']} component={'h2'}>
                        Описание:
                    </Typography>

                    <pre className={styles['desc_view']}>
                        {recipe.desc}
                    </pre>
                </Box>

            </Card>
        </>
    )
}
