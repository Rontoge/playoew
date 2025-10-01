import { StyleSheet, Text, View, FlatList, TouchableOpacity ,Image} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const GameSelection = () => {
  const inserts = useSafeAreaInsets();
  const navigation = useNavigation();
  const sports = [
  {
    id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    sport: "Badminton",
    imageUrl: "https://images.pexels.com/photos/6742704/pexels-photo-6742704.jpeg"
  },
  {
    id: "b2c3d4e5-f678-9012-bcde-f23456789012",
    sport: "Pickleball",
    imageUrl: "https://images.pexels.com/photos/29665446/pexels-photo-29665446.jpeg"
  },
  {
    id: "c3d4e5f6-7890-1234-cdef-345678901234",
    sport: "Yoga",
    imageUrl: "https://images.pexels.com/photos/917732/pexels-photo-917732.jpeg"
  },
  {
    id: "d4e5f6g7-8901-2345-def0-456789012345",
    sport: "Cricket",
    imageUrl: "https://images.pexels.com/photos/3602833/pexels-photo-3602833.jpeg"
  },
  {
    id: "e5f6g7h8-9012-3456-ef01-567890123456",
    sport: "Basketball",
    imageUrl: "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg"
  },
  {
    id: "f6g7h8i9-0123-4567-f012-678901234567",
    sport: "Football",
    imageUrl: "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg"
  },
  {
    id: "g7h8i9j0-1234-5678-0123-789012345678",
    sport: "Tennis",
    imageUrl: "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg"
  }
];

const [localSelected, setLocalSelected] = useState<string[]>([]);

const toogleSelection = (id: string) =>{
  setLocalSelected((prev) =>prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id])
}


const handleDebut = () =>{
  navigation.navigate("SignUp" as never)
}

const renderItem =  ({item} :any) =>{
  const isSelected = localSelected.includes(item.id) ;// You can manage selected state as per your requirement

  return(
    <TouchableOpacity onPress={() => toogleSelection(item.id)} className="mb-6 mr-3 w-[48%] rounded-xl overflow-hidden">
      <View
      className={`rounded-xl overflow-hidden ${isSelected ? 'border-4 border-green-600' : 'border border-gray-200' } bg-gray-100`}
      >
        <Image resizeMode ='cover'  className="w-full h-32" source={{uri:item?.imageUrl}}/>

        {isSelected && <View className="absolute insert-0 bg-black/30"/>}
      </View>
      <Text       
      className={`text-center text-base ${isSelected ? 'text-green-600' : 'text-black' } bg-gray-100`}
>{item?.sport}</Text>
    </TouchableOpacity>
  )
}

  return (
    <View
      className="flex-1 bg-white px-4 pt-2"
      style={{ paddingTop: inserts.top + 12 }}
    >
      <Text className="text-2xl items-center font-bold mb-3 text-green-600">
        Pick Your game{" "}
      </Text>
      <Text>Select you favourite sport to get STAR</Text>

      <FlatList 
      data={sports} 
      renderItem={renderItem} 
      keyExtractor={(item) => item.id}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 100, paddingTop: 10}}
      />


      <View className="absolute bottom-6 left-6 right-6 mb-6">
        <TouchableOpacity 
        className={`py-4 rounded-xl ${localSelected.length > 0 ? "bg-green-600" :"bg-slate-600"} `}
        disabled={localSelected.length === 0}
        onPress={handleDebut}
        >
          <Text className="text-white text-center font-bold text-base">
            {localSelected.length >0 ? 'Make MY debut' : 'Select at least one sport'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GameSelection;

const styles = StyleSheet.create({});
