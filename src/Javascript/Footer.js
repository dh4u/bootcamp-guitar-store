import React from 'react';

class Footer extends React.Component{
    render(){
        
        return(
            <footer className="container leftAlign">
                <p>&copy; Guitarist Center* 2018-2019</p>
                <p><em style={{fontSize: 'smaller'}}>*Shamelessly taking content from <a href="https://www.fender.com/" target="_blank" rel="noopener noreferrer">Fender.com</a> and <a href="www.guitarcenter.com" target="_blank" rel="noopener noreferrer">Guitar Center</a>.</em></p>
            </footer>
        )
    }
}
export default Footer;