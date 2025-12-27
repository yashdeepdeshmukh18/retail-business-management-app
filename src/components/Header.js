import { View, Text, StyleSheet } from "react-native";

export default function Header({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#8B1FAF",   
    borderBottomWidth: 1,         
    borderBottomColor: "#DDD",    
  },
  text: {
    fontSize: 18,                
    fontWeight: "600",
    color: "#FFFFFF",            
    letterSpacing: 0.3,
    textAlign: "center",

  },
});


