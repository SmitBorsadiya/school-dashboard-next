import prisma from "@/lib/prisma";
import BigCalender from "./BigCalender";
import { adjustScheduleToCurrentWeek } from "@/lib/utils";

const BigCalenderContainer = async ({
  type,
  id,
}: {
  type: "teacherId" | "classId";
  id: string | number;
}) => {
  const respData = await prisma.lesson.findMany({
    where: {
      ...(type === "teacherId"
        ? { teacherId: id as string }
        : { classId: id as string }),
    },
  });

  const data = respData.map((lesson) => ({
    title: lesson.name,
    start: lesson.startTime,
    end: lesson.endTime,
  }));

  const schedule = adjustScheduleToCurrentWeek(data);

  return <BigCalender data={schedule} />;
};

export default BigCalenderContainer;
