"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Calender from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalender = () => {
  const [value, onChange] = useState<Value>(new Date());
  const router = useRouter();
  useEffect(() => {
    router.push(`?date=${value}`);
    // router.push(`?date=${value?.toLocalDateString("en-In")}`);
  }, [value, router]);
  return <Calender onChange={onChange} value={value} />;
};

export default EventCalender;
