import { useSelector } from "react-redux";
import CourseCarousel from "../../components/custom/carousel/CourseCarousel";
import AssignmentCarousel from "@/components/custom/carousel/AssignmentCarousel";
import ProgressChart from "../../components/custom/charts/ProgressChart";
import { courses as allCourses } from "../../data/courses";


export default function StudentDashboard() {
  const {
    studentInfo,
    // Replace unused selectors below if not implemented yet
    schedule,
  } = useSelector((state) => state.studentDashboard);

  // Simulate enrolled courses (in future: filter based on user)
  const studentCourses = allCourses;

  // Collect assignments from all enrolled courses
  const studentAssignments = studentCourses.flatMap((course) =>
    course.assignments.map((assignment) => ({
      ...assignment,
      course: course.name,
      faculty: course.faculty.name,
    }))
  );

  // Merge all announcements from courses
  const allAnnouncements = studentCourses.flatMap((course) => course.announcements);

  // Dummy aggregate progress — could average or pick primary course later
  const progress = {
    completion: Math.round(
      studentCourses.reduce((acc, c) => acc + (c.progress?.courseCompletion || 0), 0) / studentCourses.length
    ),
    attendance: Math.round(
      studentCourses.reduce((acc, c) => acc + (c.progress?.lectureAttendance || 0), 0) / studentCourses.length
    ),
  };

  return (
    <div className="flex">
      <main className="flex-1 p-6 space-y-10">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">
            Hello, <span className="text-red-500">{studentInfo?.name || "Student"}</span>!
          </h1>
        </div>

        <div className="grid grid-cols-12 gap-4 p-4 min-h-screen bg-gray-50">
          {/* My Courses */}
          <div className="col-span-12 lg:col-span-8 space-y-2">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-semibold mb-2">My Courses</h2>
              <CourseCarousel courses={studentCourses.map(course => ({
                title: course.name,
                sem: course.semester,
                faculty: course.faculty.name,
                credits: course.credits,
                schedule: "Mon-Wed-Fri 9-10am", // placeholder
              }))} />
            </div>

            {/* Assignments */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-semibold mb-2">Assignments</h2>
              <AssignmentCarousel assignments={studentAssignments} />
            </div>

            {/* Progress */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-semibold mb-2">Progress</h2>
              <div className="bg-gray-100 p-3 rounded shadow">
                <ProgressChart
                  completion={progress.completion}
                  attendance={progress.attendance}
                />
              </div>
            </div>
          </div>

          {/* Announcements + Resources */}
          <div className="col-span-12 lg:col-span-4 grid grid-rows-2 gap-4">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-semibold mb-2">Announcements</h2>
              <ul className="list-disc list-inside space-y-1 text-blue-600">
                {allAnnouncements.slice(0, 5).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-semibold mb-2">Resources</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Visit E-Library</li>
                <li>Updated Syllabus</li>
                <li>Course Resources</li>
                <li>Past Question Papers</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
