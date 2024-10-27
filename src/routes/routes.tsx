import App from "../App";
import AboutOurAcademy from "../pages/about-our-academy";
import MainPage from "../pages/main-page";
import OurAthletes from "../pages/our-athletes";
import Schedule from "../pages/schedule";

export const routes = [
    {
        path: '/', exact: true, element: <App />, children: [
            { path: '/', element: <MainPage /> },
            { path: '/nossa-academia', element: <AboutOurAcademy /> },
            { path: '/nossos-atletas', element: <OurAthletes /> },
            { path: '/horario-de-aulas', element: <Schedule /> },
        ]
    },
]