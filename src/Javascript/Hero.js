import React from 'react';
import { testCatalog } from './ExaminePath.js';

class Hero extends React.Component{
    render(){
        var background = require('../Images/hero.jpg');
        if( testCatalog ){
            return(
                <>
                {/*<!-- Main jumbotron for a primary marketing message or call to action -->*/}
                <div className="jumbotron" style={{backgroundImage: 'url(' + background + ')'}}>
                    <div className="container leftAlign">
                        <h1 className="display-3 heroText">Guitarist Center*</h1>
                        <h4 className="heroText">"Guitarist Center has a great selection!" - Rawkin Dude</h4>
                        <p>&nbsp;</p>
                    </div>
                </div>
                </>
            )
        }else{
            return(
                <>
                {/*<!-- Main jumbotron for a primary marketing message or call to action -->*/}
                <div className="jumbotron" style={{backgroundImage: 'url(' + background + ')'}}>
                    <div className="container leftAlign">
                        <h1 className="display-3 heroText">Guitarist Center*</h1>
                        <h4 className="heroText">"Guitarist Center has a great selection!" - Rawkin Dude</h4>
                        <p><a className="btn btn-primary btn-lg" href="/Catalog" role="button">Visit our catalog &raquo;</a></p>
                    </div>
                </div>
                </>
            )
        }
    }
}
export default Hero;