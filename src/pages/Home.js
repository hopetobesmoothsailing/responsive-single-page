import React, {memo, useEffect, useState} from 'react'
import {Box, Button, Container, Grid, Icon, Paper} from "@mui/material";
import WelbexLogo from '../assets/logo_welbex.png'
import TelegramIcon from '../assets/telegram.png'
import PhoneIcon from '../assets/phone.png'
import WhatsAppIcon from '../assets/whatsapp.png'
import RedBall1 from '../assets/red_ball1.png'
import RedBall from '../assets/red_ball.png'
import PurpleBall from '../assets/purple_ball.png'
import '../styles/Home.css'


const Home = memo(props => {
    const [mobileView, setMobileView] = useState(false)
    useEffect(() => {
        setResponsiveness()
        window.addEventListener('resize', () => setResponsiveness())
        return () => {
            window.removeEventListener('resize', () => setResponsiveness())
        }
    }, [])
    const setResponsiveness = () => {
        return window.innerWidth < 900 ? setMobileView(true) : setMobileView(false)
    }

    return (mobileView ? <MobileView /> : <WebView />)
})
export default Home

const MobileView = () => {
    return (
        <div className={'mobileBody'}>
            <div className="mobileHeader">
                <Button className="mobileHeaderNav" sx={styles.mobileHeaderNav}>Услуги</Button>
                <Button className="mobileHeaderNav" sx={styles.mobileHeaderNav}>Виджеты</Button>
                <Button className="mobileHeaderNav" sx={styles.mobileHeaderNav}>Интеграции</Button>
                <Button className="mobileHeaderNav" sx={styles.mobileHeaderNav}>Кейсы</Button>
            </div>
            <div className="mobileMainContainer">
                <div className="mobileMain">
                    <span className="mobileMainTitle">Зарабатывайте<br/>больш</span>
                    <span className="mobileMainGradientTitle">с WELBEX</span>
                    <span className="mobileMainComment">Развиваем и контролируем продажи за вас</span>
                    <div className="mobileMainSubtitle">
                        Вместе с <span className="mobileMainSubtitleGradient1">бесплатной</span><br/><span className={'mobileMainSubtitleGradient2'}>консультацией</span> мы дарим:
                    </div>
                    <div className="mobileCommentList">
                        <div className="mobileCommentListColumn">
                            <div className="mobileCommentListItem">
                                <div className="hyphen" />
                                <div className="mobileCommentListTitle">Skype аудит</div>
                            </div>
                            <div className="mobileCommentListItem">
                                <div className="hyphen" />
                                <div className="mobileCommentListTitle">Dashboard</div>
                            </div>
                        </div>
                        <div className="mobileCommentListColumn">
                            <div className="mobileCommentListItem">
                                <div className="hyphen" />
                                <div className="mobileCommentListTitle">30 виджетов</div>
                            </div>
                            <div className="mobileCommentListItem">
                                <div className="hyphen" />
                                <div className="mobileCommentListTitle">Месяц аmoCRM</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobileFooter">
                <span className="mobileFooterTitle">О компании</span>
                <span className="mobileFooterComment">Партнёрская программа</span>
                <span className="mobileFooterComment">Вакансии</span>
                <span className="mobileFooterTitle">Меню</span>
                <div className="mobileFooterCommentColumns">
                    <div className="mobileFooterCommentColumn">
                        <span className="mobileFooterCommentListItem">Расчёт стоимости</span>
                        <span className="mobileFooterCommentListItem">Услуги</span>
                        <span className="mobileFooterCommentListItem">Виджеты</span>
                        <span className="mobileFooterCommentListItem">Интеграции</span>
                        <span className="mobileFooterCommentListItem">Наши клиенты</span>
                    </div>
                    <div className="mobileFooterCommentColumn">
                        <span className="mobileFooterCommentListItem">Благодарность клиентов</span>
                        <span className="mobileFooterCommentListItem">Кейсы</span>
                        <span className="mobileFooterCommentListItem">Сертификаты</span>
                        <span className="mobileFooterCommentListItem">Блог на Youtube</span>
                        <span className="mobileFooterCommentListItem">Вопрос / Ответ</span>
                    </div>
                </div>
                <span className="mobileFooterTitle">Контакты</span>
                <span className="mobileFooterPhoneNumber">+7 555 555-55-55</span>
                <div className="mobileFooterIconPanel">
                    <img src={TelegramIcon} alt="telegram" className={'mobileFooterIcon'}/>
                    <img src={PhoneIcon} alt="phone" className={'mobileFooterIcon'}/>
                    <img src={WhatsAppIcon} alt="whatsapp" className={'mobileFooterIcon'}/>
                </div>
                <span className="mobileFooterAddress">Москва, Путевой проезд 3с1, к 902</span>
                <span className="mobileFooterCopyright">©WELBEX 2022. Все права защищены.</span>
                <span className="mobileFooterEnd">Политика конфиденциальности</span>
            </div>
        </div>
    )
}

const WebView = () => {
    return (
        <div className={'webBody'}>
            <div className="radialGradientRed" />
            <div className="radialGradientPurple" />
            <div className="webHeader">
                <div className="leftWebHeader">
                    <div className="logoPanel">
                        <img src={WelbexLogo} alt="welbex" className={'logo'}/>
                        <div className="logoComment">
                            крупный интегратор CRM в Росcии и ещё 8 странах
                        </div>
                    </div>
                    <div className="webHeaderNavPanel">
                        <Button
                            className={'webHeaderNav'}
                            sx={styles.webHeaderNav}
                        >Услуги</Button>
                        <Button
                            className={'webHeaderNav'}
                            sx={styles.webHeaderNav}
                        >Виджеты</Button>
                        <Button
                            className={'webHeaderNav'}
                            sx={styles.webHeaderNav}
                        >Интеграции</Button>
                        <Button
                            className={'webHeaderNav'}
                            sx={styles.webHeaderNav}
                        >Кейсы</Button>
                        <Button
                            className={'webHeaderNav'}
                            sx={styles.webHeaderNav}
                        >Сертификаты</Button>
                    </div>
                </div>
                <div className="rightWebHeader">
                    <div className="phoneNumberWebHeader">
                        +7 555 555-55-55
                    </div>
                    <div className="iconPanelWebHeader">
                        <img src={TelegramIcon} alt="telegram" className={'webHeaderIcon'}/>
                        <img src={PhoneIcon} alt="phone" className={'webHeaderIcon'}/>
                        <img src={WhatsAppIcon} alt="whatsapp" className={'webHeaderIcon'}/>
                    </div>
                </div>
            </div>
            <div className="webMainContainer">
                <div className="webLeftContainer">
                    <span className="webLeftTitle">Зарабатывайте больше</span>
                    <span className="webLeftGradientTitle">с WELBEX</span>
                    <span className="webLeftComment">Развиваем и контролируем продажи за вас</span>
                </div>
                <div className="webRightContainer">
                    <span className="webRightTitle">
                        Вместе с <span className="webRightGradientTitle1">бесплатной</span><br/><span className={'webRightGradientTitle2'}>консультацией</span> мы дарим:
                    </span>
                    <div className="webRightListPanel">
                        <div className="webRightList">
                            <span className="webRightListTitle">Виджеты</span>
                            <span className="webRightListComment">30 готовых<br/>решений</span>
                        </div>
                        <div className="webRightList">
                            <span className="webRightListTitle">Dashboard</span>
                            <span className="webRightListComment">с показателями<br/>вашего бизнеса</span>
                        </div>
                        <div className="webRightList">
                            <span className="webRightListTitle">Skype Аудит</span>
                            <span className="webRightListComment">отдела продаж<br/>и CRM системы</span>
                        </div>
                        <div className="webRightList">
                            <span className="webRightListTitle">35 дней</span>
                            <span className="webRightListComment">использования<br/>CRM</span>
                        </div>
                    </div>
                    <Button className="webRightButton" sx={styles.webRightBtn}>Получить консультацию</Button>
                </div>
            </div>
            <div className="webFooter">
                <div className="webFooterCommentPanel">
                    <div className="webFooterCommentItem">
                        <span className="webFooterCommentTitle">О компании</span>
                        <span className="webFooterComment">Партнёрская программа</span>
                        <span className="webFooterComment">Вакансии</span>
                    </div>
                    <div className="webFooterCommentItem">
                        <span className="webFooterCommentTitle">Меню</span>
                        <div className="webFooterCommentColumns">
                            <div className="webFooterCommentColumn">
                                <span className="webFooterComment">Расчёт стоимости</span>
                                <span className="webFooterComment">Услуги</span>
                                <span className="webFooterComment">Виджеты</span>
                                <span className="webFooterComment">Интеграции</span>
                                <span className="webFooterComment">Наши клиенты</span>
                            </div>
                            <div className="webFooterCommentColumn">
                                <span className="webFooterComment">Кейсы</span>
                                <span className="webFooterComment">Благодарственные письма</span>
                                <span className="webFooterComment">Сертификаты</span>
                                <span className="webFooterComment">Блог на Youtube</span>
                                <span className="webFooterComment">Вопрос / Ответ</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="webFooterContact">
                    <span className="webFooterContactTitle">Контакты</span>
                    <span className="webFooterPhoneNumber">+7 555 555-55-55</span>
                    <div className="webFooterIconPanel">
                        <img src={TelegramIcon} alt="telegram" className={'webFooterIcon'}/>
                        <img src={PhoneIcon} alt="phone" className={'webFooterIcon'}/>
                        <img src={WhatsAppIcon} alt="whatsapp" className={'webFooterIcon'}/>
                    </div>
                    <span className="webFooterAddress">Москва, Путевой проезд 3с1, к 902</span>
                    <div className="webFooterCopyrightPanel">
                        <span className="webFooterCopyright">©WELBEX 2022. Все права защищены.</span>
                        <span className="webFooterEnd">Политика конфиденциальности</span>
                    </div>
                </div>
                <img src={RedBall1} alt="redball1" className={'redBall1'}/>
                <img src={RedBall} alt="redball" className={'redBall'}/>
                <img src={PurpleBall} alt="purpleBall" className={'purpleBall'}/>
            </div>
        </div>
    )
}

const styles = {
    webRightBtn: {
        marginTop: '50px',
        marginBottom: '30px',
        borderRadius: 0,
        backgroundColor: '#4077F3',
        paddingLeft: '45px',
        paddingRight: '45px',
        paddingTop: '20px',
        paddingBottom: '20px',
    },
    webHeaderNav: {
        marginRight: '20px',
        borderRadius: 0
    },
    mobileHeaderNav: {
        borderRadius: 0
    }
}