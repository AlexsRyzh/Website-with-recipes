import styles from './styles.module.scss'
import { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import RadioCheckBox from '../RadioCheckBox'

export default function Filter({
    setFilter
}) {

    const [value, setValue] = useState({
        "Затрак": false,
        "Обед": false,
        "Ужин": false
    })

    useEffect(() => {
        let arr = []
        for (let key in value) {
            if (value[key]) {
                arr.push(key)
            }
        }
        setFilter(arr)
    }, [value])


    return (
        <Box className={styles['filter_container']}>
            <RadioCheckBox
                label={'Завтрак'}
                color={'#E56A2E'}
                value={value['Завтрак']}
                onChange={() => (
                    setValue(v => (
                        {
                            ...v,
                            ['Завтрак']: !v['Завтрак']
                        }
                    ))
                )}
            />
            <RadioCheckBox
                label={'Обед'}
                color={'#4AB84B'}
                value={value['Обед']}
                onChange={() => (
                    setValue(v => (
                        {
                            ...v,
                            ['Обед']: !v['Обед']
                        }
                    ))
                )}
            />
            <RadioCheckBox
                label={'Ужин'}
                color={'#8676D0'}
                value={value['Ужин']}
                onChange={() => (
                    setValue(v => (
                        {
                            ...v,
                            ['Ужин']: !v['Ужин']
                        }
                    ))
                )}
            />
        </Box>
    )
}
