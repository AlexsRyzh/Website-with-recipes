import styles from './styles.module.scss'
import { Typography, Box, Button } from '@mui/material'
import useWindowSize from '../../../hooks/useWindowSize'
import Filter from '../Filter'
import BurgerMenu from '../BurgerMenu'
import { useState } from 'react'

export default function Header({ title, setFilter, canFilter }) {

  const { width } = useWindowSize()

  const [open, setOpen] = useState(false)

  return (
    <Box className={styles['container']}>
      <Typography className={styles['title']}>
        {title}
      </Typography>

      {width > 650 && canFilter &&
        <Filter
          setFilter={setFilter}
        />
      }
      {width < 650 && canFilter &&
        <>
          <Button
            variant="contained"
            className={styles['filter_btn']}
            onClick={() => { setOpen(true) }}
          >
            Фильтры
          </Button>

          <BurgerMenu
            open={open}
            setOpen={setOpen}
          >
            <Box className={styles['filter_burger_box']}>
              <Typography component={'h2'} className={styles['filter_title']}>
                Фильтры
              </Typography>
              <Filter
                setFilter={setFilter}
              />
            </Box>

          </BurgerMenu>

        </>



      }


    </Box>
  )
}
