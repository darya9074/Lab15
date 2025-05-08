import './main.css';
import Section from './mcomps/section/section.js';
import Article from './mcomps/article/article.js';
import Aside from './mcomps/aside/aside.js';


function Main() {
  return (
    <div className="main">
    <Section />
    <Article />
    <Aside />

    </div>
  );
}

export default Main;
