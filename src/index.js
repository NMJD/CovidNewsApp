import React from 'react';
import ReactDOM from 'react-dom';
import styles from './style.scss';
import News from './News';
import Header from './Header';



class Tout extends React.Component {

    render() {

             return (  
           <div>
            <Header />
            {
            <News />
            }
           </div>
        );
    }
}

ReactDOM.render(<Tout />, document.getElementById('root'));
