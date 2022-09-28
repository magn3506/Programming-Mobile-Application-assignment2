import { StyleSheet, View, Text, Image } from "react-native";
import MCIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function PostFooter() {
  return (
    <View style={styles.ctaContainr}>
      <View style={styles.ctaLeftCol}>
        <Ionicons
          style={[styles.ctaIcons, styles.ctaLeftCol.leftColIcon]}
          name="heart"
          size={25}
          color="black"
        />
        <Ionicons
          style={[styles.ctaIcons, styles.ctaLeftCol.leftColIcon]}
          name="chatbubble-outline"
          size={25}
          color="black"
        />
        <Ionicons
          style={[styles.ctaIcons, styles.ctaLeftCol.leftColIcon]}
          name="paper-plane-outline"
          size={25}
          color="black"
        />
      </View>
      <View style={styles.ctaMidCol}>
        <MCIcons
          style={styles.ctaIcons}
          name="dots-horizontal"
          size={25}
          color="black"
        />
      </View>
      <View style={styles.ctaRightCol}>
        <Ionicons
          style={styles.ctaIcons}
          name="ios-bookmark-outline"
          size={25}
          color="black"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ctaContainr: {
    width: "100%",
    flexDirection: "row",
    marginTop: 6,
  },
  ctaLeftCol: {
    flexDirection: "row",
    flex: 1,
    leftColIcon: {
      marginRight: 6,
    },
  },
  ctaMidCol: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  ctaRightCol: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  ctaIcons: {
    color: "grey",
  },
});
