import React, { useMemo, useState } from "react";
import { useRoutes } from "react-router";
import classNames from "classnames";

import { getRoutes } from "../../routes";
import { Footer } from "./Footer";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";


const Layout = (props) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const routes = useMemo(() => getRoutes(props), [])
    const [collapsed, setSidebarCollapsed] = useState(false);
    const [showSidebar, setShowSidebar] = useState(true);
    const element = useRoutes(routes);

    const cs = classNames({
        "grid min-h-screen": true,
        "grid-cols-sidebar": !collapsed,
        "grid-cols-sidebar-collapsed": collapsed,
        "transition-[grid-template-columns] duration-300 ease-in-out": true,
    })


    return (
        <>
            <div className={cs}>
                <Sidebar collapsed={collapsed} setCollapsed={() => setSidebarCollapsed((prev) => !prev)} shown={showSidebar} />

                <div>
                    <Navbar onMenuClickButton={() => setShowSidebar((prev) => !prev)} />
                    <div className="m-2">
                        {element}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Layout;