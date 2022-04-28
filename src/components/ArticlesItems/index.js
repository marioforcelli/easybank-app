import * as C from './styles'

export default function ArticlesItems({image, author, title, description}){
    return(
        <C.Container>
            <C.ArtImg src={image}/>
            <C.Author>By {author}</C.Author>
            <C.Title>{title}</C.Title>
            <C.Description>{description}</C.Description>
        </C.Container>

    )

}