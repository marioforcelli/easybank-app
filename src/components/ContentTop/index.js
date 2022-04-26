
import mockups from "./../../assets/mockups.png"
import * as C from './styles'

export default function ContentTop(){

    return(
        <C.Container>
            <C.SectionLeft>
                <C.SectionTitle>Next generation digital banking</C.SectionTitle>
                <C.SectionDescription>
                    Take your financial life online. Your Easybank account will be a 
                    one-stop-shop for spending, saving, budgeting, investing, and much more.
                    </C.SectionDescription>
                    <C.ButtonContainer>
                    <C.InviteButton>Request Invite</C.InviteButton>
                    </C.ButtonContainer>
                
            </C.SectionLeft>
            <C.SectionRight>
                <img src={mockups}/>
            </C.SectionRight>
        </C.Container>
    )
}