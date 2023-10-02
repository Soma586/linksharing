import { useState } from "react"
import './styles.scss'
import dragIcon from '../../assets/images/icon-drag-and-drop.svg'
import _ from 'lodash'
import Select from "react-select"
import gitIcon from '../../assets/images/icon-github.svg'
import gitLabIcon from '../../assets/images/icon-gitlab.svg'
import facebookIcon from '../../assets/images/icon-facebook.svg'
import devtoIcon from '../../assets/images/icon-devto.svg'
import linkedinIcon from '../../assets/images/icon-linkedin.svg'
import stackoverIcon from '../../assets/images/icon-stack-overflow.svg'
import twitchIcon from '../../assets/images/icon-twitch.svg'
import twitterIcon from '../../assets/images/icon-twitter.svg'
import youtubeIcon from '../../assets/images/icon-youtube.svg'
import freecodeIcon from '../../assets/images/icon-freecodecamp.svg'
import codepenIcon from '../../assets/images/icon-codepen.svg'
import codewarsIcon from '../../assets/images/icon-codewars.svg'
import hashnodeIcon from '../../assets/images/icon-hashnode.svg'


const Link = () => {


    const media = [
        {
            name: 'Github',
            icon: gitIcon
        },
        {
            name: 'Twitter',
            icon: twitterIcon
        },
        {
            name: 'Linkedin',
            icon: linkedinIcon
        },
        {
            name: 'Youtube',
            icon: youtubeIcon
        },
        {
            name: 'Facebook',
            icon: facebookIcon
        },
        {
            name: 'Twitch',
            icon: twitchIcon
        },
        {
            name: 'Dev.to',
            icon: devtoIcon
        },
        {
            name: 'CodeWars',
            icon: codewarsIcon
        },
        {
            name: 'Codepen',
            icon: codepenIcon
        },
        {
            name: "freeCodeCamp",
            icon: freecodeIcon
        },
        {
            name: "GitLab",
            icon: gitLabIcon
        },
        {
            name: 'Hashnode',
            icon: hashnodeIcon
        },
        {
            name: "Stack Overflow",
            icon: stackoverIcon
        }
    ]

    console.log(media)

    const optionList = _.map(media, (data) => {

        return (
            <option>
                <img src={data.icon}/>
                <span>{data.name}</span> 
                
            </option>
        )
       
    })

    // const optionList = media.map((data) => {

    //     return <option>{data.name} </option>
    // })


    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
      
      const MyComponent = () => (
        <Select options={options} />
      )
    return (
        <div className='linkContainer bg-lightgrey'>

            <div>
            <img src={dragIcon}/>   <span>Link #1</span>

            </div>
          
          <label>Platform</label>


<div className="select-container">
<select  className="custom-select">
            {optionList}
        </select>
</div>
        


        <p>Link</p>

        <img src={gitIcon}/>

        <input
        type="text"
        />

        <MyComponent/>
          
        </div>
    )

}

export default Link