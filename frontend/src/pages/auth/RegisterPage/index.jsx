import Input from "../../../components/auth/Input";
import AuthButton from "../../../components/auth/AuthButton";
import AuthBottomLink from "../../../components/auth/AuthBottomLink";
import AuthHeader from "../../../components/auth/AuthHeader";
import AuthForm from "../../../components/auth/AuthForm";
import { LOGIN_ROUTER } from "../../../consts/consts";


export default function RegisterPage() {

    const submitHandler = (e) => {
        e.preventDefault()
    }

    return (

        <>
            <AuthHeader
                title={'Регистрация'}
                message={'Привет! Зарегистрируйся для использования сайта'}
            />
            <AuthForm
                onSubmit={submitHandler}
            >
                <Input label={'Логин'} />
                <Input label={'Имя'} />
                <Input label={'Фамилия'} />
                <Input label={'Пароль'} type={'password'} />
                <Input label={'Повторите пароль'} type={'password'} />
                <AuthButton value={'Зарегистрироваться'} />
            </AuthForm>

            <AuthBottomLink
                textMessage={'Уже есть аккаунт?'}
                textLink={'Войти'}
                link={LOGIN_ROUTER}
            />

        </>
    )
}
