import Input from "../../../components/auth/Input";
import AuthButton from "../../../components/auth/AuthButton";
import AuthBottomLink from "../../../components/auth/AuthBottomLink";
import AuthHeader from "../../../components/auth/AuthHeader";
import AuthForm from "../../../components/auth/AuthForm";
import { REGISTER_ROUTER } from "../../../consts/consts";



export default function LoginPage() {

  const submitHandler = (e) => {
    e.preventDefault()
  }


  return (
    <>
      <AuthHeader
        title={'Вход'}
        message={'Привет! Войдите в свой аккаунт'}
      />
      <AuthForm
        onSubmit={submitHandler}
      >
        <Input label={'Логин'} />
        <Input label={'Пароль'} type={'password'} />
        <AuthButton value={'Войти'} />
      </AuthForm>


      <AuthBottomLink
        textMessage={'Ещё нет аккаунта?'}
        textLink={'Зарегистрироваться'}
        link={REGISTER_ROUTER}
      />
    </>
  );
}
