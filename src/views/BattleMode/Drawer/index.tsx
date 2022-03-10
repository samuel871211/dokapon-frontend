import { Transition } from 'react-transition-group'
import AttrCircle from '../../../components/AttrCircle'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import CustomBorderBottom from '../../../components/CustomBorderBottom'
import styles from './index.module.css'
const BACKENDURL = process.env.REACT_APP_BACKEND_BASEURL || ''
const FAKEDATA = {
    curMoney: 14700000,
    curWeek: 100,
    dayOfWeek: [
        { chinese: '月', english: 'MON', event: '職安休' },
        { chinese: '火', english: 'TUE', event: '職安休' },
        { chinese: '水', english: 'WED', event: '職安休' },
        { chinese: '木', english: 'THU', event: '職安休' },
        { chinese: '金', english: 'FRI', event: '職安休' },
        { chinese: '土', english: 'SAT', event: '職安休' },
        { chinese: '日', english: 'SUN', event: '職安休' },
    ],
    playerAttrs: [{
        ranking: 1,
        level: 11,
        attack: 50,
        defense: 51,
        magic: 52,
        speed: 53,
        hp: 1000,
        curHp: 990,
        name: '@@@'
    }, {
        ranking: 1,
        level: 11,
        attack: 50,
        defense: 51,
        magic: 52,
        speed: 53,
        hp: 1000,
        curHp: 990,
        name: '@@@'
    }, {
        ranking: 1,
        level: 11,
        attack: 50,
        defense: 51,
        magic: 52,
        speed: 53,
        hp: 1000,
        curHp: 990,
        name: '@@@'
    }, {
        ranking: 1,
        level: 11,
        attack: 50,
        defense: 51,
        magic: 52,
        speed: 53,
        hp: 1000,
        curHp: 990,
        name: '@@@'
    }]

}


export default Drawer

function Drawer (): JSX.Element {
    return (
        <div className={styles.container}>
            <div className={styles.topLeft}>
                <WeeklyInfo/>
            </div>
            <div className={styles.topRight}>
                <DetailedPlayerInfos/>
            </div>
            <div className={styles.bottomLeft}>
                <FloatingActionBtn selected={true}/>
                <FloatingActionBtn selected={false}/>
                <FloatingActionBtn selected={false}/>
                <FloatingActionBtn selected={false}/>
                <FloatingActionBtn selected={false}/>
            </div>
            <div className={styles.bottomRight}>
                <BriefPlayerInfos/>
                <BriefPlayerInfos/>
                <BriefPlayerInfos/>
            </div>
        </div>
    )
}

function WeeklyInfo (): JSX.Element {
    return (
        <div className={styles.weeklyInfo}>
            <div>
                <div className={styles.week}>
                    <div>week</div>
                    <div>90</div>
                </div>
                <div className={styles.activity}>職安休</div>
            </div>
            <div>
                <div className={styles.weekIcon}>
                    <div>月</div>
                    <div>MON</div>
                </div>
            </div>
        </div>
    )
}

function FloatingActionBtn (props: { selected: boolean }): JSX.Element {
    const { selected } = props
    return (
        <div className={styles.floatingActionBtn}>
            <div>
                <WatchLaterIcon
                    fontSize='inherit'
                    htmlColor='yellow'
                />
            </div>
            <div style={{ opacity: selected ? 1 : 0 }}>
                <div>育昇</div>
            </div>
        </div>
    )
}

function DetailedPlayerInfos (): JSX.Element {
    return (
        <div className={styles.detailedPlayerInfos}>
            <div>
                <div className={styles.playerImg}>
                    <img
                        width="100%"
                        height="100%"
                        src={`${BACKENDURL}/imgs/magician_male_red_front.png`}
                    />
                </div>
                <div className={styles.ranking}>
                    <div>
                        RANKING
                        <span> 2</span>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className={styles.verticalCircles}>
                        <AttrCircle attr='LV' value={11} fontSize='2vw'/>
                    </div>
                    <div className={styles.verticalCircles}>
                        <AttrCircle attr='AT' value={61} fontSize='2vw'/>
                    </div>
                </div>
                <div>
                    <div className={styles.playerArea}>
                        <div>PLAYER</div>
                        <div>NAME</div>
                        <CustomBorderBottom/>
                    </div>
                    <div className={styles.circlesContainer}>
                        <div>
                            <AttrCircle attr='DF' value={65} fontSize='2vw'/>
                        </div>
                        <div>
                            <AttrCircle attr='MG' value={59} fontSize='2vw'/>
                        </div>
                        <div>
                            <AttrCircle attr='SP' value={59} fontSize='2vw'/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.moneyArea}>
                        <div>MONEY</div>
                        <div>14,700,000</div>
                        <CustomBorderBottom/>
                    </div>
                    <div className={styles.hpArea}>
                        <div>
                            <div>
                                <div>HP</div>
                                <div className={styles.hpBar}></div>
                            </div>
                            <div>1000 / 1000</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function BriefPlayerInfos (): JSX.Element { 
    return (
        <div className={styles.briefPlayerInfos}>
            <div>
                <img
                    width="100%"
                    height="100%"
                    src={`${BACKENDURL}/imgs/magician_male_red_front.png`}
                />
            </div>
            <div>
                <div>
                    <div className={styles.level}>
                        <AttrCircle attr='LV' value={11} fontSize='1.6vw'/>
                    </div>
                    <div className={styles.nameArea}>
                        <div>NAME</div>
                        <CustomBorderBottom/>
                    </div>
                </div>
                <div>
                    <div className={styles.briefHPArea}>
                        <div>HP</div>
                        <div className={styles.hpBar}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}