import "../App.css";
import welcomeimg from '../Resources/images/welcome.png'

function Home() {
  return (
    <div>
      <img className="WelcomeTextimg" src={welcomeimg} />
      <p className="welcometxt" >Welcome to doggydaycare!. Here you can view other owners dogs and some contact information. You will also
      be able to find the dogs chipnumbers here if you may have stumbled onto someones elses dog!. In that case check for matching
      chipnumbers and pictures.</p>
    </div>
  );
} export default Home;