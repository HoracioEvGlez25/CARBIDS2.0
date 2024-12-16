import React, { useEffect, useState } from "react";
import { ScrollView, Text, VStack, Box } from "native-base";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { getAuth } from "firebase/auth";

const Meetings = () => {
  const [meetings, setMeetings] = useState([]);
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    if (!user) return;

    const fetchMeetings = async () => {
      try {
        const q = query(collection(db, "meetings"), where("userId", "==", user.uid));
        const querySnapshot = await getDocs(q);
        const meetingsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setMeetings(meetingsData);
      } catch (error) {
        console.error("Error al obtener reuniones: ", error);
      }
    };

    fetchMeetings();
  }, [user]);

  return (
    <ScrollView>
      <Box p={4}>
        <VStack space={4}>
          {meetings.length === 0 ? (
            <Text>No hay reuniones programadas.</Text>
          ) : (
            meetings.map((meeting) => (
              <Box key={meeting.id} p={4} borderWidth={1} borderRadius={8}>
                <Text>Vendedor: {meeting.vendedor}</Text>
                <Text>Comprador: {meeting.comprador}</Text>
                <Text>Zona: {meeting.zona}</Text>
                <Text>Hora: {meeting.hora}</Text>
                <Text>Coche: {meeting.coche}</Text>
              </Box>
            ))
          )}
        </VStack>
      </Box>
    </ScrollView>
  );
};

export default Meetings;
