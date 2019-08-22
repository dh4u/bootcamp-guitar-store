import { matchPath } from 'react-router-dom';

// set up some variables that determine whether or not we are on a path
const testCart = matchPath(window.location.pathname, {
    path: "/Cart",
    exact: true,
    strict: true
} );
//window.testCart = testCart;
const testCatalog = (matchPath(window.location.pathname, {
    path: "/Catalog",
    exact: true,
    strict: true
})) || (matchPath(window.location.pathname, {
    path: "/Catalog/:id",
    exact: true,
    strict: true
}));
//window.testCatalog = testCatalog;
const testHome = matchPath(window.location.pathname, {
    path: "/",
    exact: true,
    strict: true
} );
//window.testHome = testHome;
const testLocations = matchPath(window.location.pathname, {
    path: "/Locations",
    exact: true,
    strict: true
} );
//window.testLocations = testLocations;

//console.log(window.location.pathname + ":testCart:"+ testCart);
//console.log(window.location.pathname + ":testCatalog:"+ testCatalog);
//console.log(window.location.pathname + ":testHome:"+ testHome);
//console.log(window.location.pathname + ":testLocations:"+ testLocations);
export {testCart, testCatalog, testHome, testLocations}