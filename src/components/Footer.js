import React from "react"

export default function Footer() {

    return (
        
        <footer className="bg-dark text-center text-white mt-auto">
            <div className="footer-credits">
                <small>Created by Sugat Athawale </small>
            </div> 

            <div className="footer-socialMedia pb-1 pt-1 ">
                <a className="btn btn-outline-light btn-floating mr-4 ml-4 border-0" href="https://twitter.com/sugatathawale17" role="button">
                    <i className="bi bi-twitter"></i>
                </a>
                
                <a className="btn btn-outline-light btn-floating mr-4 ml-4 border-0" href="https://www.linkedin.com/in/sugat-athawale-870a51247/" role="button">
                    <i className="bi bi-linkedin"></i>
                </a>

                <a className="btn btn-outline-light btn-floating mr-4 ml-4 border-0" href="https://github.com/sugatathawale" role="button">
                    <i className="bi bi-github"></i>
                </a>
            </div> 
        </footer>
    )
}
