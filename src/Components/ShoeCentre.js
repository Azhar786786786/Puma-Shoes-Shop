import React from 'react'
import MainContent from './MainContent';
import first from '../Assets/Images/AG-Youth-Football-Boots.avif';
import second from '../Assets/Images/Anzarun-Lite-Slip-On-Unisex-Sneakers.avif';
import third from '../Assets/Images/BLSTR-Dresscode-Womens-Sneakers.avif';
import fourth from '../Assets/Images/BMW-M-Motorsport-Bao-Kart-Kids-Driving-Shoes.avif';
import fifth from '../Assets/Images/Better-Foam-Prowl-Slip-On-Womens-Running-Shoes.avif';
import sixth from '../Assets/Images/Better-Foam-Prowl-Slip-On-Womens-Running-Shoes1.avif';
import seventh from '../Assets/Images/Blktop-Rider-Multicolor-Unisex-Sneakers1.avif';
import eight from '../Assets/Images/Blktop-Rider-Multicolor-Unisex-Sneakers2.avif';
import nine from '../Assets/Images/Comet-2-Alt-Beta-Unisex-Running-Shoes.avif';
import ten from '../Assets/Images/Genetics-Youth-Basketball-Shoes.avif';
import eleven from '../Assets/Images/Cruise-Rider-Peony-Girls-Sneakers.avif';
import twelve from '../Assets/Images/Cruise-Rider-Peony-Girls-Sneakers1.avif';
import thirteen from '../Assets/Images/Cruise-Rider-Silk-Road-Womens-Sneakers.avif';
import fourteen from '../Assets/Images/Cruise-Rider-Silk-Road-Womens-Sneakers1.avif';
import fifteen from '../Assets/Images/Deuce-Unisex-Indoor-Sports-Shoes.avif';
import sixteen from '../Assets/Images/Deuce-Unisex-Indoor-Sports-Shoes1.avif';
import seventeen from '../Assets/Images/Dynamite-Slip-On-Mens-Sneakers.avif';
import eighteen from '../Assets/Images/Disperse-XT-2-Off-Season-Mens-Training-Shoes.avif';
import nineteen from '../Assets/Images/Disperse-XT-3-Womens-Training-Shoes.avif';
import twenty from '../Assets/Images/Electron-E-Unisex-Sneakers.avif';
import twentyone from '../Assets/Images/Enlighten-Strap-Womens-Training-Shoes.avif';
import twentytwo from '../Assets/Images/Evolve-Run-Mesh-Youth-Sneakers.avif';
import twentythree from '../Assets/Images/Ferrari-Drift-Cat-Decima-Youth-Motorsport-Sneakers.avif';
import twentyfour from '../Assets/Images/Future-Rider-Soft-Womens-Sneakers.avif';

const data = [
  { heading: "Trending Now", title: "AG-Youth-Football-Boots", price: 1000, img: first },
  { heading: "Trending Now", title: "Anzarun-Lite-Slip-On-Unisex-Sneakers", price: 2000, img: second },
  { heading: "Trending Now", title: "BLSTR-Dresscode-Womens-Sneakers", price: 3000, img: third },
  { heading: "Trending Now", title: "BMW-M-Motorsport-Bao-Kart-Kids-Driving-Shoes", price: 4000, img: fourth },
  { heading: "Trending Now", title: "Better-Foam-Prowl-Slip-On-Womens-Running-Shoes", price: 4500, img: { fifth } },
  { heading: "Trending Now", title: "Better-Foam-Prowl-Slip-On-Womens-Running-Shoes1", price: 55000, img: { sixth } },
  { heading: "Trending Now", title: "Blktop-Rider-Multicolor-Unisex-Sneakers1", price: 6000, img: seventh },
  { heading: "Trending Now", title: "Blktop-Rider-Multicolor-Unisex-Sneakers2", price: 3000, img: eight },
  { heading: "Trending Now", title: "Comet-2-Alt-Beta-Unisex-Running-Shoes", price: 3300, img: nine },
  { heading: "Trending Now", title: "Genetics-Youth-Basketball-Shoes", price: 5500, img: ten },
  { heading: "Trending Now", title: "Cruise-Rider-Peony-Girls-Sneakers", price: 4000, img: eleven },
  { heading: "Trending Now", title: "Cruise-Rider-Peony-Girls-Sneakers1", price: 3500, img: twelve },

  { heading: "Trending Now", title: "Cruise-Rider-Silk-Road-Womens-Sneakers", price: 1000, img: thirteen },
  { heading: "Trending Now", title: "Cruise-Rider-Silk-Road-Womens-Sneakers1", price: 2000, img: fourteen },
  { heading: "Trending Now", title: "Deuce-Unisex-Indoor-Sports-Shoes", price: 2500, img: fifteen },
  { heading: "Trending Now", title: "Deuce-Unisex-Indoor-Sports-Shoes1", price: 3900, img: sixteen },
  { heading: "Trending Now", title: "Dynamite-Slip-On-Mens-Sneakers", price: 4500, img: seventeen },
  { heading: "Trending Now", title: "Disperse-XT-2-Off-Season-Mens-Training-Shoes", price: 55000, img: eighteen },
  { heading: "Trending Now", title: "Disperse-XT-3-Womens-Training-Shoes", price: 6700, img: nineteen },
  { heading: "Trending Now", title: "Electron-E-Unisex-Sneakers", price: 3400, img: twenty },
  { heading: "Trending Now", title: "Enlighten-Strap-Womens-Training-Shoes", price: 3300, img: twentyone },
  { heading: "Trending Now", title: "Evolve-Run-Mesh-Youth-Sneakers", price: 5100, img: twentytwo },
  { heading: "Trending Now", title: "Ferrari-Drift-Cat-Decima-Youth-Motorsport-Sneakers", price: 3800, img: twentythree },
  { heading: "Trending Now", title: "Future-Rider-Soft-Womens-Sneakers", price: 3500, img: twentyfour }
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

      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <MainContent heading={data[6].heading} title={data[6].title} price={data[6].price} imgdisp={data[6].img} />
        <MainContent heading={data[7].heading} title={data[7].title} price={data[7].price} imgdisp={data[7].img} />
        <MainContent heading={data[8].heading} title={data[8].title} price={data[8].price} imgdisp={data[8].img} />
        <MainContent heading={data[9].heading} title={data[9].title} price={data[9].price} imgdisp={data[9].img} />
        <MainContent heading={data[10].heading} title={data[10].title} price={data[10].price} imgdisp={data[10].img} />
        <MainContent heading={data[11].heading} title={data[11].title} price={data[11].price} imgdisp={data[11].img} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <MainContent heading={data[12].heading} title={data[12].title} price={data[12].price} imgdisp={data[12].img} />
        <MainContent heading={data[13].heading} title={data[13].title} price={data[13].price} imgdisp={data[13].img} />
        <MainContent heading={data[14].heading} title={data[14].title} price={data[14].price} imgdisp={data[14].img} />
        <MainContent heading={data[15].heading} title={data[15].title} price={data[15].price} imgdisp={data[15].img} />
        <MainContent heading={data[16].heading} title={data[16].title} price={data[16].price} imgdisp={data[16].img} />
        <MainContent heading={data[17].heading} title={data[17].title} price={data[17].price} imgdisp={data[17].img} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <MainContent heading={data[18].heading} title={data[18].title} price={data[18].price} imgdisp={data[18].img} />
        <MainContent heading={data[19].heading} title={data[19].title} price={data[19].price} imgdisp={data[19].img} />
        <MainContent heading={data[20].heading} title={data[20].title} price={data[20].price} imgdisp={data[20].img} />
        <MainContent heading={data[21].heading} title={data[21].title} price={data[21].price} imgdisp={data[21].img} />
        <MainContent heading={data[22].heading} title={data[22].title} price={data[22].price} imgdisp={data[22].img} />
        <MainContent heading={data[23].heading} title={data[23].title} price={data[23].price} imgdisp={data[23].img} />
      </div>
    </>
  )
}

export default ShoeCentre