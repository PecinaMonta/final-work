import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function SocialFollow() {
  return (
    <div>
      <a href="https://www.youtube.com/c/jamesqquick"
        className="youtube social p-2">
        <FontAwesomeIcon icon={faYoutube} size="2x" style={{ color: 'black' }}/>
      </a>
      <a href="https://www.facebook.com/learnbuildteach/"
        className="facebook social p-2">
        <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: 'black' }}/>
      </a>
      <a href="https://www.twitter.com/jamesqquick" className="twitter social p-2">
        <FontAwesomeIcon icon={faTwitter} size="2x" style={{ color: 'black' }}/>
      </a>
      <a href="https://www.instagram.com/learnbuildteach"
        className="instagram social p-2">
        <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }}/>
      </a>

    </div>
  );
}

export default SocialFollow;
