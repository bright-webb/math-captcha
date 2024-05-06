import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { renderExpression } from './script.js'

document.querySelector('#app').innerHTML = `
  <div class="container">
      <div class="row d-flex justify-content-center vh-100 align-items-center">
        <div class="col-md-6">
            <h4 class="text-center">Verify you're human</h4><hr/>
            <br/ >
            <p class="text-center">Verify you're human by solving this simple math problem below</p>
            <div id="math-expression"></div>
            <a href="javascript:void(0)" id="skip" style="text-decoration: none">Next Problem</a>
            <form>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Answer" />
              </div>
              <br />
              <div class="form-group">
                <button type="submit" class="btn btn-primary btn-block" style="width: 100%">Submit</button>
              </div>      
              </div>
            </form>
            
        </div>
      </div>
  </div>
`

renderExpression('math-expression');
const skipButton = document.getElementById('skip');
skipButton.addEventListener('click', () => {
  renderExpression('math-expression');
})

