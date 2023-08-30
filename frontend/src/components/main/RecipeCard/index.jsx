import React from 'react'
import styles from './styles.module.scss'
import { Card, Typography, Box } from '@mui/material'
import Tags from '../Tags'
import { Link } from 'react-router-dom'
import TimeIcon from '@mui/icons-material/AccessTime';
import ProfileIcon from '@mui/icons-material/PermIdentityOutlined';
import PenIcon from '@mui/icons-material/CreateOutlined';
import DeleteIcon from '@mui/icons-material/ClearOutlined';
import { RECIPES_ROUTER } from '../../../consts/consts';
import FavouriteButton from '../FavouriteButton'

export default function RecipeCard({
    img,
    title,
    tags,
    cookingTime,
    author,
    isFavourite,
    toggleFavoure,
    canEdit,
    canAddFavourite
}) {
    return (
        <Card className={styles['container']}>

            {canEdit &&
                <Box className={styles['edit_container']}>
                    <PenIcon className={styles['edit_icon']} />
                    <DeleteIcon className={styles['edit_icon']} />
                </Box>
            }

            <img
                src={img}
                className={styles['img']}
            />
            <Box className={styles['inner_container']}>
                <Link to={`${RECIPES_ROUTER}/5`}>
                    <Typography className={styles['title']}>
                        {title}
                    </Typography>
                </Link>

                <Tags
                    tags={tags}
                />

                <Box className={styles['info_container']}>
                    <Box className={styles['flex-container']}>
                        <TimeIcon className={styles['icon']} />
                        <Typography component={'p'} className={styles['text']}>
                            {cookingTime} мин
                        </Typography>
                    </Box>
                    <Box className={styles['flex-container']}>
                        <ProfileIcon className={styles['icon']} />
                        <Typography component={'p'} className={styles['text']}>
                            {author?.name} {author?.surname}
                        </Typography>
                    </Box>
                </Box>

                {canAddFavourite &&
                    <FavouriteButton
                        isFavourite={isFavourite}
                        onClick={toggleFavoure}
                    />
                }
            </Box>



        </Card>
    )
}
