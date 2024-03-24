import { useState } from "react";
import _ from 'lodash'
import phoneFrame from '../../assets/images/illustration-phone-mockup.svg'
import CTA from "../../components/cta";
import illustration from '../../assets/images/illustration-empty.svg'
import Link from "../../components/Link";
///import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {DndContext, closestCorners} from '@dnd-kit/core';
import {SortableContext, Sor, verticalListSortingStrategy, useSortable, arrayMove} from '@dnd-kit/sortable'
import {CSS} from '@dnd-kit/utilities'
import './styles.scss'


const Task = ({id, title}) => {

    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id})
  
  
    const style = {
      transform : CSS.Transform.toString(transform),
      transition 
    }
    console.log(title)
    return (
      <div ref={setNodeRef}  {...attributes} {...listeners}  style={style} className="box">
        {title}
  
      </div>
    )
  }

const Column = ({tasks, handleDelete}) => {


    //const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id})
   // console.log(tasks)
  
    const display = tasks.map((item, index) => {
  
      //return <Task key={item.id} id={item.id} title={item.title}/>
        return <Link key={item.id} id={item.id} index={item.id} title={item.title} handledelete={() => handleDelete(index)}/>
     
    })
  
    return (<div  className="">
  
      <SortableContext  items={tasks} strategy={verticalListSortingStrategy}>
      {display}
        </SortableContext>
       
      
      </div>)
  }

const LinkZone = () => {


    
    const [links, setLinks] = useState([])
    const [count, setCount] = useState(1)

    console.log(links)
    const handleAdd = () => {



        setLinks([...links, {id: count}])
        setCount(prev => prev +1)
    }


    const handleDelete = (index) => {

        const filter = _.filter(links, (x, i) => {

            return index !== i
        })


        setLinks(filter)

    }


  const getTaskPos = id => links.findIndex(item => item.id  === id)


  const handleDragEnd = (e) => {

  
   
    const {active, over} = e

    if(active.id === over.id) return


    setLinks(tasks => {
      const orginalPos = getTaskPos(active.id)

      const newPos = getTaskPos(over.id)


      return arrayMove(tasks, orginalPos, newPos)
    })
  }


    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 test">

                    <img src={phoneFrame}/>
                    {/* <p>lol</p> */}

                </div>

                <div className="col-lg-6 test">

                    <h1>Customize your Links</h1>
                    <p>Add/edit/remove links below and then share all your profiles with the world!</p>


                        <div className="mb-3">
                        <CTA text="+ Add new link" handleclick={handleAdd}/>
                        </div>
                     

{/* <Link handledelete={() => handleDelete(index)} index={index}/> */}
                    {_.isEmpty(links) ?
                    (
                     <div className="getStartedDetail bg-grey">

                        <img src={illustration}/>
                        <div>
                            <h2>Let's get you started</h2>
                            <p>Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</p>
                        </div>
                       
                     </div> )
                        :
                        (

                            <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>

                          
                        <Column tasks={links} handleDelete={handleDelete}/>
                        </DndContext>
                        // <Link title={"pokemon"}/>
                        )
                    }
                </div>
                
                


            </div>

        </div>
    )
}


export default LinkZone