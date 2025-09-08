import { useState } from 'react'
import './App.css'
import 'react-bootstrap/Accordion'


function Accordion() {
  const [openItem, setOpenItem] = useState(0) // First item open by default


  const accordionContent = [
    {
      title: "Accordion Item #1",
      content: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the accordion-body, though the transition does limit overflow."
    },
    {
      title: "Accordion Item #2", 
      content: "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the accordion-body, though the transition does limit overflow."
    },
    {
      title: "Accordion Item #3",
      content: "This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the accordion-body, though the transition does limit overflow."
    }
  ]

  return (
  <div className="accordion">
    {accordionContent.map((item, index) => (
      <div key={index} className="accordion-item">
        <h2 className="accordion-header">
          <button 
            className={`accordion-button ${openItem !== index ? 'collapsed' : ''}`}
            onClick={() => setOpenItem(openItem === index ? -1 : index)}
          >
            {item.title}
            <span className="accordion-icon">▼</span>
          </button>
        </h2>
        <div className={`accordion-collapse ${openItem === index ? 'show' : ''}`}>
          <div className="accordion-body">
            <strong>{item.content.split('.')[0]}.</strong>
            {item.content.substring(item.content.indexOf('.') + 1)}
          </div>
        </div>
      </div>
    ))}
  </div>
)
}


export default Accordion
