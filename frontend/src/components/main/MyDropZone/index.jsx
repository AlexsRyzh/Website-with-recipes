import styles from './styles.module.scss'
import AddPhotoIcon from '@mui/icons-material/AddPhotoAlternate';
import { useState } from 'react';
import { Box } from '@mui/material';
import clsx from 'clsx';

export default function MyDropZone({
    imgHref = null,
    setImgHref,
    constrainFile = 'image/*'
}) {


    const handleFileChange = (e) => {
        if (e.target.files) {

            const reader = new FileReader()
            reader.readAsDataURL(e.target.files[0])


            reader.addEventListener('load', () => {
                setImgHref(reader.result);
            });

        }
    };


    return (
        <label className={styles['container']} >
            <img className={styles['img']} src={imgHref} />
            <input type='file'
                className={styles['drop_zone']}
                onChange={handleFileChange}
                accept={constrainFile}
            />
            <Box className={clsx(
                styles['hover_box'],
                { [styles['hover_class']]: imgHref }
            )}>
                <AddPhotoIcon className={styles['icon']} />
            </Box>
        </label>
    )
}
