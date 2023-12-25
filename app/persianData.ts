import moment from "moment-jalaali";

moment.loadPersian();
const persianData = (date: Date) =>
  moment(date).format("dddd jD jMMMM، ساعت HH:mm");

export default persianData;
