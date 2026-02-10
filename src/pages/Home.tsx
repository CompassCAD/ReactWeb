import ReusableHeader from '../components/ReusableHeader'
import styles from '../styles/home.module.css'
import Illustration1 from '../assets/general/architect-dream.svg'
import TryIt from '../assets/general/try.svg'
import InvertedExportButton from '../assets/export.svg'
import CCADDesktopUI from '../assets/general/desktopui.svg'
import CrossPlatformImage from '../assets/general/browserandphone.svg'
import MIIImage from '../assets/general/madeinindo.svg'
import '../styles/theme.css'
import { getDeviceType } from '../components/GetDevice'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReusableFooter from '../components/ReusableFooter'
import { getLocaleKey, SetLanguage } from '../components/LanguageHandler'
interface HomeButtonInterface {
    important?: boolean,
    onInteract?: () => void,
    children: React.ReactNode
    style?: React.CSSProperties
}
enum EditorMode {
    Polished, // this has the Home and the Base64-based URL
    Classic // for devices like Chromebooks to enjoy the experience standalone
}
const isCrammed = () => {
    const minWidthForText = 1000; // adjust this value based on your needs
    return window.innerWidth < minWidthForText;
}
const HomeButton = (props: HomeButtonInterface) => {
    return (
        <button onClick={props.onInteract} className={`${styles['startpage-button']} ${props.important ? styles.important: ''}`} style={props.style}>
            {props.children}
        </button>
    )
}
const Home = () => {
    const [deviceType, setDeviceType] = useState(getDeviceType());
    const [crammed, setCrammed] = useState(isCrammed());
    const [editorState, setEditorState] = useState<EditorMode>(EditorMode.Polished);
    const [showEditorSelector, setShowEditorSelector] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setDeviceType(getDeviceType());
            setCrammed(isCrammed());
            console.log(crammed)
        };
        if (localStorage.getItem('language') == null) {
            SetLanguage(navigator.language);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const setEditorStateThing = (mode: EditorMode) => {
        setShowEditorSelector(false);
        setEditorState(mode);
    }
    return (
        <div className={styles['home-container']}>
            <ReusableHeader />
            <div className={styles['app-content']}>
                <div className={`${styles['hero-biggiewrapper']} ${crammed ? styles.mobile : ''}`}>
                    <div className={styles['hero-left']}>
                        <h1>
                        {getLocaleKey('home.header')}
                        </h1>
                        <p>
                        {getLocaleKey('home.descHero')}
                        </p>
                        <br></br>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <HomeButton important={true}>
                                <img src={InvertedExportButton} alt='Download button' width={24} style={{transform: 'rotate(180deg)'}} />
                                &nbsp;
                                {getLocaleKey('home.downloadButton')}
                            </HomeButton>
                            <Link to={editorState == EditorMode.Polished ? '/editor' : '/editor/standalone'}>
                                <HomeButton style={{borderTopRightRadius: '5px', borderBottomRightRadius: '5px', paddingBottom: '15px'}}>
                                    <img src={TryIt} alt='Tryit Icon' width={24}/>
                                    &nbsp;
                                    {editorState == EditorMode.Polished ? getLocaleKey('home.inBrowserEditor') : getLocaleKey('home.classicEdior')}
                                </HomeButton>
                            </Link>
                            <HomeButton 
                                style={{borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px', marginLeft: '-10px'}}
                                onInteract={() => setShowEditorSelector(!showEditorSelector)}
                            >
                                {showEditorSelector ? '▴ ': '▾ '}
                            </HomeButton>
                            {showEditorSelector && (
                                <div className={styles['editor-mode-selector']}>
                                    <div className={styles['editor-mode-option'] + (editorState == EditorMode.Polished ? ' ' + styles['active'] : '')} onClick={() => setEditorStateThing(EditorMode.Polished)}>
                                        <img src={TryIt} alt='Tryit Icon' width={24}/>
                                        <div className={styles['editor-mode-description']}>
                                            <b>{getLocaleKey('home.editorSel.polished.name')}</b>
                                            <span>{getLocaleKey('home.editorSel.polished.description')}</span>
                                        </div>
                                    </div>
                                    <div className={styles['editor-mode-option'] + (editorState == EditorMode.Classic ? ' ' + styles['active'] : '')} onClick={() => setEditorStateThing(EditorMode.Classic)}>
                                        <img src={TryIt} alt='Tryit Icon' width={24}/>
                                        <div className={styles['editor-mode-description']}>
                                            <b>{getLocaleKey('home.editorSel.classic.name')}</b>
                                            <span>{getLocaleKey('home.editorSel.classic.description')}</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={`${styles['hero-right']} ${crammed ? styles.crammed : ''}`}>
                        <img src={Illustration1} alt='Architect dreaming' height={crammed ? 360 : 510}/>
                    </div>
                </div>
                <div>
                    <h1>{getLocaleKey('home.header1Sub')}</h1>
                    <p>{getLocaleKey('home.paragraph1Sub')}</p>
                    <br></br>
                    <div style={{display:'flex', justifyContent: 'center'}}>
                        <img src={CCADDesktopUI} alt='Snippet of CompassCAD Desktop UI' style={{border: '1px solid #0080ff', borderRadius: '10px', boxShadow: '0px 0px 13px 3px rgba(0,128,255,0.25)', width: '90vw'}} />
                    </div>
                    <small>{getLocaleKey('home.littleNote1')}</small>
                    <br></br>
                    <br></br>
                    <h1>{getLocaleKey('home.header2Sub')}</h1>
                    <div style={{display:'flex', justifyContent: 'center'}}>
                        <img src={CrossPlatformImage} alt='Mac Safari browser and iPhone' style={{width: '90vw'}}/>
                    </div>
                    <small>{getLocaleKey('home.littleNote2')}</small>
                    <br></br>
                    <br></br>
                    <h1>{getLocaleKey('home.header3Sub')}</h1>
                    <p>{getLocaleKey('home.paragraph3Sub')}</p>
                    <div style={{display:'flex', justifyContent: 'center'}}>
                        <img src={MIIImage} alt='Mac Safar browser and iPhone with Bangga Buatan Indonesia logo' style={{width: '80vw'}}/>
                    </div>
                    <small>{getLocaleKey('home.littleNote3')}</small>
                </div>
            </div>
            <ReusableFooter />
        </div>
    )
}
export default Home