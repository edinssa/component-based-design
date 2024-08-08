import List from './list/List';
import Button from './button/Button';
import Header from './header/Header';
import Footer from './footer/Footer';


const App = () => (
  <>
    <header>
      <Header/>
      <Button text="Click me"color="blue"/>
      <Button text="Clicked" color="red"/>
    </header>
    <main>
      <List/>
    </main>
    <footer>
      <Footer color="grey"text="Click to select" height='40px' width='150px'/>
    </footer> 
  </>
);

export default App;