import { createBrowserRouter } from "react-router-dom";
import RootView from "./views/Root";
import ErrorView from "./views/ErrorView";
import ButtonsView from "./views/ButtonsView";
import AccordionsView from "./views/AccordionView";
import InputsView from "./views/InputsView";
import SelectView from "./views/SelectView"
import TabsView from "./views/TabsView"
import DialoguesView from "./views/DialoguesView";
import CarouselView from "./views/CarouselView";
import AlertsView from "./views/AlertsView";
import RadioView from "./views/RadioView";
import FormView from "./views/FormView";
import CheckboxView from "./views/CheckboxView";
import LoadingView from "./views/LoadingView";

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <RootView />,
        errorElement: <ErrorView />,
        children: [
            {
                path: "/buttons",
                element: <ButtonsView />
            },
            {
                path: "/inputs",
                element: <InputsView />
            },
            {
                path: "/accordion",
                element: <AccordionsView />
            },
            {
                path: "/select",
                element: <SelectView />
            },
            {
                path: "/tabs",
                element: <TabsView />
            },
            {
                path: "/dialogues",
                element: <DialoguesView />
            },
            {
                path: "/carousel",
                element: <CarouselView />
            },
            {
                path: "/alerts",
                element: <AlertsView />
            },
            {
                path: "/radios",
                element: <RadioView />
            },
            {
                path: "/checkbox",
                element: <CheckboxView />
            },
            {
                path: "/loading",
                element: <LoadingView />
            },
            {
                path: "/forms",
                element: <FormView />
            }
        ]
    }
])

export default AppRouter;
