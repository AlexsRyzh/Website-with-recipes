import { motion } from 'framer-motion'
import PlusIcon from '@mui/icons-material/AddRounded';
import styles from './styles.module.scss'
import { useState } from 'react';


const variant_btn = {
    inFavorites: {
        background: '#4961DD'
    },
    outFavorites: {
        background: '#EFF3FE'
    }
}

const variant_icon = {
    inFavorites: {
        color: 'white',
        rotate: 45
    },
    outFavorites: {
        color: '#697CC1'
    }
}


const variant_label = {
    inFavorites: {
        color: 'white',
    },
    outFavorites: {
        color: '#697CC1'
    }
}


export default function FavouriteButton({
}) {

    const [isFavourite, setFavourite] = useState(false)

    return (
        <motion.button
            className={styles['btn-container']}
            initial={isFavourite ? 'inFavorites' : 'outFavorites'}
            animate={isFavourite ? 'inFavorites' : 'outFavorites'}
            variants={variant_btn}
            onClick={() => {
                setFavourite(v => !v)
            }}
            whileHover={{
                scale: 1.05
            }}
        >
            <motion.div
                variants={variant_icon}
            >
                <PlusIcon className={styles['icon']} />
            </motion.div>
            <motion.p
                className={styles['label']}
                variants={variant_label}
            >
                {!isFavourite ?
                    'Добавить в избранное' :
                    'Удалить из избранного'
                }
            </motion.p>
        </motion.button>
    )
}
