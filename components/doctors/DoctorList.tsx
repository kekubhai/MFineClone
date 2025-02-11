import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, TextInput, Modal, Dimensions } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { doctors } from './types';

const { width } = Dimensions.get('window');

const DoctorCard = ({ doctor }: { doctor: any }) => {
  return (
    <Card style={{ margin: 10, padding: 10, backgroundColor: '#fff' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={{ uri: doctor.image }} style={{ width: 80, height: 80, borderRadius: 40 }} />
        <View style={{ marginLeft: 10, flex: 1 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#000' }}>{doctor.name}</Text>
          <Text style={{ color: '#337ab7' }}>{doctor.specialization}</Text>
          <Text style={{ color: '#337ab7' }}>{doctor.experience}</Text>
          <Text>Languages: {doctor.languages.join(', ')}</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#000' }}>₹{doctor.fee}</Text>
        </View>
      </View>
      <View style={{ 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginTop: 10
      }}>
        <TouchableOpacity 
          style={{ 
            backgroundColor: '#add8e6', 
            padding: 10, 
            borderRadius: 5,
            flex: 0.48
          }}
        >
          <Text style={{ color: '#337ab7', textAlign: 'center' }}>Know More</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={{ 
            backgroundColor: '#ffcccb', 
            padding: 10, 
            borderRadius: 5,
            flex: 0.48
          }}
        >
          <Text style={{ color: '#fff', textAlign: 'center' }}>Consult Now</Text>
        </TouchableOpacity>
      </View>
    </Card>
  );
};

const BottomTabs = ({ 
  activeTab, 
  onTabChange 
}: { 
  activeTab: 'filter' | 'sort'; 
  onTabChange: (tab: 'filter' | 'sort') => void;
}) => {
  return (
    <View style={{
      flexDirection: 'row',
      position: 'absolute',
      bottom: 0,
      width: width,
      backgroundColor: '#fff',
      elevation: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: -2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    }}>
      <TouchableOpacity 
        onPress={() => onTabChange('filter')}
        style={{
          flex: 1,
          padding: 16,
          alignItems: 'center',
          backgroundColor: activeTab === 'filter' ? '#e6f3ff' : '#fff',
          borderTopWidth: activeTab === 'filter' ? 2 : 0,
          borderTopColor: '#337ab7',
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="filter" size={24} color={activeTab === 'filter' ? '#337ab7' : 'gray'} style={{ marginRight: 8 }} />
          <Text style={{ color: activeTab === 'filter' ? '#337ab7' : 'gray' }}>Filter</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => onTabChange('sort')}
        style={{
          flex: 1,
          padding: 16,
          alignItems: 'center',
          backgroundColor: activeTab === 'sort' ? '#e6f3ff' : '#fff',
          borderTopWidth: activeTab === 'sort' ? 2 : 0,
          borderTopColor: '#337ab7',
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="sort" size={24} color={activeTab === 'sort' ? '#337ab7' : 'gray'} style={{ marginRight: 8 }} />
          <Text style={{ color: activeTab === 'sort' ? '#337ab7' : 'gray' }}>Sort</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const TabContent = ({ 
  activeTab,
  onClose 
}: { 
  activeTab: 'filter' | 'sort';
  onClose: () => void;
}) => {
  return (
    <View style={{
      position: 'absolute',
      bottom: 56, // Height of bottom tabs
      left: 0,
      right: 0,
      backgroundColor: '#fff',
      padding: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      elevation: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: -2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 15 }}>
        {activeTab === 'filter' ? 'Filter Options' : 'Sort Options'}
      </Text>
      
      {activeTab === 'filter' ? (
        // Add your filter options here
        <View>
          <Text>Filter options coming soon...</Text>
        </View>
      ) : (
        // Add your sort options here
        <View>
          <Text>Sort options coming soon...</Text>
        </View>
      )}

      <TouchableOpacity 
        onPress={onClose}
        style={{ 
          backgroundColor: '#337ab7',
          padding: 10,
          borderRadius: 5,
          marginTop: 20
        }}
      >
        <Text style={{ color: '#fff', textAlign: 'center' }}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

const DoctorListScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [activeTab, setActiveTab] = useState<'filter' | 'sort' | null>(null);
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  useEffect(() => {
    const filtered = doctors.filter(doctor => 
      doctor.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredDoctors(filtered);
  }, [searchText]);

  const handleTabChange = (tab: 'filter' | 'sort') => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ padding: 10, marginBottom: 60 }}>
        <View style={{ 
          flexDirection: 'row', 
          alignItems: 'center', 
          marginBottom: 10,
          backgroundColor: '#f5f5f5',
          borderRadius: 10,
          padding: 5
        }}>
          <Icon name="magnify" size={24} color="gray" style={{ marginHorizontal: 5 }} />
          <TextInput
            placeholder="Search for doctors"
            value={searchText}
            onChangeText={setSearchText}
            style={{ 
              flex: 1,
              padding: 8,
            }}
          />
        </View>

        <FlatList
          data={filteredDoctors}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <DoctorCard doctor={item} />}
        />
      </View>

      {activeTab && (
        <TabContent 
          activeTab={activeTab}
          onClose={() => setActiveTab(null)}
        />
      )}

      <BottomTabs 
        activeTab={activeTab || 'filter'}
        onTabChange={handleTabChange}
      />
    </View>
  );
};

export default DoctorListScreen;