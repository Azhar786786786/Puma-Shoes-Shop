import React from 'react'
import MainContent from './MainContent';
import first from '../Assets/Images/Army-Trainer-Unisex-Sneakers.avif';
import second from '../Assets/Images/Blktop-Rider-Multicolor-Unisex-Sneakers.avif';
import third from '../Assets/Images/Exotek-NITRO™-Base-Unisex-Sneakers.avif';
import fourth from '../Assets/Images/PUMA-180-STAPLE-Unisex-Sneakers.avif';
import fifth from '../Assets/Images/PUMA-24-FH-Rubber-Unisex-Cricket-Shoes.avif';
import sixth from '../Assets/Images/Slipstream-Unisex-Bball-Sneakers.avif';

const data = [
  { heading: "Trending Now", title: "Army-Trainer-Unisex-Sneakers", price: 1000, img: first },
  { heading: "Trending Now", title: "Blktop-Rider-Multicolor-Unisex-Sneakers", price: 2000, img: second },
  { heading: "Trending Now", title: "Exotek-NITRO™-Base-Unisex-Sneakers", price: 3000, img: third },
  { heading: "Trending Now", title: "PUMA-180-STAPLE-Unisex-Sneakers", price: 4000, img: fourth },
  { heading: "Trending Now", title: "PUMA-24-FH-Rubber-Unisex-Cricket-Shoes", price: 4500, img: { fifth } },
  { heading: "Trending Now", title: "Slipstream-Unisex-Bball-Sneakers", price: 55000, img: { sixth } }
];
function ShoeCentre() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <MainContent heading={data[0].heading} title={data[0].title} price={data[0].price} imgdisp={data[0].img} />
        <MainContent heading={data[1].heading} title={data[1].title} price={data[1].price} imgdisp={data[1].img} />
        <MainContent heading={data[2].heading} title={data[2].title} price={data[2].price} imgdisp={data[2].img} />
        <MainContent heading={data[3].heading} title={data[3].title} price={data[3].price} imgdisp={data[3].img} />
        <MainContent heading={data[4].heading} title={data[4].title} price={data[4].price} imgdisp={data[4].img.fifth} />
        <MainContent heading={data[5].heading} title={data[5].title} price={data[5].price} imgdisp={data[5].img.sixth} />
      </div>
    </>
  )
}

export default ShoeCentre