/* global fetch, performance */
import React, { useState, useEffect } from 'react'
import GATEWAYS from '../../static/gateways.json'
import iconError from '../../static/img/glyph_attention.svg'
import iconOnline from '../../static/img/glyph_small_tick.svg'
import iconSearch from '../../static/img/glyph_search.svg'

const TEST_HASH = 'Qmaisz6NMhDB51cCvNWa1GMS7LU1pAxdF4Ld6Ft9kZEP2a'

const Gateway = ({ gatewayUrl, incrementChecked, incrementOnline }) => {
  const [isOnline, setIsOnline] = useState(null)
  const [rtt, setRtt] = useState(0)

  useEffect(() => {
    const gatewayWithHash = `${gatewayUrl}/ipfs/${TEST_HASH}`
    // opt-out from gateway redirects done by browser extension
    const testUrl = gatewayWithHash + '#x-ipfs-companion-no-redirect'
    const start = performance.now()

    fetch(testUrl)
      .then(res => res.text())
      .then(() => {
        const rtt = Math.round(performance.now() - start)
        setIsOnline(true)
        incrementOnline()
        setRtt(rtt)
      }).catch(() => {
        setIsOnline(false)
      })
      .finally(() => {
        incrementChecked()
      })
  }, [])

  const gateway = gatewayUrl.split('https://')[1].split('/ipfs/:hash')[0]
  const tableBodyRowClass = 'tableRow pointer bb b--near-white f7'
  const tableBodyRowColumnClass = 'tableRowColumn pv2 navy f6-ns'

  return (
    <tr className={tableBodyRowClass}>
      <td className={tableBodyRowColumnClass} style={{ flexBasis: '80px' }}><img className='gatewayIcon' src={isOnline === null ? iconSearch : isOnline ? iconOnline : iconError}></img>{isOnline === null ? 'Testing' : isOnline ? 'Online' : 'Offline'}</td>
      <td className={tableBodyRowColumnClass} style={{ flexBasis: '200px', flexGrow: 1 }}><a className='link blue' href={gatewayUrl} target='_blank'>{gateway}</a></td>
      <td className={tableBodyRowColumnClass} style={{ flexBasis: '120px' }}>{isOnline ? `${rtt}ms` : '-'}</td>
    </tr>
  )
}

const Badge = ({ checked = 0, total = 0, online = null }) => (
  online
    ? <span className='ml1 pv1 ph2 white br-pill f7' style={{ backgroundColor: '#00b500' }} title='Online gateways'>{checked}</span>
    : <span className='ml1 pv1 ph2 bg-navy white br-pill f7' title='Checked gateways'>{checked}/{total}</span>
)

const GatewayList = () => {
  const [checked, setChecked] = useState(0)
  const [online, setOnline] = useState(0)

  const incrementChecked = () => setChecked(checked => checked + 1)
  const incrementOnline = () => setOnline(online => online + 1)

  const tableClass = 'tl fw4 LinksTable'
  const tableHeadClass = 'pointer bb b--near-white f7 tableHeaderRow'
  const tableHeadColumnClass = 'mid-gray fw2 tracked silver tableHeaderTruncatedText'
  const tableBodyClass = 'linksTable tableGrid'

  return (
    <div className='ph4-l pt4-l'>
      <div className='nt4-l'>
        <div className='dt-l dt--fixed'>
          <div className='dtc-l w-100 w-two-thirds-l pr3-l v-top'>
            <section className='pa4 sans-serif undefined' lng='en-US' style={{ background: '#fbfbfb' }}>
              <div className='mv2 nl3 nr3 mh0-l'>
                <table className={tableClass} style={{ width: '100%' }}>
                  <thead className={tableHeadClass}>
                      <th className={tableHeadColumnClass} style={{ flexBasis: '80px' }}>Status</th>
                      <th className={tableHeadColumnClass} style={{ flexBasis: '200px', flexGrow: 1 }}>Gateway</th>
                      <th className={tableHeadColumnClass} style={{ flexBasis: '120px' }}>Response time</th>
                  </thead>
                  <tbody className={tableBodyClass}>
                    {GATEWAYS.map((gateway, idx) =>
                      <Gateway
                        key={`gateway-${idx}`}
                        gatewayUrl={gateway}
                        incrementChecked={incrementChecked}
                        incrementOnline={incrementOnline} />
                    )}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GatewayList
