tsx
import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const HomeScanQR = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/green_bike_logo.png')} 
          style={styles.logo}
        />
      </View>

      {/* GREEN EDU Bike Text */}
      <Text style={styles.bikeText}>GREEN EDU Bike</Text>

      {/* QR Code */}
      <View style={styles.qrCodeContainer}>
        <Image
          source={require('../assets/images/qrcode.png')}
          style={styles.qrCode}
        />
      </View>

      {/* Scan QR Text */}
      <Text style={styles.scanText}>Vui lòng quét mã QR trên xe đạp để nhận xe</Text>

      {/* Bottom Icons */}
      <View style={styles.bottomIconsContainer}>
        <View style={styles.iconItem}>
          <Ionicons name="time-outline" size={24} color="black" />
          <Text style={styles.iconText}>Lịch sử</Text>
        </View>
        <View style={[styles.iconItem, styles.activeIcon]}>
          <Ionicons name="flash-outline" size={24} color="#fff" />
          <Text style={[styles.iconText, styles.activeIconText]}>Đạp xe</Text>
        </View>
        <View style={styles.iconItem}>
          <Ionicons name="storefront-outline" size={24} color="black" />
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
    justifyContent: 'flex-start',
    paddingTop: 50, 
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 50, 
    height: 50, 
    resizeMode: 'contain',
  },
  bikeText: {
    color: '#5cb85c',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  qrCodeContainer: {
    width: width * 0.7, 
    height: width * 0.7, 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  qrCode: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  scanText: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  bottomIconsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 80,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  iconItem: {
    alignItems: 'center',
  },
  iconText: {
    marginTop: 5,
  },
  activeIcon: {
    backgroundColor: '#5cb85c',
    padding: 10,
    borderRadius: 50,
  },
  activeIconText: {
    color: '#fff',
  },
});

export default HomeScanQR;