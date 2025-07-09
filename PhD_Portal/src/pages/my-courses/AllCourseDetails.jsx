import { Pie, PieChart, Cell } from "recharts";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { courses as allCourses } from "../../data/courses";

const COLORS = ["#B7202E", "#f2f2f2"];

const AllCourseDetails = () => {
  const navigate = useNavigate();
  const { courseId } = useParams();

  const course = allCourses.find((c) => c.id === courseId) || allCourses[0];
  const {
    name,
    modules,
    faculty,
    announcements,
    progress,
    assignments,
  } = course;

  return (
    <div className="max-w-screen-xl mx-auto w-full p-6 space-y-8">
      <h2 className="text-[22px] font-bold text-black border-b border-red-600 pb-2">
        {name}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[600px] overflow-y-auto pr-2">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg shadow p-4 flex flex-col justify-between h-[200px]"
            >
              <div>
                <h3 className="text-[16px] font-bold text-black mb-2">
                  {module.title}
                </h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {module.resources.map((res, i) => (
                    <li key={i}>
                      {res.title}{" "}
                      <a href={res.url} className="text-blue-600 underline">
                        {res.type === "video" ? "Watch" : "Download"}
                      </a>
                    </li>
                  ))}

                </ul>
              </div>
              <div className="flex justify-end mt-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-black text-[13px] cursor-pointer"
                  onClick={() => navigate(`/student/courses/details/${course.id}/learning-guides`)}

                >
                  More
                </Button>
              </div>
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
            <h3 className="text-[16px] font-bold text-black mb-2">Announcements</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              {announcements.map((announcement, index) => (
                <li key={index}>{announcement}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border rounded-lg shadow p-4 flex flex-col items-center">
          <h3 className="text-[16px] font-bold text-black mb-4">Progress</h3>
          <div className="flex justify-center gap-8">
            <div className="flex flex-col items-center">
              <PieChart width={120} height={120}>
                <Pie
                  data={[{ name: "Completed", value: progress.courseCompletion }, { name: "Remaining", value: 100 - progress.courseCompletion }]}
                  innerRadius={40}
                  outerRadius={55}
                  startAngle={90}
                  endAngle={-270}
                  paddingAngle={5}
                  dataKey="value"
                  strokeWidth={5}
                  labelLine={false}
                  label={({ cx, cy }) => (
                    <text
                      x={cx}
                      y={cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="text-2xl font-bold fill-red-600"
                    >
                      {progress.courseCompletion}%
                    </text>
                  )}
                >
                  <Cell fill="#B7202E" />
                  <Cell fill="#f2f2f2" />
                </Pie>
              </PieChart>
              <p className="text-sm text-gray-600 mt-2">Course Completed</p>
            </div>

            <div className="flex flex-col items-center">
              <PieChart width={120} height={120}>
                <Pie
                  data={[{ name: "Attended", value: progress.lectureAttendance }, { name: "Remaining", value: 100 - progress.lectureAttendance }]}
                  innerRadius={40}
                  outerRadius={55}
                  startAngle={90}
                  endAngle={-270}
                  paddingAngle={5}
                  dataKey="value"
                  strokeWidth={5}
                  labelLine={false}
                  label={({ cx, cy }) => (
                    <text
                      x={cx}
                      y={cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="text-2xl font-bold fill-green-600"
                    >
                      {progress.lectureAttendance}%
                    </text>
                  )}
                >
                  <Cell fill="#16a34a" />
                  <Cell fill="#f2f2f2" />
                </Pie>
              </PieChart>
              <p className="text-sm text-gray-600 mt-2">Lectures Attended</p>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg shadow p-4">
          <h3 className="text-[16px] font-bold text-black mb-2">Assignments</h3>
          <ul className="text-sm space-y-2">
            {assignments.map((assignment, i) => (
              <li key={i}>
                {assignment.title} - <span className="text-red-600 font-semibold">{assignment.status}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white border rounded-lg shadow p-4 md:hidden">
          <h3 className="text-[16px] font-bold text-black mb-2">Announcements</h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            {announcements.map((announcement, index) => (
              <li key={index}>{announcement}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AllCourseDetails;