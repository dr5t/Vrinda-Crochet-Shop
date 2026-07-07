import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft, Trash2, Plus, Minus, ShoppingBag } from "lucide-react-native";
import LiquidButton from "../components/liquid/LiquidButton";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

const PLACEHOLDER_CART = [
  { id: "1", title: "Lavender Cardigan", price: 2499, quantity: 1, image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1072&auto=format&fit=crop" },
  { id: "2", title: "Pastel Tablecloth", price: 1299, quantity: 2, image: "https://images.unsplash.com/photo-1511270339343-bc8516029822?q=80&w=1080&auto=format&fit=crop" },
];

export default function CartScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [items, setItems] = useState(PLACEHOLDER_CART);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <ArrowLeft size={24} color="#383833" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Your Cart</Text>
        <View style={{ width: 44 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {items.length === 0 ? (
          <View style={styles.emptyContainer}>
            <ShoppingBag size={64} color="#eae8e0" />
            <Text style={styles.emptyText}>Your cart is empty</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.browseBtn}>
              <Text style={styles.browseText}>Continue Shopping</Text>
            </TouchableOpacity>
          </View>
        ) : (
          items.map((item) => (
            <View key={item.id} style={styles.cartItem}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <View style={styles.itemInfo}>
                <Text style={styles.itemTitle} numberOfLines={1}>{item.title}</Text>
                <Text style={styles.itemPrice}>₹{item.price}</Text>
                <View style={styles.qtyContainer}>
                  <TouchableOpacity style={styles.qtyBtn}>
                    <Minus size={16} color="#65655e" />
                  </TouchableOpacity>
                  <Text style={styles.qtyText}>{item.quantity}</Text>
                  <TouchableOpacity style={styles.qtyBtn}>
                    <Plus size={16} color="#65655e" />
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity style={styles.deleteBtn}>
                <Trash2 size={20} color="#875858" />
              </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>

      {items.length > 0 && (
        <View style={styles.footer}>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Subtotal</Text>
            <Text style={styles.totalValue}>₹{total}</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Shipping</Text>
            <Text style={styles.totalValue}>Free</Text>
          </View>
          <View style={[styles.totalRow, styles.grandTotalRow]}>
            <Text style={styles.grandTotalLabel}>Grand Total</Text>
            <Text style={styles.grandTotalValue}>₹{total}</Text>
          </View>
          <LiquidButton title="Checkout Now" onPress={() => {}} style={styles.checkoutBtn} />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fffcf7' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 24, paddingBottom: 10 },
  backBtn: { padding: 12, backgroundColor: 'white', borderRadius: 20, shadowColor: '#383833', shadowOpacity: 0.04, shadowRadius: 10, shadowOffset: { width: 0, height: 4 }, elevation: 2, borderWidth: 1, borderColor: '#eae8e0' },
  headerTitle: { fontSize: 22, fontWeight: '800', color: '#383833' },
  scrollContent: { padding: 24, paddingBottom: 40 },
  cartItem: { flexDirection: 'row', backgroundColor: 'white', borderRadius: 24, padding: 14, marginBottom: 20, alignItems: 'center', shadowColor: '#383833', shadowOpacity: 0.04, shadowRadius: 15, shadowOffset: { width: 0, height: 6 }, elevation: 3, borderWidth: 1, borderColor: '#eae8e0' },
  itemImage: { width: 88, height: 88, borderRadius: 16, marginRight: 16 },
  itemInfo: { flex: 1 },
  itemTitle: { fontSize: 16, fontWeight: '700', color: '#383833', marginBottom: 6 },
  itemPrice: { fontSize: 18, fontWeight: '800', color: '#596859', marginBottom: 12 },
  qtyContainer: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  qtyBtn: { padding: 8, backgroundColor: '#fffcf7', borderRadius: 12, borderWidth: 1, borderColor: '#eae8e0' },
  qtyText: { fontSize: 15, fontWeight: '800', color: '#383833', minWidth: 20, textAlign: 'center' },
  deleteBtn: { padding: 12, marginLeft: 10, backgroundColor: '#fffcf7', borderRadius: 16 },
  footer: { padding: 28, backgroundColor: '#fffcf7', borderTopWidth: 1, borderTopColor: '#eae8e0' },
  totalRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  totalLabel: { fontSize: 15, color: '#65655e', fontWeight: '500' },
  totalValue: { fontSize: 16, fontWeight: '700', color: '#383833' },
  grandTotalRow: { marginTop: 8, paddingTop: 16, borderTopWidth: 1, borderTopColor: '#eae8e0', marginBottom: 24 },
  grandTotalLabel: { fontSize: 18, color: '#383833', fontWeight: '800' },
  grandTotalValue: { fontSize: 24, fontWeight: '800', color: '#596859' },
  checkoutBtn: { width: '100%', backgroundColor: '#596859' },
  emptyContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 120 },
  emptyText: { fontSize: 20, fontWeight: '700', color: '#81817a', marginTop: 24, marginBottom: 20 },
  browseBtn: { paddingHorizontal: 24, paddingVertical: 14, backgroundColor: '#596859', borderRadius: 20 },
  browseText: { fontSize: 15, fontWeight: '700', color: '#fffcf7' },
});
