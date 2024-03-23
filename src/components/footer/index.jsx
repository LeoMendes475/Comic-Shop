import React from "react";
import './footer.css'

function Footer () {
    return (
        <div className="footer">
            <div className="footer-infos">
                <div className="footer-contact">
                    <h3>Phone</h3>
                    <p>064 610 0531</p>
                </div>

                <div className="footer-contact">
                    <h3>E-mail</h3>
                    <p>contact@comicstore.com.br</p>
                </div>

                <div className="footer-contact">
                    <h3>Social</h3>
                    <div>                   
                        <a href="#"><i class='bx bxl-facebook-circle'></i></a>
                        <a href="#"><i class='bx bxl-instagram'></i></a>
                        <a href="#"><i class='bx bxl-linkedin-square'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                    </div>
                </div>

                <div className="footer-contact">
                    <h3>Payment</h3>
                    <div>
                        <a href="#"><i class='bx bxl-paypal'></i></a>
                        <a href="#"><i class='bx bxl-visa'></i></a>
                        <a href="#"><i class='bx bxl-mastercard'></i></a>                                                        
                    </div>
                </div>
            </div>

            <div className="footer-copyright">
                <span>©Leonardo Mendes 2023</span>
            </div>
        </div>
    )
}

export default Footer