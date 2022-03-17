import AttrCircle from '../../../components/AttrCircle'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import CustomBorderBottom from '../../../components/CustomBorderBottom'
import styles from './Drawer.module.css'
const BACKENDURL = process.env.REACT_APP_BACKEND_BASEURL || ''

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
                <div></div>
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
                        <AttrCircle attr='LV' value={11} fontSize='2rem'/>
                    </div>
                    <div className={styles.verticalCircles}>
                        <AttrCircle attr='AT' value={61} fontSize='2rem'/>
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
                            <AttrCircle attr='DF' value={65} fontSize='2rem'/>
                        </div>
                        <div>
                            <AttrCircle attr='MG' value={59} fontSize='2rem'/>
                        </div>
                        <div>
                            <AttrCircle attr='SP' value={59} fontSize='2rem'/>
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
                        <AttrCircle attr='LV' value={11} fontSize='1.6rem'/>
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