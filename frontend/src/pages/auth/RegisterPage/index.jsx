import Input from "../../../components/auth/Input";
import AuthButton from "../../../components/auth/AuthButton";
import AuthBottomLink from "../../../components/auth/AuthBottomLink";
import AuthHeader from "../../../components/auth/AuthHeader";
import AuthForm from "../../../components/auth/AuthForm";
import { LOGIN_ROUTER } from "../../../consts/consts";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegistration, isAuthSelector } from "../../../redux/slices/auth";
import { Navigate } from "react-router-dom";


export default function RegisterPage() {
    const dispatch = useDispatch()
    const isAuth = useSelector(isAuthSelector)

    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        formState: {
            errors
        }
    } = useForm({
        defaultValues: {
            login: '',
            name: '',
            surename: '',
            password: '',
            repeat_password: ''
        }
    })

    const onSubmit = (value) => {
        console.log(value);
        if (value.password === value.repeat_password) {
            clearErrors('repeat_password')
            const { repeat_password, ...data } = value
            dispatch(fetchRegistration(data))
            return
        }
        setError('repeat_password', {
            type: 'custome',
            message: 'Пароль не совпадает'
        })
    }

    if (isAuth) {
        return <Navigate to='/' />
    }

    return (

        <>
            <AuthHeader
                title={'Регистрация'}
                message={'Привет! Зарегистрируйся для использования сайта'}
            />
            <AuthForm
                onSubmit={handleSubmit(onSubmit)}
            >
                <Input
                    label={'Логин'}
                    error={Boolean(errors.login?.message)}
                    helperText={errors.login?.message}
                    {...register('login', {
                        required: "Укажите логин"
                    })}
                />
                <Input
                    label={'Имя'}
                    error={Boolean(errors.name?.message)}
                    helperText={errors.name?.message}
                    {...register('name', {
                        required: "Укажите имя"
                    })}
                />
                <Input
                    label={'Фамилия'}
                    error={Boolean(errors.surename?.message)}
                    helperText={errors.surename?.message}
                    {...register('surename', {
                        required: "Укажите фамилию"
                    })}
                />
                <Input
                    label={'Пароль'}
                    type={'password'}
                    error={Boolean(errors.password?.message)}
                    helperText={errors.password?.message}
                    {...register('password', {
                        required: "Укажите пароль"
                    })}
                />
                <Input
                    label={'Повторите пароль'}
                    type={'password'}
                    error={Boolean(errors.repeat_password?.message)}
                    helperText={errors.repeat_password?.message}
                    {...register('repeat_password', {
                        required: "Повторите пароль"
                    })}
                />
                <AuthButton value={'Зарегистрироваться'} type='submit' />
            </AuthForm>

            <AuthBottomLink
                textMessage={'Уже есть аккаунт?'}
                textLink={'Войти'}
                link={LOGIN_ROUTER}
            />

        </>
    )
}
