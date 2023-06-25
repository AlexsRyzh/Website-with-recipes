import { Button, Card, Typography, Box, InputBase, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Close';
import styles from './styles.module.scss'
import MyDropZone from "../../../components/main/MyDropZone";
import { useState, useCallback, useMemo } from "react";
import Filter from "../../../components/main/Filter";
import clsx from "clsx";
import { SimpleMdeReact } from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";


export default function CreateRecipePage() {

    const [imgHref, setImgHref] = useState()
    const [tags, setTags] = useState([])
    const [ingredients, setIngrediens] = useState([])

    const [value, setValue] = useState("Initial value");

    const onChange = useCallback((e) => {
        setValue(e.target.value);
        console.log(e.target.value);
    }, []);


    const handleOnSubmit = (e) => {
        e.preventDefault()
        console.log({
            imgHref: imgHref,
            tags: tags,
            ingredients: ingredients
        });
    }


    const addNewIngredient = () => {
        setIngrediens(oldIngredients => ([
            ...oldIngredients,
            {
                name: '',
                amount: ''
            }
        ]))
    }


    const deleteIngredient = (id) => {
        return () => {
            console.log(id);
            console.log(ingredients);

            setIngrediens(oldIngredients => (
                oldIngredients.filter((_, index) => (
                    index !== id
                ))
            ))
        }
    }

    return (
        <Card elevation={5} className={styles['container']}>
            <form
                onSubmit={handleOnSubmit}
                className={styles['recipe_form']}
            >
                <MyDropZone
                    imgHref={imgHref}
                    setImgHref={setImgHref}
                />

                <Box className={styles['input_box']}>
                    <Typography className={styles['label']}>Название рецепта</Typography>
                    <InputBase className={styles['input']} />
                </Box>

                <Box className={styles['input_box']}>
                    <Typography className={styles['label']}>Тэги</Typography>
                    <Filter
                        setFilter={setTags}
                    />
                </Box>

                <Box className={styles['input_box']}>
                    <Typography className={styles['label']}>Ингредиенты</Typography>
                    <Box className={styles['list_ingredients']}>
                        {ingredients.map((ingredient, index) => (
                            <Box className={styles['ingredient_box']}>
                                <InputBase className={clsx(
                                    styles['input'],
                                    styles['input_name_ingredient']
                                )}
                                    placeholder="Название"
                                    value={ingredient.name}
                                    onChange={(e) => {
                                        setIngrediens(oldIngredients => {
                                            oldIngredients[index].name = e.target.value
                                            return [...oldIngredients]
                                        })
                                    }}
                                />
                                <InputBase className={clsx(
                                    styles['input'],
                                    styles['input_amount']
                                )}
                                    placeholder="Кол-во"
                                    onChange={(e) => {
                                        setIngrediens(oldIngredients => {
                                            oldIngredients[index].amount = e.target.value
                                            return [...oldIngredients]
                                        })
                                    }}
                                    value={ingredient.amount}
                                />
                                <DeleteIcon
                                    onClick={deleteIngredient(index)}
                                    className={styles['del_icon']}
                                />
                            </Box>
                        ))}

                        <button
                            type="button"
                            className={styles['btn_add_ingred']}
                            onClick={addNewIngredient}
                        >
                            Добавить ингредиент
                        </button>
                    </Box>
                </Box>

                <Box className={styles['input_box']}>
                    <Typography className={styles['label']}>Время приготовления</Typography>
                    <label className={styles['label']}>
                        <InputBase className={clsx(
                            styles['input'],
                            styles['input_time']
                        )} />
                        минут
                    </label>


                </Box>


                <Box className={styles['mde_box']}>
                    <Typography className={styles['label']}>Описание</Typography>
                    <InputBase
                        value={value}
                        onChange={onChange}
                        multiline
                        minRows={6}
                        className={clsx(
                            styles['input']
                        )}
                    />

                </Box>


                <Button
                    type="submite"
                    variant="contained"
                    className={styles['btn']}
                >
                    Сохранить
                </Button>
            </form>

        </Card>
    )
}
