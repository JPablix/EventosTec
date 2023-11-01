// React
import React, { useState } from "react";
import { View } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
// Components
import IconTextButton from "../../buttons/IconTextButton/IconTextButton";
// Styles
import { styles } from "./DateTimeInput.style";

// Interface
interface DateTimeInputProps {
  mode: "date" | "time";
  dateTime: Date;
  setDatetime: (date: Date) => void;
}

const DateTimeInput = ({ mode, dateTime, setDatetime }: DateTimeInputProps) => {
  const [show, setShow] = useState<boolean>(false);
  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    setDatetime(currentDate);
  };
  return (
    <View>
      <IconTextButton
        onPress={() => {
          setShow(true);
        }}
        text={mode === "date" ? "Elegir Fecha" : "Elegir Hora"}
      />
      {show && (
        <DateTimePicker
          value={dateTime}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  );
};
export default DateTimeInput;