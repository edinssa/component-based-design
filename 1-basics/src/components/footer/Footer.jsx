import './Footer.css';


 const Footer = ({name, text}) => {
    return (
    <footer className='footer'>
        <button className={name}>{text}</button>
    </footer>
    )
}

export default Footer;