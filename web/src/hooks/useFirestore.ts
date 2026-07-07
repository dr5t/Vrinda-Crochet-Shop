"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, onSnapshot, query, orderBy, limit } from "firebase/firestore";

export const useFirestore = (collectionName: string) => {
  const [data, setData] = useState<Record<string, unknown>[]>([]);
  const [lastUpdate, setLastUpdate] = useState<Record<string, unknown> | null>(null);

  useEffect(() => {
    const q = query(collection(db, collectionName), orderBy("createdAt", "desc"), limit(5));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items: Record<string, unknown>[] = [];
      snapshot.forEach((doc) => items.push({ id: doc.id, ...doc.data() }));
      
      setData(prev => {
        const prevId = prev.length > 0 ? prev[0].id : null;
        const newId = items.length > 0 ? items[0].id : null;
        
        if (newId && newId !== prevId && !snapshot.metadata.hasPendingWrites) {
          setLastUpdate(items[0]);
        }
        return items;
      });
    });

    return () => unsubscribe();
  }, [collectionName]);

  return { data, lastUpdate };
};
