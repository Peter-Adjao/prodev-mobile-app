import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  // 🔍 Search Section
  searchGroup: {
    marginBottom: 16,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  searchControlGroup: {
    flex: 1,
    gap: 5,
  },
  searchFormText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#7E7B7B",
  },
  searchControl: {
    borderWidth: 1,
    borderColor: "#C2C2C2",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 40,
  },
  searchButton: {
    backgroundColor: "#2B876E",
    padding: 12,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  // 🧭 Filter Section
  filterGroup: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  filterContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 72,
    height: 72,
    borderRadius: 10,
    marginRight: 10,
    overflow: "hidden",
  },

  // 🏡 Listings Section
  listingContainer: {
    marginTop: 20,
  },
  paginationContainer: {
    marginVertical: 25,
    alignItems: "center",
  },
  showMoreButton: {
    backgroundColor: "#2B876E",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  showMoreButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});
