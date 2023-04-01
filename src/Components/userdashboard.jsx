import '../Styles/userdashboard.css'
const UserDashboard = () => {
    return (
        <div className="userdashboard">
            <div className="usercontent1">
                <h1>Learning Lab</h1>
                <p>The mission of the Library’s Learning Lab is to create an environment in which Greenwich Library staff and patrons can empower themselves with a practical understanding of current technology.</p>
            </div>
            <div className="usercontent2">
                <div className="ucnt2">
                    <h6>LEARN</h6>
                    <h1>LinkedIn Learning</h1>
                    <p>LinkedIn Learning (formerly Lynda) is an online educational site that features thousands of courses and video tutorials where you can discover, complete, and track courses related to your industry or interests.</p>
                    <button>Get Started</button>
                </div>
            </div>
            <div className="usercontent3">
                <div className="ucnt3">
                <h1>Learn Something New or Get Tech Help</h1>
                <h3>Register on the online calendar. For more information call (203) 622-7920.</h3>
                <button>View Calender</button>
                </div>
            </div>

        </div>
    );
}

export default UserDashboard;