const Home = () => {
    return (
        <div className="homepage">
            <div className="home-contact">
                <h2>Uzonna Alexander<span class="highlight">.</span></h2>
                <div className="contact-links">
                    <a href="/">Github</a>
                    <div>|</div>
                    <a href="/">LinkedIn</a>
                </div>
                <button>CONTACT ME</button>
            </div>
            <div className="home-pic">
                <img src="/Flaming-Z.jpg" alt="" />
            </div>
            
            <div className="home-intro">
                <h3>INTRODUCTION</h3>
                <h2>Software Developer</h2>
                <div className="intro-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias molestiae iure, provident aperiam impedit fugit nulla aspernatur laborum culpa adipisci reiciendis qui, sunt in iste voluptate voluptatum a corporis quas.</div>
            </div>
        </div>
        

    );
}
 
export default Home;