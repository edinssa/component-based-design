import './Footer.css';

 const Footer = ({text, color, height, width}) => {
  
    return (
    <div className='footer'>
        <button style={{backgroundColor:color, height, width}}>{text}</button>
    </div>
    )
}


export default Footer;