import moment from "moment";
import "moment/locale/es"; 

export const handleDate = (date: string | undefined) => {
  return moment(date).locale("es").format("LLLL");
};