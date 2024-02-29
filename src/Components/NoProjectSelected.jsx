import noProjects from "../assets/no-projects.png";
import Button from "./Button";
export default function NoProjectSelected({onStartAddProject})
{
    return<div className="mt-24 text-center w-2/3">
        <img src={noProjects} alt="empty" className="w-16 h-16 object-contain mx-auto"/>
        <h2 className="text-xl font-bold text-stone-500 my-4 ">No Projects selected</h2>
        <p className=" text-stone-400 mb-4">select a project</p>
        <p className="mt-8">
            <Button onClick={onStartAddProject}>create new</Button>
        </p>
    </div>
}