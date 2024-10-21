import App from "../App";
import AboutOurAcademy from "../pages/about-our-academy";
import MainPage from "../pages/main-page";

export const routes = [
    {
        path: '/', exact: true, element: <App />, children: [
            { path: '/', element: <MainPage /> },
            { path: '/nossa-academia', element: <AboutOurAcademy /> },
        ]
    },
]