import ProgressCard from "./ProgressCard";

const Progress = () => (
  <div className="w-96 p-6 border border-white-100 rounded-xl shadow-sm">
    <div className="flex items-center justify-between font-medium">
      <h2 className="text-base">In Progress</h2>
      <p className="text-xs text-blue cursor-pointer">Show all</p>
    </div>
    <ProgressCard width="75" bgColor="bg-orange" taskName="First Task" />
    <ProgressCard width="55" bgColor="bg-blue-200" taskName="Second Task" />
    <ProgressCard width="65" bgColor="bg-green" taskName="Third Task" />
    <ProgressCard width="70" bgColor="bg-purple" taskName="Fourth Task" />
  </div>
);

export default Progress;