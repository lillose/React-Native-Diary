import React from 'react';
import {StyleSheet} from 'react-native';
import {Calendar} from 'react-native-calendars/src/index';

function CalendarView({markedDates, selectedDate, onSelectDate}) {
    const markedSelectedDate = {
        ...markedDates,
        [selectedDate]: {
          selected: true,
          marked: markedDates[selectedDate]?.marked || false, 
        },
      };


  return (
    <Calendar
      style={styles.calendar}
      markedDates={markedSelectedDate}
      onDayPress={day => {
        onSelectDate(day.dateString);
      }}
      theme={{
        selectedDayBackgroundColor: '#333f77',
        arrowColor: '#333f77',
        dotColor: '#333f77',
        todayTextColor: '#333f77',
      }}
    />
  );
};

const styles = StyleSheet.create({
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
});

export default CalendarView;
