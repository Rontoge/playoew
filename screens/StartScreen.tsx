import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker } from "react-native-maps";

const StartScreen = () => {
  const navigation = useNavigation();
  const mapView = useRef<MapView | null>(null);
  const users = [
    {
      image:
        "https://images.pexels.com/photos/7208625/pexels-photo-7208625.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Hey!",
    },
    {
      image:
        "https://images.pexels.com/photos/2913125/pexels-photo-2913125.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "let's play",
    },
    {
      image:
        "https://images.pexels.com/photos/1042140/pexels-photo-1042140.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "I'm always",
    },
    {
      image:
        "https://images.pexels.com/photos/4307678/pexels-photo-4307678.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "At 8pm?",
    },
    {
      image:
        "https://images.pexels.com/photos/1379031/pexels-photo-1379031.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Hey!",
    },
    {
      image:
        "https://images.pexels.com/photos/3264235/pexels-photo-3264235.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "What up?",
    },
  ];
  const BANGALORE_COORDS = {
    latitude: 12.9916987,
    longitude: 77.5945627,
  };

  // const generateCircularPoints =(center: { latitude: any; longitude: any; } ,radius: number, numPoints: number) =>{
  //     const points = [];
  //     const angleStep = (2 * Math.PI) / numPoints;
  //     for (let i=0 ; i < numPoints; i++){
  //         const angle = i * angleStep;
  //         const latitude = center.latitude + (radius / 111) * Math.cos(angle)
  //         const longitude = center.longitude + (radius / (111 * Math.cos(center.latitude))) * Math.sin(angle);
  //         points.push({latitude, longitude});
  //     }
  //     return points;
  // }
  const generateCircularPoints = (
    center: { latitude: any; longitude: any },
    radiusInKm: number,
    numPoints: number
  ) => {
    const points = [];
    const R = 6371; // Earth's radius in kilometers
    const lat = (center.latitude * Math.PI) / 180;
    const lon = (center.longitude * Math.PI) / 180;
    const angularDistance = radiusInKm / R;

    for (let i = 0; i < numPoints; i++) {
      const angle = i * ((2 * Math.PI) / numPoints);
      const latRad = Math.asin(
        Math.sin(lat) * Math.cos(angularDistance) +
          Math.cos(lat) * Math.sin(angularDistance) * Math.cos(angle)
      );
      const lonRad =
        lon +
        Math.atan2(
          Math.sin(angle) * Math.sin(angularDistance) * Math.cos(lat),
          Math.cos(angularDistance) - Math.sin(lat) * Math.sin(latRad)
        );

      points.push({
        latitude: (latRad * 180) / Math.PI,
        longitude: (lonRad * 180) / Math.PI,
      });
    }
    return points;
  };

  const circularPoints = generateCircularPoints(BANGALORE_COORDS, 5, 6);

  // useEffect(()=>{
  //     if (mapView.current) {
  //         mapView.current.fitToCoordinates(circularPoints, {
  //             edgePadding: {
  //                 top: 50,
  //                 right: 50,
  //                 bottom: 50,
  //                 left: 50,
  //             },
  //             animated: true,
  //         });
  //     }
  // }, []);

  useEffect(() => {
    if (mapView.current) {
      mapView.current.fitToCoordinates(circularPoints, {
        edgePadding: {
          top: 60,
          right: 70,
          bottom: 70,
          left: 70,
        },
        animated: true,
      });
    }
  }, [circularPoints]); // <-- Added circularPoints to the dependency array
  return (
    <SafeAreaView className="flex-1 bg-white ">
      <MapView
        ref={mapView}
        initialRegion={{
          latitude: BANGALORE_COORDS.latitude,
          longitude: BANGALORE_COORDS.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{ width: "100%", height: 400 }}
      >
        {circularPoints?.map((point, index) => {
          const user = users[index % users.length];
          return (
            <Marker key={index} coordinate={point}>
              <View className="">
                <Image
                  className="w-[70px] h-[70px] rounded-full mb-2"
                  source={{ uri: user?.image }}
                  resizeMode="cover"
                />
              </View>
              <View className="bg-white px-3 py-2 rounded-md mt-1 ">
                <Text className="text-sm font-medium text-center text-black">
                  {user?.description}
                </Text>
              </View>
            </Marker>
          );
        })}
      </MapView>
    </SafeAreaView>
  );
};

export default StartScreen;

const styles = StyleSheet.create({});
