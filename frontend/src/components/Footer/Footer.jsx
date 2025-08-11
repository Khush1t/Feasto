import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {

    const imageClick = (() => {
        window.open('https://github.com/khush1t', '_blank');

    })
    const imageClick1 = (() => {
        window.open('https://www.linkedin.com/in/khush1t', '_blank');
    })

    const imageClick2 = (() => {
        window.open('https://www.x.com/Khush_1t', '_blank');
    })

    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <div className="logo">
                        <img src={assets.logo} alt="" />
                    </div>
                    <p> Healthy Bites offers a diverse selection of food options, meticulously crafted to provide a balanced amount of
                        dietary protein and fiber.Our menu is designed to delight your taste buds while promoting overall well-being.
                        Each dish is thoughtfully prepared using high-quality ingredients, ensuring you enjoy both exceptional flavor and
                        nutritional benefits. At Healthy Bites, we believe that healthy eating should never compromise on taste.</p>
                    <div className="footer-social-icons">
                        <img src={assets.profile_icon} alt="" onClick={() => imageClick()} style={{ cursor: 'pointer' }} />
                        <img src={assets.linkedin_icon} alt="" onClick={() => imageClick1()} style={{ cursor: 'pointer' }} />
                        <img src={assets.twitter_icon} alt="" onClick={() => imageClick2()} style={{ cursor: 'pointer' }} />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91-8800170875</li>
                        <li>khushwant0328@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            {/* <p className="footer-copyright">Copyright 2025 © Feasto - All Right Reserved.</p> */}
        </div>
    )
}

export default Footer