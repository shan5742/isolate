import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import moment from "moment";
import Footer from "./src/components/Footer";
import Achievements from "./src/components/Achievements";

const customFont = {
  "Press-Start2p": require("./assets/fonts/PressStart2P-Regular.ttf"),
};

const W = Dimensions.get("window").width;

export default function App() {
  const [isLoaded] = useFonts(customFont);
  const [pickedDate, setPickedDate] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [days, setDays] = useState("");

  function daysRemaining() {
    // user's input
    let eventDate = moment(pickedDate);
    // getting current date
    let today = moment();
    let remainingDays = today.diff(eventDate, "days");
    setDays(remainingDays);
    return remainingDays;
  }

  function showDatePicker() {
    setDatePickerVisibility(true);
  }

  function hideDatePicker() {
    setDatePickerVisibility(false);
  }

  function handleConfirm(date) {
    hideDatePicker();
    setPickedDate(date);
  }

  if (!isLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Are You a Quarantine Pro?`}</Text>
      <TouchableWithoutFeedback onPress={showDatePicker}>
        <View style={styles.pickerContainer}>
          <Fontisto style={styles.icon} name="calendar" size={48} />
          <Text style={styles.pickerText}>{`Tap here to\nselect a date`}</Text>
        </View>
      </TouchableWithoutFeedback>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        display="spinner"
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        headerTextIOS="When did you start isolating?"
        textColor="white"
      />
      <View style={styles.showDateContainer}>
        <Text style={styles.showDateText}>
          You started isolating on{" "}
          {pickedDate && (
            <Text style={styles.showDateText}>
              {moment(pickedDate).format("YYYY-MM-DD")}.
            </Text>
          )}
        </Text>
        <TouchableWithoutFeedback onPress={daysRemaining}>
          <View style={styles.evaluateButtonContainer}>
            <Text style={styles.evaluateButtonText}>Check your level</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.resultContainer}>
        <Achievements days={days} />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffbd12",
  },
  title: {
    fontFamily: "Press-Start2p",
    fontSize: 24,
    marginTop: 80,
    paddingHorizontal: 20,
    lineHeight: 30,
  },
  pickerContainer: {
    marginTop: 20,
    backgroundColor: "#00c6ae",
    width: W / 1.2,
    height: W / 4,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderBottomWidth: 5,
    borderBottomColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  pickerText: {
    fontFamily: "Press-Start2p",
    fontSize: 14,
    paddingHorizontal: 10,
    lineHeight: 20,
  },
  icon: {
    color: "#000",
  },
  showDateContainer: {
    marginTop: 20,
    backgroundColor: "#F95A2C",
    width: W / 1.2,
    height: W / 2,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",

    alignItems: "center",
  },
  showDateText: {
    fontFamily: "Press-Start2p",
    fontSize: 14,
    padding: 10,
    marginTop: 20,
    lineHeight: 20,
  },
  evaluateButtonContainer: {
    marginTop: 20,
    backgroundColor: "#1947E5",
    width: W / 1.4,
    height: W / 6,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderBottomWidth: 5,
    borderBottomColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  evaluateButtonText: {
    color: "#fff",
    fontFamily: "Press-Start2p",
    fontSize: 14,
    paddingHorizontal: 10,
    lineHeight: 20,
  },
  resultContainer: {
    marginTop: 20,
    backgroundColor: "#FF89BB",
    width: W / 1.2,
    height: W / 2,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
});
