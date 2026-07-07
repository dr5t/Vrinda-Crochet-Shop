import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView, Image, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Search, ShoppingCart, User as UserIcon } from "lucide-react-native";
import Blob from "../components/liquid/Blob";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

const CATEGORIES = ["All", "Home decor", "Apparel", "Accessories", "Toys"];

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [products, setProducts] = useState([
    { id: "1", title: "Autumn Sweater", price: 2499, image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1072&auto=format&fit=crop" },
    { id: "2", title: "Classic Beanie", price: 899, image: "https://images.unsplash.com/photo-1511270339343-bc8516029822?q=80&w=1080&auto=format&fit=crop" },
    { id: "3", title: "Amigurumi Bear", price: 1200, image: "https://images.unsplash.com/photo-1615486511484-92e175cca4ee?q=80&w=1080&auto=format&fit=crop" },
    { id: "4", title: "Macrame Plant Hanger", price: 650, image: "https://images.unsplash.com/photo-1599387737976-5915d3151dfb?q=80&w=1080&auto=format&fit=crop" },
  ]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>Welcome to Vrindaa 👋</Text>
            <Text style={styles.title}>Handcrafted with Intention</Text>
          </View>
          <TouchableOpacity 
            style={styles.iconBtn}
            onPress={() => navigation.navigate('Cart')}
          >
            <ShoppingCart size={22} color="#596859" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchInputWrapper}>
            <Search size={20} color="#81817a" style={styles.searchIcon} />
            <TextInput 
              placeholder="Search crochet magic..." 
              placeholderTextColor="#81817a"
              style={styles.searchInput}
            />
          </View>
        </View>

        {/* Categories */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
          {CATEGORIES.map((cat, idx) => (
            <TouchableOpacity key={idx} style={[styles.catBtn, idx === 0 && styles.activeCat]}>
              <Text style={[styles.catText, idx === 0 && styles.activeCatText]}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Featured Items */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Magic</Text>
          <TouchableOpacity><Text style={styles.viewAllText}>View all</Text></TouchableOpacity>
        </View>

        <View style={styles.productGrid}>
          {products.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              style={styles.productCard}
              onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}
              activeOpacity={0.9}
            >
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <View style={styles.productInfo}>
                <Text style={styles.productTitle} numberOfLines={1}>{item.title}</Text>
                <Text style={styles.productPrice}>₹{item.price}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fffcf7' },
  scrollContent: { padding: 24, paddingBottom: 60 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28, marginTop: 10 },
  welcomeText: { fontSize: 13, color: '#875858', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 },
  title: { fontSize: 28, fontWeight: '800', color: '#383833', lineHeight: 34, maxWidth: 220 },
  iconBtn: { padding: 14, backgroundColor: 'white', borderRadius: 24, shadowColor: '#383833', shadowOpacity: 0.08, shadowRadius: 15, shadowOffset: { width: 0, height: 5 }, elevation: 4 },
  searchContainer: { marginBottom: 32 },
  searchInputWrapper: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 20, paddingHorizontal: 20, height: 56, shadowColor: '#383833', shadowOpacity: 0.04, shadowRadius: 10, shadowOffset: { width: 0, height: 4 }, elevation: 2, borderWidth: 1, borderColor: '#eae8e0' },
  searchIcon: { marginRight: 12 },
  searchInput: { flex: 1, fontSize: 16, color: '#383833', height: '100%' },
  categoryScroll: { marginBottom: 36, marginLeft: -4, paddingLeft: 4 },
  catBtn: { paddingHorizontal: 22, paddingVertical: 12, borderRadius: 24, marginRight: 12, backgroundColor: 'white', borderWidth: 1, borderColor: '#eae8e0', shadowColor: '#000', shadowOpacity: 0.02, shadowRadius: 4, shadowOffset: { width: 0, height: 2 } },
  activeCat: { backgroundColor: '#596859', borderColor: '#596859' },
  activeCatText: { color: '#fffcf7' },
  catText: { fontWeight: '600', color: '#65655e', fontSize: 14 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 20 },
  sectionTitle: { fontSize: 22, fontWeight: '800', color: '#383833' },
  viewAllText: { fontSize: 14, fontWeight: '600', color: '#596859' },
  productGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  productCard: { width: '48%', backgroundColor: 'white', borderRadius: 24, padding: 10, marginBottom: 20, shadowColor: '#383833', shadowOpacity: 0.06, shadowRadius: 20, shadowOffset: { width: 0, height: 8 }, elevation: 4, borderWidth: 1, borderColor: 'rgba(234, 232, 224, 0.5)' },
  productImage: { width: '100%', aspectRatio: 0.85, borderRadius: 16, marginBottom: 14 },
  productInfo: { paddingHorizontal: 6, paddingBottom: 8 },
  productTitle: { fontSize: 15, fontWeight: '700', color: '#383833', marginBottom: 6 },
  productPrice: { fontSize: 15, fontWeight: '800', color: '#596859' },
});
