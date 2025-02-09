import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface DoctorCardProps {
  name: string;
  qualifications: string;
  languages: string;
  id: string;
  image:string;
  specialist:string;
  onKnowMore: () => void;
  onConsult: () => void;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ name, qualifications, languages, id, onKnowMore, onConsult }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.qualifications}>{qualifications}</Text>
      <Text style={styles.languages}>{languages}</Text>
      <Text style={styles.id}>#{id}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onKnowMore}>
          <Text>Know more</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onConsult}>
          <Text>Consult now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  qualifications: {
    fontSize: 14,
    color: '#666',
  },
  languages: {
    fontSize: 14,
    color: '#666',
  },
  id: {
    fontSize: 14,
    color: '#666',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
});

export default DoctorCard;