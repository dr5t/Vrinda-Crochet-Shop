import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft, Star, Heart, ShoppingBag, Cuboid as Cube } from "lucide-react-native";
import LiquidButton from "../components/liquid/LiquidButton";
import { useNavigation } from "@react-navigation/native";

export default function ProductDetailScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Gallery */}
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1072&auto=format&fit=crop" }} 
            style={styles.image}
          />
          
          <TouchableOpacity 
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
          >
            <ArrowLeft size={24} color="#383833" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.heartBtn}>
            <Heart size={24} color="#6c6450" fill="#6c6450" />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <View style={styles.badgeRow}>
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>APPAREL</Text>
            </View>
            <View style={styles.ratingRow}>
              <Star size={14} color="#FBBF24" fill="#FBBF24" />
              <Text style={styles.ratingText}>4.9 (120)</Text>
            </View>
          </View>

          <Text style={styles.title}>Autumn Crochet Sweater</Text>
          <Text style={styles.price}>₹2,499</Text>

          <Text style={styles.description}>
            Experience ultimate comfort with our hand-knitted autumn sweater. Made from 100% organic sustainable cotton, each piece takes over 15 hours to craft. Perfect for cozy evenings and coffee dates.
          </Text>

          {/* Seller Section */}
          <View style={styles.sellerCard}>
            <View style={styles.sellerInfo}>
              <View style={styles.sellerAvatar} />
              <View>
                <Text style={styles.sellerName}>Vrindaa Official</Text>
                <Text style={styles.sellerSub}>Artisan Crafter</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.contactBtn}>
              <Text style={styles.contactText}>Message</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Sticky Bottom Actions */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.cartIconBtn}>
          <ShoppingBag size={24} color="#383833" />
        </TouchableOpacity>
        <LiquidButton 
          title="Add to Cart" 
          onPress={() => {}} 
          style={styles.addBtn}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fffcf7' },
  imageContainer: { width: '100%', height: 420, position: 'relative' },
  image: { width: '100%', height: '100%' },
  backBtn: { position: 'absolute', top: 20, left: 20, padding: 14, backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: 24, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10, shadowOffset: { width: 0, height: 4 } },
  heartBtn: { position: 'absolute', top: 20, right: 20, padding: 14, backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: 24, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10, shadowOffset: { width: 0, height: 4 } },
  content: { padding: 28, borderTopLeftRadius: 40, borderTopRightRadius: 40, backgroundColor: '#fffcf7', marginTop: -40, minHeight: 500, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 20, shadowOffset: { width: 0, height: -10 } },
  badgeRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 },
  categoryBadge: { paddingHorizontal: 14, paddingVertical: 6, backgroundColor: '#eae8e0', borderRadius: 16 },
  categoryText: { fontSize: 11, fontWeight: '800', color: '#596859', letterSpacing: 0.5 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  ratingText: { fontSize: 13, fontWeight: '700', color: '#65655e' },
  title: { fontSize: 30, fontWeight: '800', color: '#383833', marginBottom: 12, lineHeight: 36 },
  price: { fontSize: 26, fontWeight: '800', color: '#596859', marginBottom: 20 },
  description: { fontSize: 16, color: '#65655e', lineHeight: 26, marginBottom: 36, fontWeight: '500' },
  sellerCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, backgroundColor: 'white', borderRadius: 24, shadowColor: '#383833', shadowOpacity: 0.04, shadowRadius: 15, shadowOffset: { width: 0, height: 6 }, elevation: 2, borderWidth: 1, borderColor: '#eae8e0' },
  sellerInfo: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  sellerAvatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#875858' },
  sellerName: { fontSize: 16, fontWeight: '800', color: '#383833', marginBottom: 2 },
  sellerSub: { fontSize: 13, color: '#81817a', fontWeight: '500' },
  contactBtn: { paddingHorizontal: 16, paddingVertical: 10, borderRadius: 16, borderWidth: 1.5, borderColor: '#596859' },
  contactText: { fontSize: 13, fontWeight: '800', color: '#596859' },
  bottomBar: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 24, paddingVertical: 20, paddingBottom: 36, backgroundColor: '#fffcf7', borderTopWidth: 1, borderTopColor: '#eae8e0', gap: 16 },
  cartIconBtn: { padding: 18, borderRadius: 24, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#eae8e0', shadowColor: '#383833', shadowOpacity: 0.04, shadowRadius: 10, shadowOffset: { width: 0, height: 4 } },
  addBtn: { flex: 1, backgroundColor: '#596859' },
});
