import React from 'react'
import MainContent from './MainContent';
import first from '../Assets/Images/Army-Trainer-Unisex-Sneakers.avif';
import second from '../Assets/Images/Blktop-Rider-Multicolor-Unisex-Sneakers.avif';
import third from '../Assets/Images/Exotek-NITRO™-Base-Unisex-Sneakers.avif';

function ShoeCentre() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <MainContent heading="Trending Now" title="Army-Trainer-Unisex-Sneakers" price="1000" imgdisp={first} />
        <MainContent heading="Trending Now" title="Blktop-Rider-Multicolor-Unisex-Sneakers" price="2000" imgdisp={second} />
        <MainContent heading="Trending Now" title="Exotek-NITRO™-Base-Unisex-Sneakers" price="3000" imgdisp={third} />
        <MainContent heading="Trending Now" title="Army-Trainer-Unisex-Sneakers" price="1000" imgdisp={first} />
        <MainContent heading="Trending Now" title="Blktop-Rider-Multicolor-Unisex-Sneakers" price="2000" imgdisp={second} />
        <MainContent heading="Trending Now" title="Exotek-NITRO™-Base-Unisex-Sneakers" price="3000" imgdisp={third} />
      </div>
    </>
  )
}

export default ShoeCentre