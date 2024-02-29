import Newtasks from "./Newtasks";

export default function Tasks({tasks,onAdd,onDelete})
{
    return <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">tasks</h2>
        <Newtasks onAdd={onAdd}  />
        {tasks.length===0 && <p className="text-stone-800 my-4">This project does not have any Task yet</p>}
        {tasks.length>0 && <ul className="p-4 mt-8 rounder-md bg-stone-100">
            {tasks.map((task)=><li key={task.id} className="flex justify-between my-4 "><span>{task.text}</span>
            <button onClick={()=>onDelete(task.id)} className="text-stone-700 hover:text-red-500">Clear</button></li>)}
        </ul>

        }
    </section>
}