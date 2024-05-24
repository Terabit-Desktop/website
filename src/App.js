import './css/styles.css';
import logo from './img/terabit.png';

function App() {
  return (
    <>
      <div class="navbar frosted">
        <div class="nav-section-logo">
          <img src={logo} alt="" />
        </div>
        <div class="nav-section-links">
          <a href="https://my.terabit.io/aff.php?aff=10" class="nav-link">Terabit</a>
          <a href="https://github.com/Terabit-Desktop/tb_app" class="nav-link">GitHub</a>
        </div>
        <div class="nav-section-cta">
          <a href="https://github.com/Terabit-Desktop/tb_app/releases/"><button class="btn-cta">Download</button></a>
        </div>
      </div>

      <div class="content frosted">
        <div class="content-hero">
          <h1>Terabit Desktop</h1>
          <p>Remote server management tools, directly on your desktop.</p>
          <a href="https://github.com/Terabit-Desktop/tb_app/releases/"><button class="btn-cta">Download</button></a>
        </div>
      </div>
    </>
  );
}

export default App;