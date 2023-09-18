import React from "react"
import instagramico from "./ico/instagram.png"
import linkedinico from "./ico/linkedin.png"

function Footer() {
    return (
      <footer className="flex bg-white rounded-lg shadow m-2 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 <a href="" className="hover:underline">developed by </a> Ismael Pontoriero.
          </span>
          <ul className="flex flex-wrap items-center font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li className=" flex max-h-2 p-4">
              <a href="#" className="hover:underline">
                <img src={instagramico} alt="Instagram" className="w-8 hover:bg-blue-800" />
              </a>
            </li>
            <li className="flex max-h-2 p-4 ">
              <a href="#" className="mr-4 hover:underline md:mr-6">
                <img src={linkedinico} alt="LinkedIn" className="w-8 hover:bg-blue-800" />
              </a>
            </li>
           
          </ul>
        </div>
      </footer>
    );
  }
  
  export default Footer;