import { Wallet } from "../pages/Wallet";
import { Settings } from "../pages/Settings";
import { Transactions } from "../pages/Transactions";
import { ErrorPage } from "../pages/ErrorPage";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Messages } from "../pages/Messages";

export const getRoutes = (props) => {
    return [
        {
            path: "/",
            element: <Dashboard state={props.state} transferTokens={props.transferTokens} />,
        },
        {
            path: "/wallet",
            element: <Wallet state={props.state} />,
        },
        {
            path: "/transactions",
            element: <Transactions state={props.state} />
        },
        {
            path: "/messages",
            element: <Messages />
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
}