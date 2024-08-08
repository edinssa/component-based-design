import './List.css';

const list = ['Appel', 'Pear', 'Plums', 'Peach','Grape', 'Berry', 'Cherry']

 const List = () => (
  <div className='li'>
    <ul>
      {list.map((Item) => (
        <li key={Item}>{Item}</li>
      ))}
    </ul>
  </div>
);
export default List;
