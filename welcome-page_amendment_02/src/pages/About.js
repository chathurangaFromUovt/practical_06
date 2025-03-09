function About() {

    return (

        <>
            <header className="p-5 d-flex flex-column flex-md-row align-items-center justify-content-between bg-body-secondary"
                style={{
                    backgroundColor: '#f8f9fa'

                }}>

                <div className="text-dark col-12 col-md-6">
                    <h2 className="text-center text-md-start" style={{
                        marginLeft: '15px'
                    }}>ABOUT-US</h2>
                </div>

                <div className="container-fluid col-12 col-md-6 mt-4 mt-md-0">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center justify-content-md-end">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">About</li>
                        </ol>
                    </nav>
                </div>
            </header>

        </>
    )
}

export default About;