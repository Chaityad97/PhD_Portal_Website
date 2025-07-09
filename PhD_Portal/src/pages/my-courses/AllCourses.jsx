import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { courses } from "../../data/courses"; // ✅ import centralized course list

const AllCourses = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <h2 className="text-[24px] font-bold text-black border-b border-[#B7202E] pb-3">
        My Courses
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {courses.map((course) => (
          <Card
            key={course.id}
            className="cursor-pointer border border-gray-200 bg-white rounded-lg shadow-sm hover:shadow-lg transition-transform duration-200 ease-in-out transform hover:scale-[1.02]"
            onClick={() => navigate(`/student/courses/details/${course.id}`)} // ✅ route includes course ID
          >
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-[160px] object-cover rounded-t-lg"
            />
            <CardHeader className="px-4 pt-4">
              <CardTitle className="text-[15px] font-semibold text-black leading-tight">
                {course.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4 text-sm text-gray-600 hover:bg-gray-50 rounded-b-lg transition-colors duration-150">
              Click to view course details
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
