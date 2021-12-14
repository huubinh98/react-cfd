import React from 'react'
import './footer.scss'
import Tags from './Tags'


export default function Footer() {
    let tagList = ['Beans', 'Carrots', 'Apples', 'Garlic', 'Mushrooms', 'Tomatoes', 'Chillies Peppers']

    return (
        <div className='footer container-fluid'>
            <div className='footer_list'>
                <div className='footer_list-item'>
                    <h3>Get In Touch</h3>
                    <ul className='item-list'>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Press Releases</li>
                        <li>Blog</li>
                    </ul>
                </div>

                <div className='footer_list-item'>
                    <h3>Connections</h3>
                    <ul className='item-list'>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Youtube</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>

                <div className='footer_list-item'>
                    <h3>Earnings</h3>
                    <ul className='item-list'>
                        <li>Become an Affiliate</li>
                        <li>Advertise your product</li>
                        <li>Sell on Market</li>
                    </ul>
                </div>

                <div className='footer_list-item'>
                    <h3>Account</h3>
                    <ul className='item-list'>
                        <li>Your account</li>
                        <li>Returns Centre</li>
                        <li>100% purchase protection</li>
                        <li>Chat with us</li>
                        <li>Help</li>
                    </ul>
                </div>

            </div>

            <div className='product-tags'>
                <h3>Product tags</h3>
                <div className='tag_list'>
                    <Tags tag={tagList} />
                </div>
            </div>

            <span className='coppy-right'>Copyright © 2020 petrbilek.com</span>
        </div>
    )
}
