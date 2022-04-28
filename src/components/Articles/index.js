import money from '../../assets/image-currency.jpg'
import confetti from '../../assets/image-confetti.jpg'
import plane from '../../assets/image-plane.jpg'
import restaurant from '../../assets/image-restaurant.jpg'
import * as C from './styles'
import ArticlesItems from '../ArticlesItems'

export default function Articles(){
    const articles = [
        {
            image: `${money}`,
            author: 'Claire Robinson',
            title: 'Receive money in any currency with no fees',
            description: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …'
        },
        {
            image: `${restaurant}`,
            author: 'Wilson Hutton',
            title: 'Treat yourself without worrying about money',
            description: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …'
        },
        {
            image: `${plane}`,
            author: 'Wilson Hutton',
            title: 'Take your Easybank card wherever you go',
            description: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …'
        },
        {
            image: `${confetti}`,
            author: 'Claire Robinson',
            title: 'Our invite-only Beta accounts are now live!',
            description: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...'
        }


    ]

    return(
        <C.Container>
            <C.Wrapper>
                <C.Content>
                    <C.Title>Latest Articles</C.Title>
                    <C.ArticleArea>
                        {articles.map((i, index) =>{
                            return(
                                <ArticlesItems image={i.image} author={i.author} description={i.description} title={i.title}/>
                            )
                        })}
                    </C.ArticleArea>
                </C.Content>
            </C.Wrapper>
        </C.Container>
    )
}