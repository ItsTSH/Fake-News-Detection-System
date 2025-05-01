import React from 'react'
import { NavLink } from "react-router-dom"
export const Footer = () => {
  return (
    <div className="md:block dark:text-slate-300 ">
         <NavLink to='/about'className="text-textClr  text-md absolute  bottom-4 right-8 hover:text-gray-900 dark:hover:text-white" > 
              About
            </NavLink>
            <NavLink to='/terms&Conditions'className="text-textClr text-md absolute  bottom-4 right-28 hover:text-gray-900 dark:hover:text-white" > 
              Terms And Conditions
            </NavLink>
    </div>
  )
}

