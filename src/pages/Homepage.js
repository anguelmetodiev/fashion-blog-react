import Header from '../components/Header'
import Nav from '../components/Nav'
import Article from '../components/Article'
import Footer from '../components/Footer'
import img1 from '../images/blog-image-1.jpg'
import img2 from '../images/blog-image-2.jpg'



export default function Homepage (props) {
    return (
        <>
            <Header />
            <Nav />
            <Article title="On the Street in Brooklyn" img={img1} date="11/12/2020" />
            <Article title="Vintage in Vogue" img={img2} date="11/11/2020" />
            <Footer />
        </>
    )
}
