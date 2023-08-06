import AuthLayout from "../pages/auth/AuthLayout";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import MainLayot from "../pages/main/MainLayot";
import RecipesPage from "../pages/main/RecipesPage";
import RecipePage from "../pages/main/RecipePage";
import CreateRecipePage from '../pages/main/CreateRecipePage'
import {
    LOGIN_ROUTER,
    REGISTER_ROUTER,
    RECIPES_ROUTER,
    MY_RECIPES_ROUTER,
    FAVOURITES_RECIPES_ROUTER,
    CREATE_RECIPE_ROUTER
} from '../consts/consts'
import { Route, Routes, Navigate } from "react-router-dom";


/// http://localhost:3000/


function RootRouter() {
  return (
    <Routes>

        <Route element={<AuthLayout />}>
            <Route path={LOGIN_ROUTER} element={<LoginPage/>} />
            <Route path={REGISTER_ROUTER} element={<RegisterPage />} />
        </Route>

        <Route element={<MainLayot />}>
            <Route path={RECIPES_ROUTER} element={<RecipesPage />} />
            <Route path={MY_RECIPES_ROUTER} element={<RecipesPage />} />
            <Route path={FAVOURITES_RECIPES_ROUTER} element={<RecipesPage />} />
            <Route path={CREATE_RECIPE_ROUTER} element={<CreateRecipePage />} />
            <Route path={`${RECIPES_ROUTER}/:id/edit`} element={<CreateRecipePage />} />
            <Route path={`${RECIPES_ROUTER}/:id`} element={<RecipePage />} />
        </Route>

        <Route path={'/'} element={<Navigate to={RECIPES_ROUTER} />} />
        <Route path={'*'} element={<LoginPage/>} />
        
    </Routes>
  )
}

export default RootRouter


// const router = createBrowserRouter([
//     {
//         element: <AuthLayout />,
//         children: [
//             {
//                 path: LOGIN_ROUTER,
//                 element: <LoginPage />
//             },
//             {
//                 path: REGISTER_ROUTER,
//                 element: <RegisterPage />
//             }
//         ]
//     },
//     {
//         element: <MainLayot />,
//         children: [
//             {
//                 path: RECIPES_ROUTER,
//                 element: <RecipesPage />
//             },
//             {
//                 path: MY_RECIPES_ROUTER,
//                 element: <RecipesPage />
//             },
//             {
//                 path: FAVOURITES_RECIPES_ROUTER,
//                 element: <RecipesPage />
//             },
//             {
//                 path: CREATE_RECIPE_ROUTER,
//                 element: <CreateRecipePage />
//             },
//             {
//                 path: `${RECIPES_ROUTER}/:id/edit`,
//                 element: <CreateRecipePage />
//             },
//             {
//                 path: `${RECIPES_ROUTER}/:id`,
//                 element: <RecipePage />
//             },
//         ]
//     },
//     {
//         path: '/',
//         element: <Navigate to={'/recipes'} />
//     },
//     {
//         path: '*',
//         element: <p> Error 404 | page not found </p>
//     }
// ])
