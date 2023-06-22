import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import TextInput from "./TextInput";
import { useDebouncedCallback } from "use-debounce";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import theme from "../utils/theme";
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  searchBar: {
    overflow: "hidden",
    borderRadius: 2,
    flexDirection: "row",
    backgroundColor: theme.backgroundColor.item,
    alignItems: "center",
  },
});

const sortReturner = (sort) => {
  switch (sort) {
    case "latest":
      return {
        orderBy: "CREATED_AT",
        orderDirection: "ASC",
      };
    case "highest":
      return {
        orderBy: "RATING_AVERAGE",
        orderDirection: "DESC",
      };
    case "lowest":
      return {
        orderBy: "RATING_AVERAGE",
        orderDirection: "ASC",
      };
    default:
      break;
  }
};

const SortPicker = ({ selectedValue, onValueChange }) => {
  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={(itemValue) => onValueChange(itemValue)}
    >
      <Picker.Item label="Latest repositories" value="latest" />
      <Picker.Item label="Highest rated repositories" value="highest" />
      <Picker.Item label="Lowest rated repositories" value="lowest" />
    </Picker>
  );
};

const SearchBar = ({ onchange }) => {
  return (
    <View style={styles.searchBar}>
      <MaterialCommunityIcons name="magnify" size={24} color="black" />
      <TextInput
        placeholder="Search Repo name"
        onChangeText={(text) => onchange(text)}
      ></TextInput>
    </View>
  );
};

export const RepositoryListContainer = ({ repositories, endReached }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={endReached}
      onEndReachedThreshold={0.1}
      renderItem={({ item }) => <RepositoryItem repo={item}></RepositoryItem>}
      keyExtractor={(repo) => repo.id}
    />
  );
};

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const [sorter, setSorter] = useState("latest");
  const [search, setSearch] = useState("");
  const { repositories, fetchMore } = useRepositories({
    ...sortReturner(sorter),
    searchKeyword: search,
    first: 7,
  });

  const endReached = () => {
    try {
      console.log("END REACHED");
      fetchMore();
    } catch (e) {
      console.log(e);
    }
  };
  const debounced = useDebouncedCallback((value) => {
    setSearch(value);
  }, 500);

  return (
    <View style={{ flex: 1 }}>
      <SearchBar onchange={debounced}></SearchBar>
      <SortPicker selectedValue={sorter} onValueChange={setSorter}></SortPicker>

      <RepositoryListContainer
        endReached={endReached}
        repositories={repositories}
      />
    </View>
  );
};

export default RepositoryList;
