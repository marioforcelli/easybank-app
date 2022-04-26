import * as C from  './styles'

export default function MainSectionItems ({svg, title, description}){
    return(
        <C.Container>
            <C.BtnArea>
                <img src={svg}/>
            </C.BtnArea>
            <C.TitleArea><h3>{title}</h3></C.TitleArea>
            <C.Description><span>{description}</span></C.Description>
        </C.Container>
    )

}