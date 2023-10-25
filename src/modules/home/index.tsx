import { useMemo } from 'react'
import { useParams } from 'react-router'
import {
  IconArrowRight,
  IconFlagID,
  IconFlagMY,
  IconFlagPH,
  IconFlagTH,
  IconFlagVN
} from 'src/assets/icons'
import { Colors } from 'src/constants/theme'
import LogoVN2 from 'src/assets/images/logo-vn2.jpg'
import LogoVN3 from 'src/assets/images/logo-vn3.jpg'
import LogoEkiwi from 'src/assets/images/logo-ekiwi.png'
import LogoEforte from 'src/assets/images/logo-enforte.png'
import LogoNTl from 'src/assets/images/logo-ntl.jpg'
import './style.scss'

export const Home = () => {
  const { geo } = useParams<{ geo: string }>()

  const organizations = [
    {
      name: 'Nutralife',
      type: 'fresh',
      geo: 'vn2',
      country: 'vn',
      logo: LogoVN2,
      logoCountry: <IconFlagVN/>,
      tms: {
        title: 'TMS',
        link: 'https://vnultraf.tmsapp.net/auth/login'
      },
      rescue: {
        title: 'Rescue Management',
        link: 'https://vnultraf-rescue.tmsapp.net/login'
      },
      sm: {
        title: 'System Management',
        link: 'https://vnultraf-smgr.tmsapp.net/account/login'
      }
    },
    {
      name: 'HealthPost',
      type: 'resell',
      geo: 'vn3',
      country: 'vn',
      logo: LogoVN3,
      logoCountry: <IconFlagVN/>,
      tms: {
        title: 'TMS',
        link: 'https://vnhealthpost.tmsapp.net/auth/login'
      },
      rescue: {
        title: 'Rescue Management',
        link: 'https://vnhp-rescue.tmsapp.net/login'
      },
      sm: {
        title: 'System Management',
        link: 'https://vnhp-smgr.tmsapp.net/account/login'
      }
    },
    {
      name: 'LoveHealth',
      type: 'resell',
      geo: 'vn4',
      country: 'vn',
      logo: LogoVN3,
      logoCountry: <IconFlagVN/>,
      tms: {
        title: 'TMS',
        link: 'https://vnlovehealth.tmsapp.net/auth/login'
      },
      rescue: {
        title: 'Rescue Management',
        link: 'https://vnlh-rescue.tmsapp.net/login'
      },
      sm: {
        title: 'System Management',
        link: 'https://vnlh-smgr.tmsapp.net/account/login'
      }
    },
    {
      name: 'Enforte',
      type: 'resell',
      geo: 'th1',
      country: 'th',
      logo: LogoEforte,
      logoCountry: <IconFlagTH/>,
      tms: {
        title: 'TMS',
        link: 'http://eftth.tmsapp.net/auth/login'
      },
      rescue: {
        title: 'Rescue Management',
        link: 'http://rescue-th.tmsapp.net/login'
      },
      sm: {
        title: 'System Management',
        link: 'https://smgr-th.tmsapp.net/account/login'
      }
    },
    {
      name: 'Nutralife',
      type: 'fresh',
      geo: 'th2',
      country: 'th',
      logo: LogoNTl,
      logoCountry: <IconFlagTH/>,
      tms: {
        title: 'TMS',
        link: 'http://ntl.tmsapp.net/auth/login'
      },
      rescue: {
        title: 'Rescue Management',
        link: 'http://rescue-ntl.tmsapp.net/login'
      },
      sm: {
        title: 'System Management',
        link: 'https://smgr-ntl.tmsapp.net/account/login'
      }
    },
    {
      name: 'Ekiwi',
      type: 'resell',
      geo: 'id1',
      country: 'id',
      logo: LogoEkiwi,
      logoCountry: <IconFlagID/>,
      tms: {
        title: 'TMS',
        link: 'http://ekiwi.id.tmsapp.net/auth/login'
      },
      rescue: {
        title: 'Rescue Management',
        link: 'http://rescue-id.tmsapp.net/login'
      },
      sm: {
        title: 'System Management',
        link: 'https://smgr-id.tmsapp.net/account/login'
      }
    },
    {
      name: 'GMS',
      type: 'fresh',
      geo: 'id2',
      country: 'id',
      logo: LogoEkiwi,
      logoCountry: <IconFlagID/>,
      tms: {
        title: 'TMS',
        link: 'https://idgms.tmsapp.net/auth/login'
      },
      rescue: {
        title: 'Rescue Management',
        link: 'https://idgms-rescue.tmsapp.net/login'
      },
      sm: {
        title: 'System Management',
        link: 'https://idgms-smgr.tmsapp.net/account/login'
      }
    },
    {
      name: 'Ekiwi',
      type: 'fresh',
      geo: 'my1',
      country: 'my',
      logo: LogoEkiwi,
      logoCountry: <IconFlagMY/>,
      tms: {
        title: 'TMS',
        link: 'http://ekwmy.tmsapp.net/auth/login'
      },
      rescue: {
        title: 'Rescue Management',
        link: 'https://rescue-my.tmsapp.net/login'
      },
      sm: {
        title: 'System Management',
        link: 'https://smgr-my.tmsapp.net/account/login'
      }
    },
    {
      name: 'Malcom',
      type: 'fresh',
      geo: 'ph1',
      country: 'ph',
      logo: LogoEkiwi,
      logoCountry: <IconFlagPH/>,
      tms: {
        title: 'TMS',
        link: 'https://phmalc.tmsapp.net/auth/login'
      },
      rescue: {
        title: 'Rescue Management',
        link: 'https://phmc-rescue.tmsapp.net/login'
      },
      sm: {
        title: 'System Management',
        link: 'https://phmc-smgr.tmsapp.net/account/login'
      }
    }
  ]

  const handleRedirect = (url: string) => window.open(url)

  const LIST = useMemo(() => {
    const organization = organizations.filter((item) => item.geo === geo)

    if (organization?.length) {
      return organization
    }

    return organizations
  }, [organizations, geo])

  return (
    <div className="section">
      <div
        className="home"
        style={{
          height: geo ? 'calc(100vh - 48px)' : '100%'
        }}
      >
        <div className="heading-3" style={{ color: Colors.white }}>
          HUB SCREEN
        </div>
        <div className={`home-card ${geo ? 'fx-jc-center mt-40' : ''}`}>
          {LIST.map((item, index) => (
            <div className="home-card__item" key={index}>
              <div className="heading-6 home-card__item--header">
                <div>
                  <div>
                    <img src={item.logo} alt="logo"/>
                  </div>
                  <div>{item.name}</div>
                </div>
                <div>{item.logoCountry}</div>
              </div>
              <div className="home-card__item--content">
                <div className="home-card__item--project">
                  <div className="subtitle-2" style={{ color: Colors.primary }}>
                    {item.tms.title}
                  </div>
                  <div
                    className="fx fx-ai-center gap-8 cursor-pointer"
                    onClick={() => handleRedirect(item.tms.link)}
                  >
                    <div className="meta">Go to Portal</div>
                    <IconArrowRight/>
                  </div>
                </div>
                <div className="home-card__item--project">
                  <div className="subtitle-2" style={{ color: Colors.primary }}>
                    {item.rescue.title}
                  </div>
                  <div
                    className="fx fx-ai-center gap-8 cursor-pointer"
                    onClick={() => handleRedirect(item.rescue.link)}
                  >
                    <div className="meta">Go to Portal</div>
                    <IconArrowRight/>
                  </div>
                </div>
                <div className="home-card__item--project">
                  <div className="subtitle-2" style={{ color: Colors.primary }}>
                    {item.sm.title}
                  </div>
                  <div
                    className="fx fx-ai-center gap-8 cursor-pointer"
                    onClick={() => handleRedirect(item.sm.link)}
                  >
                    <div className="meta">Go to Portal</div>
                    <IconArrowRight/>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
