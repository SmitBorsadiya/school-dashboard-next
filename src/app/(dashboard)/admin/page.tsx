import UserCard from "@/components/UserCard";
import Announcements from "@/components/Announcements";
import EventCalender from "@/components/EventCalender";
import AttandanceChart from "@/components/AttandanceChart";
import CountChart from "@/components/CountChart";
import FinanceChart from "@/components/FinanceChart";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* Left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* User Cards */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* Middle Chart */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* Count Chart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* Attandance Chart */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttandanceChart />
          </div>
        </div>
        {/* Bottom Chart */}
        <div className="l">
          <FinanceChart />
        </div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalender />
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;
