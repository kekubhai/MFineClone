import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FilterSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filters</Text>
      <TouchableOpacity style={styles.filterButton}>
        <Text>Sort</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  filterButton: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
});

export default FilterSection;