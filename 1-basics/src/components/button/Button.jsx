import './Button.css';

 const Button = (props) => {
  const  {
    name,text
  }=props

  return (
    <div className='btn'>
      <button className={name}>{text}</button>
    </div>
  )
 
  };

export default Button;
