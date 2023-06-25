import styles from './styles.module.scss'
import { Box, Typography, Divider } from '@mui/material'

export default function IngredientRow({ name, amount }) {
    return (
        <Box className={styles['ingredient_contanier']}>
            <Typography className={styles['ingredient_name']}>{name}</Typography>
            <Divider className={styles['divider']} />
            <Typography className={styles['ingredient_amount']}>{amount} шт</Typography>
        </Box>
    )
}
