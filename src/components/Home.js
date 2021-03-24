import Background from '../css/Background.css';
import Footer from './Footer.js';

function Home() {
    return (
        <div className="background">
        <h1>Home</h1>
        <div>
          <br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          {/* Added image above footer */}
          <img style={{float : 'center', width :'100px', height : 'auto', overflowWrap : 'break-word', wordWrap : 'break-word'}} src={'https://media2.giphy.com/media/UnyblOs6hGx9Mli7jq/200.gif'} alt='spinning smiling sun'/>
          <br />
          <div className="foot">
            <Footer />
          </div>
        </div>
      </div>
    )
  }
 
  export default Home