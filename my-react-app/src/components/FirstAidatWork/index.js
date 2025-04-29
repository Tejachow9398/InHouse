
import LoginSignup from "../LoginSignup"
import Header from '../Header'

const details = {
    title: "First Aid at Work Training (3 Days)",
    description:"This Level 3 First Aid at Work training course (3 days) gives you the knowledge and skills necessary for you to successfully carry out your duties as a first aider.",
    coursses : 14,
    coursemoney:149.99,
    offermoney : "£179.99",
    offerpercent : "17",
    imgurl:"https://res.cloudinary.com/dov0rmq5b/image/upload/v1739864047/Screenshot_2025-02-18_130343_mtxohp.png",
} 

const FirstAidatWork = ()=>(
    <div>
        <LoginSignup/>
        <Header />
    <div>
            <div className="Home-Container">
                <div className="details">
                    <h1>{details.title}</h1>
                    <p className="para">{details.description}</p>
                    <p className="bold">{details.coursses} Course Providers</p>
                    <p> <span className="highlight">From £ {details.coursemoney} </span> All inc</p>
                    <p> <span className="underline">{details.offermoney} </span>{details.offerpercent}% Off</p>
                    <button className="bookNow-btn" type="button">Book Now</button>
                </div>
                <div>
                    <img src={details.imgurl}
                    alt="img" className="pancard-img"/>
                    <p>Rated Excellent</p>
                    <img src="https://res.cloudinary.com/dov0rmq5b/image/upload/v1739716163/Screenshot_2025-02-16_195908_gseuuy.png" 
                    alt="star"
                    className="star-img"/>
                    <p>on major review sites</p>
                </div>
            </div>
            <div class="container">
        <h2>Learning Options</h2>
        <div class="learning-options">
            <div class="learning-option most-popular">
                <h4>🌐 E-learning <span class="badge-popular">MOST POPULAR</span></h4>
                <ul>
                    <li>Designed to work around your schedule.</li>
                    <li>Complete the course in your own time.</li>
                    <li>Access learning materials from any device.</li>
                    <li>Book exams when you're ready.</li>
                </ul>
                <p><strong>From £99.99</strong> <del>£169.99</del> 41% Off</p>
                <button class="btn-custom">Book Now</button>
            </div>
            <div class="learning-option">
                <h4>🏫 Classroom</h4>
                <ul>
                    <li>Focused study away from the workplace.</li>
                    <li>Face-to-face support with experienced tutors.</li>
                    <li>Interact with fellow professionals.</li>
                </ul>
                <p><strong>From £89.99</strong> <del>£109.99</del> 18% Off</p>
                <button class="btn-custom">See Dates</button>
            </div>
            <div class="learning-option">
                <h4>💻 Online (live)</h4>
                <ul>
                    <li>A complete classroom experience you can do from home.</li>
                    <li>Structured learning with access to e-learning materials.</li>
                    <li>Interact live with your tutor and other students.</li>
                </ul>
                <p><strong>From £144</strong></p>
                <button class="btn-custom">See Dates</button>
            </div>
            <div class="learning-option">
                <h4>🏠 In-house</h4>
                <ul>
                    <li>Study alongside colleagues and learn together.</li>
                    <li>Choose from our classroom, live tutor-led online or self-paced online learning options.</li>
                    <li>Tailored course content to your workplace.</li>
                </ul>
                <p><strong>Contact us for a quote</strong></p>
                <button class="btn-custom">Enquire Now</button>
            </div>
        </div>
    </div>
            </div>
            </div>
        )

export default FirstAidatWork