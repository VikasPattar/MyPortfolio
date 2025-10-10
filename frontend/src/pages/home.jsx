import Header from "../components/header"
import Hero from "../components/hero"
import About from "../components/about"
import Projects from "../components/projects"
import Blogs from '../components/blog'
import Contact from '../components/contact'
import Footer from '../components/footer'
const Home = ()=>{
    return(
        <>
        <Header/>
        <Hero/>
        <About/>
        <Projects/>
        <Blogs/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default Home;