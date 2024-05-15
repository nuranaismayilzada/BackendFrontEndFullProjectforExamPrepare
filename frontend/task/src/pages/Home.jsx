import React from 'react';
import { Navbar } from '../components/navbar/Navbar';
import { TwoSection } from '../components/sectiontwo/TwoSection';
import { Food } from '../components/foods/Food';
import { News } from '../components/news/News';
import { Gallery } from '../gallery/Gallery';
export const Home = () => {
  return (
    <>
       <Navbar/>
    <TwoSection/>
    <Food/>
    <News/>
    <Gallery/>
    </>

  )
}
