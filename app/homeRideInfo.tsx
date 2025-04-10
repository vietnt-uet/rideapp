tsx
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const HomeRideInfo = () => {
  const [selectedLocation, setSelectedLocation] = useState('PTIT - 122 Hoàng Quốc Việt');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <View style={[styles.logo, { backgroundColor: '#5cb85c' }]} />
        </View>
        <Text style={styles.gecText}>6888 GEC</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          Mã xe: <Text style={styles.underlinedText}>PTIT6868</Text>
        </Text>
        <Text style={styles.infoText}>
          Vị trí hiện tại: <Text style={styles.underlinedText}>PTIT Hà Đông</Text>
        </Text>
      </View>

      <Image source={require('../assets/images/bike.png')} style={styles.bikeImage} />

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedLocation}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedLocation(itemValue)}
        >
          <Picker.Item label="Chọn nơi đến: PTIT - 122 Hoàng Quốc Việt" value="PTIT - 122 Hoàng Quốc Việt" />
          {/* Add more locations if needed */}
        </Picker>
      </View>

      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startText}>BẮT ĐẦU</Text>
      </TouchableOpacity>

      <View style={styles.bottomIconsContainer}>
        <View style={styles.iconItem}>
          <Ionicons name="time-outline" size={30} color="#5cb85c" />
          <Text style={styles.iconText}>Lịch sử</Text>
        </View>
        <View style={styles.iconItem}>
          <Ionicons name="bicycle-outline" size={30} color="#5cb85c" />
          <Text style={styles.iconText}>Đạp xe</Text>
        </View>
        <View style={styles.iconItem}>
          <Ionicons name="gift-outline" size={30} color="#5cb85c" />
          <Text style={styles.iconText}>Đổi thưởng</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  gecText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5cb85c',
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  underlinedText: {
    textDecorationLine: 'underline',
  },
  bikeImage: {
    width: width * 0.6,
    height: width * 0.6,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  pickerContainer: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#5cb85c',
    borderRadius: 5,
    marginBottom: 20,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    color: '#5cb85c',
  },
  startButton: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#5cb85c',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  startText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bottomIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  iconItem: {
    alignItems: 'center',
  },
  iconText: {
    color: '#5cb85c',
    marginTop: 5,
  },
});

export default HomeRideInfo;