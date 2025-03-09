import Footer from '../components/Footer';
import Header from '../components/Header';


function About() {

    const about = '';

    return (

        <>
            <Header name="about" />

            <header class="p-5 d-flex flex-column flex-md-row align-items-center justify-content-between bg-body-secondary"
                style={{
                    backgroundColor: '#f8f9fa;'

                }}>

                <div class="text-dark col-12 col-md-6">
                    <h2 class="text-center text-md-start" style={{
                        marginLeft: '15px'
                    }}>ABOUT-US</h2>
                </div>

                <div class="container-fluid col-12 col-md-6 mt-4 mt-md-0">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center justify-content-md-end">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">About</li>
                        </ol>
                    </nav>
                </div>
            </header>

            <Footer />

        </>
    )
}

export default About;