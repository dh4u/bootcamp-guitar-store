import React from 'react';
class Locations extends React.Component{
    render(){
        return(
            <div class="container">
                <div class="row">
                    <table class="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th scope="row" colspan="5">Our Locations</th>
                            </tr>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Street</th>
                                <th scope="col">City</th>
                                <th scope="col">State</th>
                                <th scope="col">Zip</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>123 Main</td>
                                <td>Anytown</td>
                                <td>Any State</td>
                                <td>12345</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>25 Park</td>
                                <td>New York</td>
                                <td>New York</td>
                                <td>20012</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>1600 Penn</td>
                                <td>Washington</td>
                                <td>DC</td>
                                <td>20008</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Locations;