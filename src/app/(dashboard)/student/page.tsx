import EventCalender from "@/components/EventCalender";
import Announcements from "@/components/Announcements";
import BigCalenderContainer from "@/components/BigCalenderContainer";
import prisma from "@/lib/prisma";
import { currentUserId } from "@/lib/utils";

const StudentPage = async () => {
  const classItem = await prisma.class.findMany({
    where: {
      students: { some: { id: currentUserId! } },
    },
  });
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      {/* Left */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule (4S)</h1>
          <BigCalenderContainer type="classId" id={classItem[0]?.id} />
        </div>
      </div>
      {/* Right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <EventCalender />
        <Announcements />
      </div>
    </div>
  );
};

export default StudentPage;
