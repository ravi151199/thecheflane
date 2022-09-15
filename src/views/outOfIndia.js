import React from 'react'

// css
import '../style/outofIndia.scss'

//Images
import sarve from '../assets/images/sarve.png'
import img1 from '../assets/images/img1.png'
import img2 from '../assets/images/img2.png'
import img3 from '../assets/images/img3.png'
import list from '../assets/images/list.png'
import check from '../assets/images/check.png'
import x from '../assets/images/x.png'
import Navbar1 from '../components/Navbar1'

export default function OutOfIndia() {
    return (
        <>
        <Navbar1/>
        <section>
            <div className="banner">
                <div className="col-md-11 mx-auto">
                    <div className="d-md-flex align-items-center justify-content-center py-5">
                        <div className="col-lg-7">
                            <div className="text-primary">
                                <h2>Make your passion your business </h2>
                                <h2 className='mt-3'>Become an entrepreneur from the comfort of your home </h2>
                                <h2 className='mt-3'> Earn when you want to</h2>
                                <div className='text-black'>Ready to be your own boss and cook whenever you want?</div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <img height={'500px'} className='w-full' src={sarve} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-2 py-5">
                <div>
                    <div className='text-center'>
                        <h4 className='text-primary'>Why sell on The Chef Lane?</h4>
                        <p> We work with a single mission- to enhance the lives, and businesses, of home chefs.</p>
                    </div>
                    <div className="row text-center mt-5 px-5">
                        <div className="col-md-4">
                            <img src={img1} alt="" />
                            <p className='mt-2'>	Be Your Own Boss Work when you want to, how you want to, and from any location</p>
                        </div>
                        <div className="col-md-4">
                            <img src={img2} alt="" />
                            <p className='mt-4'>	Be Your Own Boss Work when you want to, how you want to, and from any location</p>
                        </div>
                        <div className="col-md-4">
                            <img src={img3} alt="" />
                            <p className='mt-1'>	Be Your Own Boss Work when you want to, how you want to, and from any location</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-3 py-5">
                <div>
                    <div className='text-center'>

                        <div className="col-md-7 mx-auto">
                            <h4 className='text-primary mb-5'>So Let’s Get Started</h4>
                            <div className="d-flex mt-3 fw-bold align-items-center">
                                <img src={list} alt="" />
                                <div className='ms-3 '>Sign up- Provide contact details, describe your business and upload your menu</div>
                            </div>
                            <div className="d-flex mt-3 fw-bold align-items-center">
                                <img src={list} alt="" />
                                <div className='ms-3'>We set up your Profile- so you don't have to create or maintain a website</div>
                            </div>
                            <div className="d-flex mt-3 fw-bold align-items-center">
                                <img src={list} alt="" />
                                <div className='ms-3'>Share the webpage on social media and with customers for easy access to your menu</div>
                            </div>
                            <div className="d-flex mt-3 fw-bold align-items-center">
                                <img src={list} alt="" />
                                <div className='ms-3'>Get Cooking- You’re in Business</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-4 py-5">
                <div>
                    <h4 className='text-primary text-center mb-5'>Compare different Packages </h4>
                    <div className="col-md-8 m-auto">
                        <div className="p-4 table-responsive bg-white ">
                            <table className="table  text-center">
                                <thead>
                                    <tr>
                                        <th className='border-end text-start' scope="col">Packages</th>
                                        <th className='border-end' scope="col">Listing </th>
                                        <th className='' scope="col">ListingPLUS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='border-bottom-0 text-start border-end'>Listing</td>
                                        <td className='border-bottom-0 border-end'> <img src={check} alt="" /> </td>
                                        <td className='border-bottom-0'><img src={check} alt="" /></td>
                                    </tr>
                                    <tr>
                                        <td className='border-bottom-0 text-start  border-end'>Ordering & Delivery</td>
                                        <td className='border-bottom-0 border-end'><img src={x} alt="" /></td>
                                        <td className='border-bottom-0 '><img src={check} alt="" /></td>
                                    </tr>
                                    <tr>
                                        <td className='border-bottom-0 text-start  border-end'>Unlimted updates to Menu</td>
                                        <td className='border-bottom-0  border-end'><img src={check} alt="" /></td>
                                        <td className='border-bottom-0'><img src={check} alt="" /></td>
                                    </tr>
                                    <tr>
                                        <td className='border-bottom-0 text-start  border-end'>Monthy Pricing</td>
                                        <td className='border-bottom-0 border-end'>USD 9.95</td>
                                        <td className='border-bottom-0'>Coming soon</td>
                                    </tr>
                                    <tr>
                                        <td className='border-bottom-0 text-start  border-end'>Yearly Pricing</td>
                                        <td className='border-bottom-0 border-end'>USD 99.5</td>
                                        <td className='border-bottom-0 '>Coming soon</td>
                                    </tr>
                                    <tr>
                                        <td className='border-bottom-0 text-start  border-end'>Transaction Fees</td>
                                        <td className='border-bottom-0 border-end'><img src={x} alt="" /></td>
                                        <td className='border-bottom-0'><img src={x} alt="" /></td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <div className='text-end'>*Terms & conditions apply</div>
                        <div className="text-center mt-4">
                            <h4>Sign Up and avail the 3 Months Free Trial with The Chef Lane </h4>
                            <button className="btn btn-primary px-4 mt-4">Get started</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="section-5 py-5">
                <div>
                    <h3 className="text-center text-primary mb-5">Frequently Asked Questions</h3>
                    <div className="col-md-10 m-auto">
                        <div className="bg-transparent accordion" id="accordionExample">
                            <div className="bg-transparent accordion-item">
                                <h2 className="bg-transparent accordion-header" id="headingOne">
                                    <button className="bg-transparent accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <h5 className="text-primary">What is The Chef Lane?</h5>
                                    </button>
                                </h2>
                                <div id="collapseOne" className="bg-transparent accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="bg-transparent accordion-body">
                                        Chef Lane is a platform that enables home cooks and foodies to sell food to customers and helps customers discover and order quality and authentic food from home chefs
                                    </div>
                                </div>
                            </div>
                            <div className="bg-transparent accordion-item">
                                <h2 className="bg-transparent accordion-header" id="headingTwo">
                                    <button className="bg-transparent accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <h5 className="text-primary">What are the requirements for signing up for The Chef Lane</h5>
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="bg-transparent accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="bg-transparent accordion-body">
                                        <strong>How can we get orders? </strong>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-transparent accordion-item">
                                <h2 className="bg-transparent accordion-header" id="three">
                                    <button className="bg-transparent accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#two" aria-expanded="false" aria-controls="two">
                                        <h5 className="text-primary">How can we get orders? </h5>
                                    </button>
                                </h2>
                                <div id="two" className="bg-transparent accordion-collapse collapse" aria-labelledby="three" data-bs-parent="#accordionExamp">
                                    <div className="bg-transparent accordion-body">
                                        <strong>This is the second item's accordion body.</strong> ow.
                                    </div>
                                </div>
                            </div>
                            <div className="bg-transparent accordion-item">
                                <h2 className="bg-transparent accordion-header" id="three">
                                    <button className="bg-transparent accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="" aria-expanded="false" aria-controls="">
                                        <h5 className="text-primary">How many days do I have to cook?</h5>
                                    </button>
                                </h2>
                            </div>
                            <div className="bg-transparent accordion-item">
                                <h2 className="bg-transparent accordion-header" id="three">
                                    <button className="bg-transparent accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="" aria-expanded="false" aria-controls="">
                                        <h5 className="text-primary">Do I need to have culinary training to sign up for the chef lane?
                                        </h5>
                                    </button>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}


