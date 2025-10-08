import { StyleSheet, Text, TouchableOpacity, View ,Image, ActivityIndicator} from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';
import { useOAuth } from '@clerk/clerk-expo';
import { set } from 'mongoose';



const useWarmUpBrowser = () => {
    useEffect (() =>{
            void WebBrowser.warmUpAsync();
            return() =>{
                void WebBrowser.coolDownAsync();
            }
    },[])
}

const GoogleSignIn = () => {

    const {startOAuthFlow} = useOAuth({strategy: 'oauth_google'});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useWarmUpBrowser();

    const onGoogleSignInPress = useCallback(async() =>{
        setLoading(true);
        setError('');
        
        try {
            const {createdSessionId , setActive} = await startOAuthFlow({
                redirectUrl: Linking.createURL('/oauth-callback'),
            });

            if(createdSessionId){
                await setActive!({session: createdSessionId});
            }else{
                console.error("GOOGLE SIGN IN NOT COMPLETE");
            }
            
        } catch (err:any) {
            console.log("GOOGLE SIGN IN ERROR", err);
        }finally{
            setLoading(false);
        }

    },[startOAuthFlow]);
  return (
    <View className='w-full mt-4'>
        {error && <Text className='text-red-500 text-sm text-center mb-3'>{error}</Text>}
         <TouchableOpacity  disabled={loading} onPress={onGoogleSignInPress} className='w-full border border-gray-300 rounded-3xl py-3 mt-3 flex-row justify-center items-center'>
                    {loading ? (
                        <ActivityIndicator color='#FF5722' />
                    ) : (
                        <>
                            <Image source={{uri:'https://www.google.com/favicon.ico'}} className='w-5 h-5 mr-2 '/>
                            <Text className='text-gray-900 text-base font-semibold'>Sign in with Google</Text>
                        </>
                    )}
         </TouchableOpacity>
    </View>
  )
}

export default GoogleSignIn

const styles = StyleSheet.create({})