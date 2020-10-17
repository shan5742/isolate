import React from "react";
import { Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

export default function Achievements({ days }) {
  if (days > 1 && days < 5) {
    return (
      <>
        <MaterialCommunityIcons name="guy-fawkes-mask" color="#000" size={54} />
        <Text style={styles.resultText}>
          Quarantine Noob. Don't forget to wear a mask. Keep self-isolating.
        </Text>
      </>
    );
  } else if (days >= 5 && days <= 7) {
    return (
      <>
        <MaterialCommunityIcons name="glass-wine" color="#000" size={54} />
        <Text style={styles.resultText}>
          Quarantine Connoisseur. Welcome to the (literal) dark side!
        </Text>
      </>
    );
  } else if (days >= 8 && days <= 15) {
    return (
      <>
        <MaterialCommunityIcons
          name="seat-legroom-reduced"
          color="#000"
          size={54}
        />
        <Text style={styles.resultText}>
          Quarantine Proficient. AKA “What is pants?”
        </Text>
      </>
    );
  } else if (days >= 16 && days <= 22) {
    return (
      <>
        <MaterialCommunityIcons
          name="star-circle-outline"
          color="#000"
          size={54}
        />
        <Text style={styles.resultText}>
          Quarantine Veteran. #StayHome became your life motto.
        </Text>
      </>
    );
  } else if (days >= 23) {
    return (
      <>
        <FontAwesome name="paint-brush" color="#000" size={54} />
        <Text style={styles.resultText}>
          THE ULTIMATE QUARANTINE PRO! You are part of the solution - thank you!
        </Text>
      </>
    );
  } else
    return (
      <Text style={styles.resultText}>Your level will be shown here.</Text>
    );
}

const styles = StyleSheet.create({
  resultText: {
    color: "#fff",
    fontFamily: "Press-Start2p",
    fontSize: 16,
    padding: 15,
    lineHeight: 20,
  },
});
