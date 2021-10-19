import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer class="footer-distributed">

                <div class="footer-left">

                    <h3>CareZone<span>Hospital</span></h3>

                    <p class="footer-links">
                        <a href="#">Home</a>
                        ·
                        <a href="#">Blog</a>
                        ·
                        <a href="#">Pricing</a>
                        ·
                        <a href="#">About</a>
                        ·
                        <a href="#">Faq</a>
                        ·
                        <a href="#">Contact</a>
                    </p>

                    <p class="footer-company-name">CareZone Hospital &copy; 2021</p>
                </div>

                <div class="footer-center">

                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p><span>21 Revolution Street</span> Dhaka, Bangladesh</p>
                    </div>

                    <div>
                        <i class="fa fa-phone"></i>
                        <p>+1 555 123456</p>
                    </div>

                    <div>
                        <i class="fa fa-envelope"></i>
                        <p><a href="mailto:support@company.com">contact@carezonehospital.com</a></p>
                    </div>

                </div>

                <div class="footer-right">

                    <p class="footer-company-about">
                        <span>About the hospital</span>
                        CareZone Hospital is a most popular hospital in bangladesh for our best services
                    </p>

                    <div class="footer-icons">

                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-linkedin"></i></a>
                        <a href="#"><i class="fa fa-github"></i></a>

                    </div>

                </div>

            </footer>

        </div>
    );
};

export default Footer;