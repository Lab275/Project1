import { Route, Switch } from "react-router-dom";

import HomePage from "../../pages/home/HomePage";
import ITSupport from "../../pages/ITsupport/ITsupport";
import React from "react";
import UserPage from "../../pages/User/UserPage";

const PageSwitch = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={HomePage} />
            <Route exact path={'/support'} component={ITSupport} />
            <Route exact path={'/userpage'} component={UserPage} />
            
        </Switch>
    );
}

export default PageSwitch;