import {Header} from './Header';
import { Button } from './Button';
import { List } from './List';
import {Footer} from './Footer';

//import './App.css';

// rendering javascript object to .jsx
const contact = {
  name: 'Peter',
  phone: 123,
  email: 'myorchard@gmail.com'
}

export const App = () => (
  <>
    <div>
      <Header/>
      <Button> Click here </Button>
    </div>
    <main>
      <List />
    </main>
    <div>
      <Footer name ="right" text="increment"/>
      <Footer name ="center" text="decrement"/>
      <Footer name ="left" text="reset"/>
    </div>    
    <div>
      <p>name:{contact.name}</p>
      <p>phone number: {contact.phone}</p>
      <p>email address: {contact.email}</p>
    </div>
  </>
);
