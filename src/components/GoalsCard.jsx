/* eslint-disable react/prop-types */
export default function GoalsCard({ title, description }) {
  return (
    <div className="bg-primary2 rounded-xl p-6 lg:w-1/3 w-full">
      <h2 className="text-2xl text-secondary font-recoleta">{title}</h2>
      <p className="text-base mt-2 text-white">{description}</p>
    </div>
  );
}
