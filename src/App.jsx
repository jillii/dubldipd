import Window from './Window'
import Stars from './Stars.jsx'

function App() {

  return (
    <>
      <Stars />
      <div id="info">☺⚡☺❤</div>
      <div className="intro section">
          <div className="site-container">
              <Window id="presents" title="Alert" size="large" value="dubl dipd presents:   " buttons={['Okay', 'Cancel']} />
              <Window id="jill" title="Alert" size="small" value="jills birthday" buttons={['Ew']} />
              <Window 
                id="featuring" 
                title="Notice" 
                size="large" 
                list={["Robbie Dean Rhodes", "M_tt D_ll", "Orange Peel Mystic", "Andrew Eckel"]}
                />
                <Window
                  id="details"
                  title="Info"
                  tableTitle="Info"
                  table={{
                      "Date": "02 MARCH 2024",
                      "Location": "Industry Lab",
                      "Time": "6:00pm - 10:00pm",
                      "$$$": "Free",
                      "Ages": "All",
                      "BYOB": "Yes"
                  }}
                />
          </div>
      </div>

    </>
  )
}

export default App
