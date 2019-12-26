import React, { ChangeEvent, useContext } from 'react'
import { AppContext } from '../../../contexts/AppContext'
import ResumeDateInput from './ResumeDateInput'

const education = (props) => {
  const { updateSection } = useContext(AppContext)

  const addEducationElement = () => {
    const educationEl = {
      degree: '',
      program: '',
      university: '',
      date: ''
    }
    updateSection(props.index, { ...props.education, elements: [...props.education.elements, educationEl]})
  }
  const updateEducationElement = (index: string, name: string, value: string) => {
    const elements = props.education.elements
      .map((edu, eduIndex) => eduIndex === index ? { ...edu, [name]: value } : edu)
    updateSection(props.index, { ...props.education, elements })
  }
  const deleteEducationElement = (index: number) => {
    const elements = props.education.elements
      .filter((edu, eduIndex) => eduIndex !== index)
    updateSection(props.index, { ...props.education, elements })
  }

  return (
    <div>
      {props.education.elements.map((education, index) => {
        return (
          <div key={index} className="content__wrapper">
            <div className="content__el content--education">
              <div className="input">
                <label>Degree</label>
                <input
                  name="degree"
                  placeholder="Degree"
                  value={education.degree}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    e.preventDefault()
                    updateEducationElement(index, e.target.name, e.target.value)
                  }}
                />
              </div>
              <div className="input">
                <label>Program</label>
                <input
                  name="program"
                  placeholder="Program"
                  value={education.program}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    e.preventDefault()
                    updateEducationElement(index, e.target.name, e.target.value)
                  }}
                />
              </div>
              <div className="input">
                <label>University</label>
                <input
                  name="university"
                  placeholder="University"
                  value={education.university}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    e.preventDefault()
                    updateEducationElement(index, e.target.name, e.target.value)
                  }}
                />
              </div>
              <ResumeDateInput
                value={education.date}
                label="Date"
                onChange={(value) => updateEducationElement(index, 'date', value)}
              />
            </div>
            <div className="content__el--actions">
              <button onClick={() => deleteEducationElement(index)}>Delete</button>
            </div>
          </div>
        )
      })}
      <button onClick={() => addEducationElement()}>Add</button>
    </div>
  )
}

export default education