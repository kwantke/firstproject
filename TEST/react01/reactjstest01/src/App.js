import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

const customer = [
    {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '고광규',
    'birthday': '911122',
    'gender': '남자',
    'job': '대학생'
    },
    {
        'id': 2,
        'image': 'https://placeimg.com/64/64/2',
        'name': '홀길동',
        'birthday': '911122',
        'gender': '남자',
        'job': '사무원'
    },
    {
        'id': 3,
        'image': 'https://placeimg.com/64/64/3',
        'name': '유재석',
        'birthday': '911122',
        'gender': '개발자',
        'job': '대학생'
    }

]

class App extends Component{
    render() {
        return (
            <div>
                {
                    customer.map( c=> {
                        return (
                            <Customer
                                key={c.id}
                                id={c.id}
                                image={c.image}
                                name={c.name}
                                birthday={c.birthday}
                                gender={c.gender}
                                job={c.job}
                            />
                        )
                    })
                }
            </div>
        );
    }
}
export default App;


/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="gray-background">
      <img src={logo} lat="logo" />
      <h2>Let's develop management system!</h2>
    </div>
  );
}

export default App;*/
