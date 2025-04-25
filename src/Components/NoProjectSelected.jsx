import noProjectsImg from "../assets/no-projects.png";
import Button from "./Button.jsx";
export default function NoProjectSelected({onStartAddProject}) {
  return (
    <div className="w-2/3 mt-24 text-center">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={noProjectsImg}
        alt="An empty task list"
      />
      <h2 className="text-xl font-bold text-stone-500 mt-4 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Please select a project from the sidebar or create a new one.
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
}
