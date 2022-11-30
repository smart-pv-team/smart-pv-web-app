/**
 =========================================================
 * Material Dashboard 2 React - v2.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-dashboard-react
 * Copyright 2022 Creative Tim (https://www.creative-tim.com)

 Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

/**
 All of the routes for the Material Dashboard 2 React are added here,
 You can add a new route, customize the routes and delete the routes here.

 Once you add a new route on this file it will be visible automatically on
 the Sidenav.

 For adding a new route you can follow the existing routes in the routes array.
 1. The `type` key with the `collapse` value is used for a route.
 2. The `type` key with the `title` value is used for a title inside the Sidenav.
 3. The `type` key with the `divider` value is used for a divider between Sidenav items.
 4. The `name` key is used for the name of the route on the Sidenav.
 5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
 6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
 7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
 inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
 8. The `route` key is used to store the route location which is used for the react router.
 9. The `href` key is used to store the external links location.
 10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
 10. The `component` key is used to store the component of its route.
 */

// Material Dashboard 2 React layouts
import Dashboard from "containers/dashboardContainer";
import SignIn from "containers/singInContainer";
import SignUp from "containers/singUpContainer";
import Measurement from "./containers/measurementContainer";
import Users from "./containers/usersContainer";
import AddUsers from "./containers/addUserContainer";
import AddMeasurementDevice from "./containers/addMeasurementDeviceContainer";
import Algorithm from "./containers/algorithmContainer";
import PriorityAlgorithm from "./containers/algorithms/priorityAlgorithmContainer";
import TimePriorityAlgorithm from "./containers/algorithms/timePriorityAlgorithmContainer";
import RandomPriorityAlgorithm from "./containers/algorithms/randomAlgorithmContainer";
import IntervalAlgorithmContainer from "./containers/algorithms/intervalAlgorithmContainer";
import FarmContainer from "./containers/farmContainer";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard/>,
  },
  {
    type: "collapse",
    name: "Measurement",
    key: "measurement",
    icon: <Icon fontSize="small">bolt</Icon>,
    route: "/measurement",
    component: <Measurement/>,
  },
  {
    type: "collapse",
    name: "Users",
    key: "users",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/users",
    component: <Users/>,
  },
  {
    type: "collapse",
    name: "Add User",
    key: "add-user",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/add-user",
    component: <AddUsers/>,
  },
  {
    type: "collapse",
    name: "Add Measurement Device",
    key: "add-measurement-device",
    icon: <Icon fontSize="small">bolt</Icon>,
    route: "/add-measurement-device",
    component: <AddMeasurementDevice/>,
  },
  {
    type: "collapse",
    name: "Edit Measurement Device",
    key: "edit-measurement-device",
    icon: <Icon fontSize="small">bolt</Icon>,
    route: "/add-measurement-device/:id",
    component: <AddMeasurementDevice/>,
  },
  {
    type: "collapse",
    name: "Algorithm",
    key: "algorithm",
    icon: <Icon fontSize="small">motion_photos_auto</Icon>,
    route: "/algorithm",
    component: <Algorithm/>,
  },
  {
    type: "collapse",
    name: "Algorithm Priority",
    key: "algorithm-priority",
    icon: <Icon fontSize="small">motion_photos_auto</Icon>,
    route: "/algorithm/priority",
    component: <PriorityAlgorithm/>,
  },
  {
    type: "collapse",
    name: "Algorithm Time Priority",
    key: "algorithm-time-priority",
    icon: <Icon fontSize="small">motion_photos_auto</Icon>,
    route: "/algorithm/time-priority",
    component: <TimePriorityAlgorithm/>,
  },
  {
    type: "collapse",
    name: "Algorithm Random",
    key: "algorithm-random",
    icon: <Icon fontSize="small">motion_photos_auto</Icon>,
    route: "/algorithm/random",
    component: <RandomPriorityAlgorithm/>,
  },
  {
    type: "collapse",
    name: "Algorithm Interval",
    key: "algorithm-interval",
    icon: <Icon fontSize="small">motion_photos_auto</Icon>,
    route: "/algorithm/interval",
    component: <IntervalAlgorithmContainer/>,
  },
  {
    type: "collapse",
    name: "Farm",
    key: "farm",
    icon: <Icon fontSize="small">home</Icon>,
    route: "/farm",
    component: <FarmContainer/>,
  },
  {
    type: "collapse",
    name: "Consumption",
    key: "consumption",
    icon: <Icon fontSize="small">microwave_icon</Icon>,
    route: "/consumption",
    component: <div/>,
  },

  /*  {
      type: "collapse",
      name: "Notifications",
      key: "notifications",
      icon: <Icon fontSize="small">notifications</Icon>,
      route: "/notifications",
      component: <Notifications/>,
    },*/
  {
    type: "collapse",
    name: "About Us",
    key: "about-us",
    icon: <Icon fontSize="small">supervised_user_circle_icon</Icon>,
    route: "/about-us",
    component: <div/>,
  },
  {
    type: "collapse",
    name: "Sign Out",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn/>,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp/>,
  },
];

export default routes;
