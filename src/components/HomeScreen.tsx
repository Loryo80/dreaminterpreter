import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { RouteProp } from '@react-navigation/core';

type HomeScreenProps = {
    route: RouteProp<MainStackParamList, "Home">,
    navigation: FrameNavigationProp<MainStackParamList, "Home">,
};

export function HomeScreen({ navigation }: HomeScreenProps) {
    return (
        <flexboxLayout className="flex-1 bg-slate-900">
            <stackLayout className="p-6 w-full">
                <label className="text-3xl font-bold text-white text-center mb-8">
                    تفسير الأحلام
                </label>
                
                <button
                    className="bg-slate-700 p-4 rounded-lg mb-4 w-full"
                    onTap={() => navigation.navigate("DreamInput")}
                >
                    <label className="text-white text-lg text-center">
                        تفسير حلم جديد
                    </label>
                </button>

                <button
                    className="bg-slate-700 p-4 rounded-lg mb-4 w-full"
                    onTap={() => navigation.navigate("Dictionary")}
                >
                    <label className="text-white text-lg text-center">
                        قاموس الرموز
                    </label>
                </button>

                <button
                    className="bg-slate-700 p-4 rounded-lg mb-4 w-full"
                    onTap={() => navigation.navigate("Resources")}
                >
                    <label className="text-white text-lg text-center">
                        مصادر إسلامية
                    </label>
                </button>
            </stackLayout>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
    }
});