import logo from './logo.svg';
import './App.css';
import LinkZone from './zones/linkZone';
//import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {useState } from 'react'

// import { motion } from 'framer-motion';
// import { usePositionReorder } from './usePositionReorder';
// import { useMeasurePosition } from './useMeasure';

import {DndContext, closestCorners} from '@dnd-kit/core';
import {SortableContext, Sor, verticalListSortingStrategy, useSortable, arrayMove} from '@dnd-kit/sortable'
import {CSS} from '@dnd-kit/utilities'




const Task = ({id, title}) => {

  const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id})


  const style = {
    transform : CSS.Transform.toString(transform),
    transition 
  }
  return (
    <div ref={setNodeRef}  {...attributes} {...listeners}  style={style} className="box">
      {title}

    </div>
  )
}

const Column = ({tasks}) => {


  //const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id})

  const display = tasks.map((item) => {

    return <Task key={item.id} id={item.id} title={item.title}/>
      
   
  })

  return (<div  className="column">

    <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
    {display}
      </SortableContext>
     
    
    </div>)
}

export default function App() {



  const containers = ['A', 'B', 'C'];

  const demo = [{id :1, title: "one piece"}, {id :2, title: "naruto"}, {id :3, title: "blue lock"}]
  const [list, setList] = useState(demo)
  const [parent, setParent] = useState(null);
  // const draggableMarkup = (
    
  // );

  // const draggableMarkup = () => (
  //      <Draggable id="draggable">Drag me</Draggable>
  // )

  const getTaskPos = id => list.findIndex(item => item.id  === id)


  const handleDragEnd = (e) => {


    const {active, over} = e

    if(active.id === over.id) return


    setList(tasks => {
      const orginalPos = getTaskPos(active.id)

      const newPos = getTaskPos(over.id)


      return arrayMove(tasks, orginalPos, newPos)
    })
  }


  return (
    // <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
  
    //  <Column tasks={list}/>

    // </DndContext>

    <div>
      <LinkZone/> 
    </div>
  );

  // function handleDragEnd(event) {
  //   const {over} = event;

  //   // If the item is dropped over a container, set it as the parent
  //   // otherwise reset the parent to `null`
  //   setParent(over ? over.id : null);
  // }
}




// const App = () => { 
 
 
 
 
//   return (
//     <div className="">

//       {/* <LinkZone/> */}
      
      
//     </div>
//   );
// }

//export default App;
