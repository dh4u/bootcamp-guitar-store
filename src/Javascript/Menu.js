import React from 'react';
import { testCart, testCatalog, testHome, testLocations } from './ExaminePath.js';

// i want to know the shopping cart status before I build the component.
let cartItems = JSON.parse(localStorage.getItem("cartItems"));
//console.log(cartItems);
//console.log(testCart);

// this will show a disabled Cart link
function cartLinkDisabled(){
    return(
        <li className="nav-item">
            <a className="nav-link disabled" href="/Cart">Cart</a>
        </li>
    )
}

// this will show an enabled Cart link
function cartLinkEnabled(){
    if( testCart && cartItems ){
        return(
            <li className="nav-item active">
                <a className="nav-link" href="/Cart">Cart <span className="sr-only">(current)</span></a>
            </li> 
        )
    }else{
        return(
            <li className="nav-item">
                <a className="nav-link" href="/Cart">Cart</a>
            </li> 
        )
    }
}

export function rerender(){
    this.forceUpdate();
}

class Menu extends React.Component{
    componentDidMount() {
        //console.log("ComponentDidMount")
        
    }

    render(){
        let CartComponent;

        if( !cartItems ){
            CartComponent = cartLinkDisabled();
        }else{
            CartComponent = cartLinkEnabled();
        }
        
        if(testCart){
            console.log('Menu says Cart');
            return(
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <a className="navbar-brand" href="/">Guitarist Center</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Catalog">Catalog</a>
                            </li>
                            {CartComponent}
                            <li className="nav-item">
                                <a className="nav-link" href="/Locations">Locations</a>
                            </li>
                        </ul>
                        {/* <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form> */}
                    </div>
                </nav>
            )
        }
    
        if(testCatalog){
            console.log('Menu says Catalog');
            return(
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <a className="navbar-brand" href="/">Guitarist Center</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/Catalog">Catalog <span className="sr-only">(current)</span></a>
                            </li>
                            {CartComponent}
                            <li className="nav-item">
                                <a className="nav-link" href="/Locations">Locations</a>
                            </li>
                        </ul>
                        {/* <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form> */}
                    </div>
                </nav>
            )
        }

        if(testHome){
            console.log('Menu says Home');
            return(
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <a className="navbar-brand" href="/">Guitarist Center</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Catalog">Catalog</a>
                            </li>
                            {CartComponent}
                            <li className="nav-item">
                                <a className="nav-link" href="/Locations">Locations</a>
                            </li>
                        </ul>
                        {/* <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form> */}
                    </div>
                </nav>
            )
        }
    
        if(testLocations){
            console.log('Menu says Locations');
            return(
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <a className="navbar-brand" href="/">Guitarist Center</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Catalog">Catalog</a>
                            </li>
                            {CartComponent}
                            <li className="nav-item active">
                                <a className="nav-link" href="/Locations">Locations</a>
                            </li>
                        </ul>
                        {/* <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form> */}
                    </div>
                </nav>
            )
        }
        
        if(!testCart && !testCatalog && !testHome && !testLocations){
            console.log('Menu says Undefined');
            return(
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <a className="navbar-brand" href="/">Guitarist Center</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Catalog">Catalog</a>
                            </li>
                            {CartComponent}
                            <li className="nav-item">
                                <a className="nav-link" href="/Locations">Locations</a>
                            </li>
                        </ul>
                        {/* <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form> */}
                    </div>
                </nav>
            )
        }
    }    
}
export default Menu;