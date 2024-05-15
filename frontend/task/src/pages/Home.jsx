import React from 'react'
import { Navbar } from '../components/navbar/Navbar'
import { TwoSection } from '../components/sectiontwo/TwoSection'
import { Food } from '../components/foods/Food'

export const Home = () => {
  return (
    <>
       <Navbar/>
    <TwoSection/>
    <Food/>
    </>

  )
}
