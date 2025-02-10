// types.ts
interface ServiceCard {
  id: string;
  title: string;
 // image: any;
  discount?: string;
  price?: string;
  isNew?: boolean;
}

// ExploreScreen.tsx
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ExploreScreen: React.FC = () => {
  const services: ServiceCard[] = [
    {
      id: '1',
      title: 'Online Consultations',
    },
    {
      id: '2',
      title: 'Full Body Checkup',
    },
    {
      id: '3',
      title: 'Order Medicines',
      isNew: true,
    },
    {
      id: '4',
      title: 'Skincare',
      discount: '40% OFF',
    },
    {
      id: '5',
      title: 'X-rays, MRIs & Scans',
    },
    {
      id: '6',
      title: 'Lab Tests',
      discount: '60% OFF',
    },
  ];

  const healthChecks = [
    {
      id: '1',
      title: 'Ayursomatic Basic Health Check',
      price: '₹1,299',
      originalPrice: '₹2,999',
      tests: '76+ Tests',
    },
    {
      id: '2',
      title: 'Ayursomatic Vital Health Check',
      price: '₹1,499',
      originalPrice: '₹3,499',
      tests: '82+ Tests',
    },
  ];

  const topDoctors = [
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      rating: 4.9,
      reviews: 127,
      available: true,
    },
    {
      id: '2', 
      name: 'Dr. Michael Chen',
      specialty: 'Dermatologist',
      rating: 4.8,
      reviews: 89,
      available: true,
    }
  ];

  const healthArticles = [
    {
      id: '1',
      title: 'Tips for Better Sleep',
      category: 'Wellness',
      readTime: '5 min read'
    },
    {
      id: '2',
      title: 'Understanding Blood Pressure',
      category: 'Health',
      readTime: '7 min read'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Services Grid */}
        <View style={styles.servicesGrid}>
          {services.map((service) => (
            <TouchableOpacity
              key={service.id}
              style={styles.serviceCard}
              onPress={() => console.log(`Selected ${service.title}`)}
            >
              <View style={styles.serviceImageContainer}>
                {service.discount && (
                  <View style={styles.discountBadge}>
                    <Text style={styles.discountText}>{service.discount}</Text>
                  </View>
                )}
                {service.isNew && (
                  <View style={styles.newBadge}>
                    <Text style={styles.newBadgeText}>NEW</Text>
                  </View>
                )}
              </View>
              <Text style={styles.serviceTitle}>{service.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Cosmetic Consultation Banner */}
        <View style={styles.cosmeticBanner}>
          <View style={styles.bannerContent}>
            <Text style={styles.bannerTitle}>SKIN CONCERNS?</Text>
            <Text style={styles.bannerSubtitle}>
              Avail a FREE{'\n'}Cosmetologist{'\n'}Consult today!
            </Text>
          </View>
        </View>

        {/* Health Checks Section */}
        <View style={styles.healthChecksSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Frequently Booked Health Checks
            </Text>
            <TouchableOpacity>
              <Text style={styles.viewAllButton}>View All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {healthChecks.map((check) => (
              <TouchableOpacity key={check.id} style={styles.healthCheckCard}>
                <Text style={styles.testsCount}>{check.tests}</Text>
                <Text style={styles.healthCheckTitle}>{check.title}</Text>
                <View style={styles.priceContainer}>
                  <Text style={styles.price}>{check.price}</Text>
                  <Text style={styles.originalPrice}>{check.originalPrice}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Top Doctors Section */}
        <View style={ { backgroundColor: '#fff', padding: 16, marginTop: 16 }}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { fontSize: 18, fontWeight: '600', color: '#333' }]}>Top Doctors</Text>
            <TouchableOpacity>
              <Text style={[styles.viewAllButton, { color: '#007AFF' }]}>View All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {topDoctors.map((doctor) => (
              <TouchableOpacity key={doctor.id} style={ { 
                backgroundColor: '#fff',
                padding: 16,
                marginRight: 16,
                borderRadius: 12,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 3,
                width: 240
              }}>
                <View style={ { gap: 8 }}>
                  <Text style={[ { fontSize: 16, fontWeight: '600', color: '#333' }]}>{doctor.name}</Text>
                  <Text style={{ fontSize: 14, color: '#666' }}>{doctor.specialty}</Text>
                  <View style={[ { flexDirection: 'row', alignItems: 'center', gap: 4 }]}>
                    <Ionicons name="star" size={16} color="#FFD700" />
                    <Text style={[ { fontSize: 14, fontWeight: '500', color: '#333' }]}>{doctor.rating}</Text>
                    <Text style={[ { fontSize: 14, color: '#666' }]}>({doctor.reviews} reviews)</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Health Articles Section */}
        <View style={{ backgroundColor: '#fff', padding: 16, marginTop: 16 }}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Health Articles</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllButton}>View All</Text>
            </TouchableOpacity>
          </View>
          {healthArticles.map((article) => (
            <TouchableOpacity key={article.id} style={{ backgroundColor: '#fff', padding: 16, marginBottom: 16 }}>
              <View style={{ flexDirection: 'row', gap: 16 }}>
                <Text style={{flexDirection:'row',gap:16}}>{article.category}</Text>
                <Text style={{}}>{article.title}</Text>
                <Text style={{  flexDirection:'row',gap:16}}>{article.readTime}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  headerRight: {
    flexDirection: 'row',
    gap: 16,
  },
  headerIcon: {
    padding: 4,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
    backgroundColor: '#fff',
  },
  serviceCard: {
    width: '33.33%',
    padding: 8,
  },
  serviceImageContainer: {
    position: 'relative',
    aspectRatio: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  serviceImage: {
    width: '100%',
    height: '100%',
  },
  serviceTitle: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 4,
    color: '#333',
  },
  discountBadge: {
    position: 'absolute',
    top: 4,
    left: 4,
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  discountText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
  },
  newBadge: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: '#4CAF50',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  newBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
  },
  cosmeticBanner: {
    backgroundColor: '#E3F2FD',
    flexDirection: 'row',
    margin: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  bannerContent: {
    flex: 1,
    padding: 16,
  },
  bannerTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  bannerSubtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#333',
  },
  bannerImage: {
    width: 120,
    height: 120,
  },
  healthChecksSection: {
    padding: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  viewAllButton: {
    color: '#007AFF',
    fontSize: 14,
  },
  healthCheckCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginRight: 16,
    width: 280,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  testsCount: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: '600',
  },
  healthCheckTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 8,
    color: '#333',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  originalPrice: {
    fontSize: 14,
    color: '#666',
    textDecorationLine: 'line-through',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 12,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  activeNavText: {
    color: '#007AFF',
  },
});

export default ExploreScreen;