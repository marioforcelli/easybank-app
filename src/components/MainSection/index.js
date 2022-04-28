import onbank from '../../assets/icon-online.svg'
import budgeting from '../../assets/icon-budgeting.svg'
import onboarding from '../../assets/icon-onboarding.svg'
import apiSvg from '../../assets/icon-api.svg'
import MainSectionItems from '../MainSectionItems'
import * as C from './styles'

export default function MainSection (){
    const reasons = [
        {
            button:`${onbank}`,
            title: 'Online Banking',
            desc :'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
        },
        {
            button:`${budgeting}`,
            title: 'Simple Budgeting',
            desc :'  See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'
        },
        {
            button:`${onboarding}`,
            title: 'Fast Onboarding',
            desc :'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'
        },
        {
            button:`${apiSvg}`,
            title: 'Open API',
            desc :'  Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
        }
    ]

    return (
        <C.Container>
            <C.Wrapper>
                <C.Content>
                    <C.SectionTop>
                    <C.ReasonTitle>Why choose EasyBank?</C.ReasonTitle>
                    <C.ReasonDescription>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</C.ReasonDescription>
                </C.SectionTop>
                <C.SectionBottom>
                    {reasons.map((i, index) =>{
                        return(
                            <MainSectionItems svg={i.button} title={i.title} description={i.desc}/>
                        )
                    })}

                </C.SectionBottom>

                </C.Content>
            </C.Wrapper>


        </C.Container>
    )
}