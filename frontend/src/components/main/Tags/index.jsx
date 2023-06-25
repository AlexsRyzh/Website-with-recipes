import { css } from '@emotion/css'
import { Typography, Box } from '@mui/material'
import React from 'react'

const colors = {
    'Завтрак': {
        color: '#B67F5C',
        background: 'rgba(229, 106, 46, 0.25);'
    },
    'Обед': {
        color: '#82B27E',
        background: '#ECFAED'
    },
    'Ужин': {
        color: '#887CBA',
        background: '#F4F3F9'
    }
}


export default function Tags({
    tags
}) {
    return (
        <Box className={
            css`
                display: flex;
                gap: 10px;
            `
        }>
            {tags.map((tag) => (
                <Typography component={'p'} className={
                    css`
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 600;
                font-size: 12px;
                color: ${colors[tag].color};
                padding: 5px 15px;
                background: ${colors[tag].background};
                border-radius: 20px;
                cursor: pointer;
            `
                }>
                    {tag}
                </Typography>
            ))}

        </Box>

    )
}
