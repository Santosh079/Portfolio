import React from 'react'
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div class="container">
                <div class="footer-column">
                    <h4>Explore My Work</h4>
                    <ul>
                        <li><a href="portfolio.html">Portfolio</a></li>
                        <li><a href="faq.html">FAQs</a></li>
                        <li><a href="about.html">About</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4>Get In Touch</h4>
                    <ul>
                        <li><a href="contact.html">Contact Me</a></li>
                        <li><a href="faq.html">FAQs</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4>Follow Me</h4>
                    <ul class="social-icons">
                        <li><a href="https://www.instagram.com/santoshsub_75/"><FaInstagram /></a></li>
                        <li><a href="https://twitter.com/subediwrites"><FaTwitter /></a></li>
                        <li><a href="https://www.facebook.com/profile.php?id=100027901607507"><FaFacebook /></a></li>
                        <li><a href="https://www.linkedin.com/in/santosh-subedi-291256252/"><FaLinkedin /></a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2023 Santosh. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
