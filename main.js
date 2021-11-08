import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'

const gitalk = new Gitalk({
    clientID: '1c9bf295e604aea0e7cf',
    clientSecret: 'ee7dfeeef186985585ab324c3b86275c78cd83ef',
    repo: 'gitalk-comments',      // The repository of store comments,
    owner: 'eric-filishtiner',
    admin: ['eric-filishtiner'],
    id: location.pathname,      // Ensure uniqueness and length less than 50
    distractionFreeMode: false  // Facebook-like distraction free mode
  })
  
  gitalk.render('gitalk-container')