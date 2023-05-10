import { Wallet } from "../pages/Wallet";
import { Settings } from "../pages/Settings";
import { Transactions } from "../pages/Transactions";
import { ErrorPage } from "../pages/ErrorPage";
import { Dashboard } from "../pages/Dashboard";

export const routes = [
    {
        path: "/",
        element: <Dashboard />
    },
    {
        path: "/wallet",
        element: <Wallet />,
    },
    {
        path: "/transactions",
        element: <Transactions />
    },
    {
        path: "/settings",
        element: <Settings />
    },
    {
        path: "*",
        element: <ErrorPage />
    }
]