import React,{ useState} from 'react'
import "./langSign.css"


function LangSign() {
     const [open,setOpen] = useState(false);
  const [selected,setSelected] = useState("English");

  const handleSelect = (lang) => {
    setSelected(lang);
    setOpen(false);
  }

  return (
    <div className="langSign">
           <div className="lang custom-dropdown">
            <div className="dropdown-header" onClick={() => setOpen(!open)}>
               <i className="fas fa-globe"></i>
              <span className='langtext'>{selected}</span>
              <i className="fas fa-caret-down arrow"></i>
            </div>
            {
              open && (
                <div className="dropdown-options">
                  <p onClick={() => handleSelect("English")}>English</p>
                  <p onClick={() => handleSelect("Hindi")}>Hindi</p>
                </div>
              )
            }
           </div>
    </div>
  )
}

export default LangSign