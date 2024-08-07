import './List';

const list = ['Appel', 'Pear', 'Plums', 'Peach','Grape', 'Berry', 'Cherry']

export const List = () => (
  <div className='li'>
    <ul>
      {list.map((Item) => (
        <li key={Item}>{Item}</li>
      ))}
    </ul>
    {/* <ul>
      <li>{list[0]}</li>
      <li>{list[1]}</li>
      <li>{list[3]}</li>
    </ul> */}
  </div>
);
