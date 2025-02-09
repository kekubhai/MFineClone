import React from 'react';
import { ScrollView, View, Text, StyleSheet, TextInput } from 'react-native';
import DoctorCard from './DoctorCard';
import FilterSection from './DoctorFilters';
import { doctors } from './types';

const DoctorSelectionScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const filteredDoctors = doctors.filter(doctor => 
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doctor.specialist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search by doctor name or specialization"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Text style={styles.header}>Choose your Doctor</Text>
      <Text style={styles.subHeader}>Search for: hospitals</Text>
      <Text style={styles.caption}>Upto Re 250</Text>
      <Text style={styles.caption}>Upto Re 100</Text>
      <FilterSection />
      {filteredDoctors.map((doctors, index) => (
        <DoctorCard
          key={doctors.id}
          name={doctors.name}
          qualifications={doctors.qualifications}
          languages={doctors.languages}
          id={doctors.id}
          image={doctors.image}
          specialist={doctors.specialist}
          onKnowMore={() => console.log('Know more clicked')}
          onConsult={() => console.log('Consult now clicked')}
        />
      ))}
    </ScrollView>
  );
};const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subHeader: {
    fontSize: 18,
    marginBottom: 8,
  },
  caption: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
});

export default DoctorSelectionScreen;