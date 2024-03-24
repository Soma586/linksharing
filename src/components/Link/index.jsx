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
import linkHeaderIcon from '../../assets/images/icon-links-header.svg'
import {SortableContext, Sor, verticalListSortingStrategy, useSortable, arrayMove} from '@dnd-kit/sortable'
import {CSS} from '@dnd-kit/utilities'

const Link = ({handledelete, index, id, title}) => {


    console.log(`this is an id ${id}`)
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id})

    const style = {
      transform : CSS.Transform.toString(transform),
      transition 
    }
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

    //console.log(media)


    const [value, setValue] = useState("")


    const handleValue = (e) => {

        setValue(e.target.value)

    }

    const options = _.map(media, (data) => {

        return {
            value: data.name,
            label: (<> <img src={data.icon}/> <span className="ms-2">{data.name}</span> </>)
        }
    })

  
      
      const MyComponent = () => (
        <Select options={options} />
      )
        console.log("NARuto")

return (
    <div ref={setNodeRef}   style={style}>
    <div className='linkContainer bg-lightgrey' >

<div className="mb-2 d-flex justify-content-between">
    <div>
    <img {...attributes} {...listeners}  src={dragIcon}/>   <span className="ms-2">Link #{id}</span>
    </div>

    <div onClick={handledelete}>
        <span>Remove</span>
    </div>

</div>

        <label> Platform</label>
        <MyComponent/>

        <label>Link</label>
        <div>
            <img src={linkHeaderIcon}/>
        <input onChange={handleValue} type="text"/>
        </div>
        
    </div>
    </div>
    
)

}

export default Link