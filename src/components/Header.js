import React from 'react'
import ipfsLogo from '../../static/ipfs-logo.svg'

const Header = () =>
  <header className='flex-l items-center pa3 bg-navy bb bw3 border-aqua tc tl-l'>
    <a href='https://ipfs.io' title='IPFS' className='flex-none v-mid'>
      <img src={ipfsLogo} alt='IPFS' style={{ height: 50, width: 117.5 }} />
    </a>
    <div className='flex-auto ph2 ph3-l pt1'>
      <div style={{ maxWidth: 560 }} className='center-m'>
      </div>
    </div>
    <h1 className='pt2 pt0-l ma0 f3 fw2 montserrat aqua ttu flex-none'>
      {'Public Gateways'}
    </h1>
  </header>

export default Header
