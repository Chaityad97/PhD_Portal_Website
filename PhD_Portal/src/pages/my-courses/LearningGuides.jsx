import { useParams } from "react-router-dom";
import { courses } from "@/data/courses";

const LearningGuides = () => {
  const { id } = useParams(); // Grab course ID from route param (e.g., /student/courses/details/os/learning-guides)

  const course = courses.find((c) => c.id === id);

  if (!course) return <div className="p-6">Course not found.</div>;

  const { name, faculty, learningGuides, announcements } = course;

  return (
    <div className="max-w-screen-xl mx-auto w-full p-6 space-y-6">
      <h2 className="text-[22px] font-bold text-black border-b border-red-600 pb-2">
        {name} - Learning Guides
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 flex flex-col space-y-4">
          {learningGuides.map((module, index) => (
            <div
              key={index}
              className="bg-white border rounded shadow p-4 flex flex-col space-y-1"
            >
              <h3 className="text-[16px] font-bold text-black mb-2">
                {module.title}
              </h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                {module.resources.map((resource, resIndex) => (
                  <li key={resIndex}>{resource}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <div className="bg-white border rounded-lg shadow p-4">
            <h3 className="text-[16px] font-bold text-black mb-2">Faculty</h3>
            <p className="text-sm mb-1">{faculty.name}</p>
            <p className="text-sm text-gray-600 mb-3">{faculty.email}</p>
            <textarea
              placeholder="Write to faculty..."
              className="w-full p-2 border rounded text-sm mb-2"
            ></textarea>
            <button className="w-full py-1 cursor-pointer bg-[#B7202E] text-white text-sm rounded">
              Send
            </button>
          </div>

          <div className="bg-white border rounded-lg shadow p-4">
            <h3 className="text-[16px] font-bold text-black mb-2">
              Announcements
            </h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              {announcements.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningGuides;
