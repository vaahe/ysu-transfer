import { useRoutes } from "react-router";
import { getRoutes } from "../../routes";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import classNames from "classnames";
import React, { useMemo, useState } from "react";



const Layout = (props) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const routes = useMemo(() => getRoutes(props), [])
    const [collapsed, setSidebarCollapsed] = useState(false);
    const [showSidebar, setShowSidebar] = useState(true);
    const element = useRoutes(routes);

    return (
        <div
            className={classNames({
                // 👇 use grid layout
                "grid min-h-screen": true,
                // 👇 toggle the width of the sidebar depending on the state
                "grid-cols-sidebar": !collapsed,
                "grid-cols-sidebar-collapsed": collapsed,
                // 👇 transition animation classes
                "transition-[grid-template-columns] duration-300 ease-in-out": true,
            })}
        >
            <Sidebar
                collapsed={collapsed}
                setCollapsed={() => setSidebarCollapsed((prev) => !prev)}
                shown={showSidebar}
            />
            <div className="">
                <Navbar onMenuClickButton={() => setShowSidebar((prev) => !prev)} />
                {element}
            </div>
        </div>
    );
};
export default Layout;