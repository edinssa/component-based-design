import './Button.css';

 const Button = (props) => {
  const  {
    text,color
  }=props

  return <button className='btn' style={{color:color}}>{text} </button>;
};

export default Button;
