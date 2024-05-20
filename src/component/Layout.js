import React from 'react';
import navbar from './Navbar';
import {  BrowserRouter as Router, Routes, Route, Link, Redirect, BrowserRouter } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import home from './Home'
import Next from './Next';
import './Layout.css'
// import { Link } from "react-router-native";


export default function Layout(props) {

    const navigate = useNavigate();
 const gotoNext = () =>{
    // alert();
    navigate("/Next")
 }

    return (
        <div>

            <div className='container heading mt-4'>

                <figure>
                    <blockquote class="blockquote">
                        <p>Repeatation is Strength and strength is respect </p>
                    </blockquote>
                    <figcaption class="blockquote-footer">
                        Quote by  <cite title="Source Title">Ganeshan Sir</cite>
                    </figcaption>
                </figure>
            </div>


            <div className='container mt-5 border border-primary p-3'>
                <h1>TalknWin</h1>
                <p>Hello! Welcome to the English App developed by Sujit and me for Ganeshn sir. With our application, you'll have various options to learn and practice English, correcting grammar and elaborating more effectively in simple words. It's designed to make English learning engaging and accessible for everyone. Let's embark on this journey together to enhance our English skills!</p>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Talk
                </a>
            </div>


            <div class="collapse text-white " id="collapseExample">
                <div class="card card-body text-warning d-flex flex-col mb-3 justify-content-center align-item-center m-3 ">
                    <div className=' p-3  d-flex flex-row  text-black justify-content-center '>
                        <div class="form-check mx-2 ">
                            <input class="form-check-input border border-black" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">A</label>
                        </div>
                        <div class="form-check mx-2">
                            <input class="form-check-input border-black" type="checkbox" value="" id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">D</label>
                        </div>
                        <div class="form-check mx-2">
                            <input class="form-check-input border-black" type="checkbox" value="" id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">I</label>
                        </div>
                        <div class="form-check mx-2">
                            <input class="form-check-input border-black" type="checkbox" value="" id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">P</label>
                        </div>
                        <div class="form-check mx-2">
                            <input class="form-check-input border-black" type="checkbox" value="" id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">Q</label>
                        </div>
                        <div class="form-check mx-2">
                            <input class="form-check-input border-black" type="checkbox" value="" id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">M</label>
                        </div>
                    </div>
                    <div>
                    <button type="button" class="btn btn-primary" onClick={gotoNext}>Next</button>
                    </div>
                </div>
            </div>















        </div>
    )
}
