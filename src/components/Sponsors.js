import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import amagi from './../assets/past-sponsors/amagi.png'
import katbin from './../assets/past-sponsors/katbin.png'
// import devfolio from './../assets/past-sponsors/devfolio.png'
// import matic from './../assets/past-sponsors/matic.png'
// import portis from './../assets/past-sponsors/portis.png'
// import tezos from './../assets/past-sponsors/tezos.png'
import stickerMule from '../assets/past-sponsors/sticker-mule.svg'
import agora from './../assets/past-sponsors/agora.png'
// import yocket from './../assets/past-sponsors/yocket.png'
import balsamiq from './../assets/past-sponsors/balsamiq.png'
import packtpub from './../assets/past-sponsors/packtpub.png'
import spike from './../assets/past-sponsors/spike.png'
import kaspersky from './../assets/past-sponsors/kaspersky.png'
import password from './../assets/past-sponsors/1password.png'
import axure from './../assets/past-sponsors/axure.png'
import sketch from './../assets/past-sponsors/sketch.png'
import nostarchpress from './../assets/past-sponsors/nostarchpress.png'
import wolfram from './../assets/past-sponsors/wolfram.png'
import marlabs from './../assets/past-sponsors/marlabs.png'
import brochure from './../assets/Brochure.pdf'
import { FaDownload } from 'react-icons/fa'

const Sponsors = React.forwardRef(({ setSponsors }, ref) => {
  const [ket, setKet] = useState(false)
  return (
    <div className='sponsors' id='sponsors' ref={ref}>
      <div className='sponsors-title' onClick={() => { if (!ket) setKet(true) }}>Our Sponsors</div>
      <CSSTransition in={ket} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
        <div className='katbin'>
          <a id='katbin' href='https://katb.in/' target='_blank' rel='noreferrer'><img src={katbin} alt='Katbin' /></a>
          <span>KatBin</span>
        </div>
      </CSSTransition>
      <div className='amagi'>
        <a id='amagi' href='https://www.amagi.com/' target='_blank' rel='noreferrer'><img src={amagi} alt='Amagi' /></a>
        <span>Title Sponsor</span>
      </div>
      <div className='sponsors-gallery'>
        {/* <div><a href='https://devfolio.co/' target='_blank' rel='noreferrer'><img src={devfolio} alt='Devfolio' /></a></div> */}
        {/* <div><a href='https://matic.network/' target='_blank' rel='noreferrer'><img src={matic} alt='Matic' /></a></div> */}
        {/* <div><a href='https://www.portis.io/' target='_blank' rel='noreferrer'><img src={portis} alt='portis' /></a></div> */}
        {/* <div><a href='https://tezos.com/' target='_blank' rel='noreferrer'><img src={tezos} alt='Tezos' /></a></div> */}
        <div><a href='https://www.agora.io/' target='_blank' rel='noreferrer'><img src={agora} alt='agora' /></a></div>
        <div><a href='https://balsamiq.com/' target='_blank' rel='noreferrer'><img src={balsamiq} alt='balsamiq' /></a></div>
        {/* <div><a href='https://yocket.in/' target='_blank' rel='noreferrer'><img src={yocket} alt='Yocket' /></a></div> */}
        <div><a href='https://mule.to/p2mg' target='_blank' rel='noreferrer'><img src={stickerMule} alt='stickerMule' /></a></div>
        <div><a href='https://www.packtpub.com/' target='_blank' rel='noreferrer'><img src={packtpub} alt='Packtpub' /></a></div>
        <div><a href='https://spikeapp.in/' target='_blank' rel='noreferrer'><img src={spike} alt='Spike' /></a></div>
        <div><a href='https://academy.kaspersky.com/' target='_blank' rel='noreferrer'><img src={kaspersky} alt='Kaspersky' /></a></div>
        <div><a href='https://1password.com/' target='_blank' rel='noreferrer'><img src={password} alt='1Password' /></a></div>
        <div><a href='https://www.axure.com/' target='_blank' rel='noreferrer'><img src={axure} alt='axure' /></a></div>
        <div><a href='https://www.sketch.com/' target='_blank' rel='noreferrer'><img src={sketch} alt='Sketch' /></a></div>
        <div><a href='https://nostarch.com/' target='_blank' rel='noreferrer'><img id='starch' src={nostarchpress} alt='No Starch Press' /></a></div>
        <div><a href='https://www.wolfram.com/language/' target='_blank' rel='noreferrer'><img src={wolfram} alt='Wolfram Language' /></a></div>
        <div><a href='https://www.marlabs.com/' target='_blank' rel='noreferrer'><img src={marlabs} alt='Marlabs' /></a></div>
      </div>
      {/* <div className='odd-sponsor'>
        <a className='odd-sponsor-link' href='https://mule.to/p2mg' target='_blank' rel='noreferrer'>
          <img className='odd-sponsor-img' src={stickerMule} alt='stickerMule' />
        </a>
      </div> */}
      <a href={brochure} download><button className='download button'><FaDownload style={{ color: '#fff', cursor: 'pointer' }} />     Download Brochure</button></a>
    </div>
  )
})

export default Sponsors
