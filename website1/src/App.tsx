
/*
  CLONE OF THE WEBSITE: https://www.wix.com/website-template/view/html/3173?originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates&tpClick=view_button&esi=1bc63322-0f14-43aa-bd77-a5755ed25b09
*/

import './App.css'


export default function App() {
  return (
    <>
      <header>
        <h1>My Flexbox Layout</h1>
      </header>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
    </nav>

    <main>
    <div class="section left-section">
            <div>
                <h2>Left Top</h2>
                <p></p>
            </div>
            <div>
                <h2>Left Bottom</h2>
                <p></p>
            </div>
        </div>

        <div class="section">
            <h2>Section 2</h2>
            <p></p>
        </div>

        <div class="section">
            <h2>Section 3</h2>
            <p></p>
        </div>
    </main>

    <footer>
        <p>&copy; 2023</p>
    </footer>
    </>
  )
}
