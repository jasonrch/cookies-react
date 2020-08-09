import React, {Component} from 'react';
import './Guide.css';

class Guide extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='main-cont'>
                <h1>Guide</h1>
                <table id='table-guide-cont'>
                    <tr>
                        <th>Cookie</th>
                        <th>Ingredients</th>
                    </tr>
                    <tr>
                        <td>Chocolate Chip</td>
                        <td>Chocolate, Flour, Oil, Butter, Pecans</td>
                    </tr>
                    <tr>
                        <td>Macadanium</td>
                        <td>Nuts, Flour, Oats, Oil, Butter, Pecans</td>
                    </tr>
                    <tr>
                        <td>Sugar Cookies</td>
                        <td>Nuts, Sugar, Flour, Oats, Oil, Butter, Pecans</td>
                    </tr>
                    </table>
            </div>
         );
    }
}
 
export default Guide;