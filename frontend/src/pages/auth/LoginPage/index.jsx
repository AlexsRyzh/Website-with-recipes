import Input from "../../../components/auth/Input";
import AuthButton from "../../../components/auth/AuthButton";
import AuthBottomLink from "../../../components/auth/AuthBottomLink";
import AuthHeader from "../../../components/auth/AuthHeader";
import AuthForm from "../../../components/auth/AuthForm";
import { REGISTER_ROUTER, RECIPES_ROUTER } from "../../../consts/consts";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth, isAuthSelector } from "../../../redux/slices/auth";
import { Navigate } from "react-router-dom";


export default function LoginPage() {
    const isAuth = useSelector(isAuthSelector)
    const dispatch = useDispatch()


    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isValid }
    } = useForm({
        defaultValues: {
            login: 'alex123',
            password: '12323edwe4'
        },
    })

    const onSubmit = (values) => {
        dispatch(fetchAuth(values))
    }

    if (isAuth) {
        return <Navigate to={RECIPES_ROUTER} />
    }

    return (
        <>
            <AuthHeader
                title={'Вход'}
                message={'Привет! Войдите в свой аккаунт'}
            />
            <AuthForm
                onSubmit={handleSubmit(onSubmit)}
            >
                <Input
                    label={'Логин'}
                    error={Boolean(errors.login?.message)}
                    helperText={errors.login?.message}
                    {...register('login', {
                        required: 'Укажите почту'
                    })}
                />
                <Input
                    label={'Пароль'}
                    type={'password'}
                    error={Boolean(errors.password?.message)}
                    helperText={errors.password?.message}
                    {...register('password', {
                        required: 'Укажите пароль'
                    })}
                />
                <AuthButton value={'Войти'} type="submit" />
            </AuthForm>


            <AuthBottomLink
                textMessage={'Ещё нет аккаунта?'}
                textLink={'Зарегистрироваться'}
                link={REGISTER_ROUTER}
            />
        </>
    );
}
