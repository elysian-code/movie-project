"use client";

import React, { useEffect, useState } from 'react'
import Header from './Header'
import Banner from './Banner'
import Row from './Row'
import { Movie } from '@/typings'
import { useRecoilValue } from 'recoil';
import { modalState, movieState } from '@/atoms/modalAtom';
import Modal from './Modal';
import Plans from './Plan';
import Loader from './Loader';

interface Props {
    netflixOriginals: Movie[]
    trendingNow: Movie[]
    topRated: Movie[]
    actionMovies: Movie[]
    comedyMovies: Movie[]
    horrorMovies: Movie[]
    romanceMovies: Movie[]
    documentaries: Movie[]
  }

const Page = ({netflixOriginals,
    actionMovies,
    comedyMovies,
    documentaries,
    horrorMovies,
    romanceMovies,
    topRated,
    trendingNow,
} : Props) => {

    // const { loading, user } = useAuth();
    
    const showModal = useRecoilValue(modalState);
    const movie = useRecoilValue(movieState);
    
    

    
    
    

  return (
    <div className={`relative h-screen bg-gradient-to-b lg:h-[140vh] ${
        showModal && '!h-screen overflow-hidden'
      }`}>
         <Header />
         <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
          <Banner netflixOriginals={netflixOriginals} />
          <section className="md:space-y-24">
            <Row title="Trending Now" movies={trendingNow} />
            <Row title="Top Rated" movies={topRated} />
            <Row title="Action Thrillers" movies={actionMovies} />
            <Row title="Comedies" movies={comedyMovies} />
            <Row title="Scary Movies" movies={horrorMovies} />
            <Row title="Romance Movies" movies={romanceMovies} />
            <Row title="Documentaries" movies={documentaries} />
          </section>
         </main>
         {showModal && <Modal />}
      </div>
  )
}

export default Page