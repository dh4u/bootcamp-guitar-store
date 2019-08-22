import React from 'react';
// export for others scripts to use

function ViewDetails(props){
    var rehersalspace = require('../Images/rehersalspace.jpg');
    return(
        <div className="col-md-4">
            <h2>Community</h2>
            <p>Rehearsal Space for rent</p>
            <h5 style={{textAlign: 'center'}}>The Cathedral Room</h5>
            <img src={rehersalspace} alt="The Cathedral Room" className="img-responsive img-thumbnail shadow p-3 mb-5 bg-white rounded" />
            
            <span>
                <span style={{color: `rgb(218, 184, 68)`}}>Large room. Designed for band rehearsals of 4-10 people.<br /></span>
                <strong>Gear Included in Rental:</strong>
                <br />
                <u>Drum Kit:</u> - Gretsch Renown 5-piece drum kit
                <br />Zildjian Sweet Ride, New Beat HH's, 16" &amp; 18" A crashes
                <br />
                <u>Bass Amp:</u> - TC Electronic BG250-110
                <br />
                <u>Guitar Amps:</u> - VOX AC30, Fender Ultimate Chorus 2x10
                <br />
                <u>Keyboard:</u> - Casio WK-45 unweighted 76-key
                <br />
                <u>Pro Gear:</u> - 3 SM58 mics w/ stands, 2 Mackie PA speakers, 12-Track Mixer
                <br />
                <br />
                <a href="https://www.7drumcity.com/space-rentals.html" target="_blank" rel="noopener noreferrer">Book now</a>
                <br />
            </span>
            <button className="btn btn-primary btn-lg" id="hideDetails" onClick={props.onClick}>Hide details &raquo;</button>
        </div>
    )
}

function HideDetails(props){
    var rehersalspace = require('../Images/rehersalspace.jpg');
    return(
        <div className="col-md-4">
            <h2>Community</h2>
            <p>Rehearsal Space for rent</p>
            <h5 style={{textAlign: 'center'}}>The Cathedral Room</h5>
            <img src={rehersalspace} alt="The Cathedral Room" className="img-responsive img-thumbnail shadow p-3 mb-5 bg-white rounded" />
            <button className="btn btn-primary btn-lg" id="viewDetails" onClick={props.onClick}>View details &raquo;</button>
        </div>
    )
}

class Landing extends React.Component{
    constructor(props){
        super(props);
        this.handleViewClick = this.handleViewClick.bind(this);
        this.handleHideClick = this.handleHideClick.bind(this);
        this.state = {showDetails: false}
    }

    handleViewClick(){
        this.setState({showDetails: true})
    }
    handleHideClick(){
        this.setState({showDetails: false})
    }
    
    render(){
        const showDetails = this.state.showDetails;
        let community;

        if(showDetails){
            community = <ViewDetails onClick={this.handleHideClick} /> 
        }else{
            community = <HideDetails onClick={this.handleViewClick} />
        }

        return(
            <div className="container">
                {/* <!-- Example row of columns --> */}
                <div className="row">
                    <div className="col-md-4">
                        <h2>Legend Profile</h2>
                        <p>Widely recognized as one of the most creative and influential musicians of the 20th century, <a href="https://jimihendrix.com" target="_blank" rel="noopener noreferrer">Jimi Hendrix</a> pioneered the explosive possibilities of the electric guitar. Hendrix’s innovative style of combining fuzz, feedback and controlled distortion created a new musical form. Because he was unable to read or write music, it is nothing short of remarkable that Jimi Hendrix’s meteoric rise in the music took place in just four short years. His musical language continues to influence a host of modern musicians, from George Clinton to Miles Davis, and Steve Vai to Jonny Lang.</p>
                        <p><a className="btn btn-primary btn-lg" href="https://jimihendrix.com" target="_blank" rel="noopener noreferrer" role="button">Learn More About Jimi &raquo;</a></p>
                    </div>
                    <div className="col-md-4">
                        <h2>Tutorial</h2>
                        <p>Learn to play the <a href="https://jimihendrix.com" target="_blank" rel="noopener noreferrer">Jimi Hendrix</a> Monterrey Pop Festival version of Howlin' Wolf's Killing Floor. </p>
                        <iframe title="Killing Floor" src="https://www.youtube.com/embed/yvZ2Ma8Kmg4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    {community}
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-4">
                        <h2>Legend Profile</h2>
                        <p><a href="https://www.jimmypage.com" target="_blank" rel="noopener noreferrer">Jimmy Page</a> was born January 9, 1944, in Heston, England. In 1965, he was asked to join the Yardbirds. In 1968 he formed a new band, renamed Led Zeppelin. The band toured the United States and released their first album, Led Zeppelin I, in 1969. Led Zeppelin soon developed a strong following. In addition to their recordings, Led Zeppelin was one of the most successful live acts of the 1970s. </p>
                        <p><a className="btn btn-primary btn-lg" href="https://www.jimmypage.com" target="_blank" rel="noopener noreferrer" role="button">Learn More About Jimmy &raquo;</a></p>
                    </div>
                    <div className="col-md-4">
                        <h2>Community</h2>
                        <p>Are you into 80s music? We are a cover band looking for a drummer.</p> <p>Join <em>Sweep the Leg Johnny!!</em> </p>
                        <p><a className="btn btn-primary btn-lg" href="mailto:NotARealAddress@aol.com" role="button">Contact Us &raquo;</a></p>
                    </div>
                    <div className="col-md-4">
                        <h2>Tutorial</h2>
                        <p>Learn to play Matthew Sweet's Girlfriend</p>
                        <iframe title="Girlfriend" src="https://www.youtube.com/embed/4mqDrRdyDLg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}
export default Landing;