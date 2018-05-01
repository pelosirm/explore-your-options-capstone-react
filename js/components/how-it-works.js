import React from 'react';
import { Link } from 'react-router-dom'

export default function HowItWorks(props) {
    return (
    <section className="how-it-works">
        <div className="how-it-works-title">
            <h1>How it Works</h1>
        </div>
        <div className="row">
            <div className="col-6 category career-img">
            </div>
            <div className="col-6 details red">
                <p className="title-details"> search careers</p>
                <p> search by career and location to return:</p>
                <ul>
                    <li>national median salary</li>
                    <li>local median salary</li>
                    <li>education required</li>
                    <li>number of years of experience</li>
                </ul>
            </div>
        </div>
        <div className="row">
            <div className="col-6 category grad-img right">
            </div>
            <div className="col-6 details left gold">
                <p className="title-details"> search colleges</p>
                <p> search colleges by degree, speciality and location to return:</p>
                <ul>
                    <li> average cost</li>
                    <li> average debt</li>
                    <li> average salaray 10 years after graduation</li>
                    <li> program and cost details </li>
                </ul>
            </div>
        </div>
        <div className="row">
            <div className="col-6 category compare-img">
            </div>
            <div className="col-6 details">
                <p className="title-details"> compare</p>
                <p> compare colleges against desires career and calculate return on investment.</p>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <button className="button sign-up-btn"><Link to="sign-up"> Sign Up</Link></button>
            </div>
        </div>
    </section>
    )
}
