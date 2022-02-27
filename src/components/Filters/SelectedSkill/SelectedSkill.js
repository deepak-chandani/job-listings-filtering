import React from "react";
import "./SelectedSkill.scss"

function SelectedSkill({keyword, onRemove}){
  return (
    <div className="selected-skill">
      <span className="skill-text">{keyword}</span>
      <div className="remove-button" onClick={() => onRemove(keyword)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path fill="#FFF" fill-rule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"/></svg>
      </div>
    </div>
  )
}

export default SelectedSkill