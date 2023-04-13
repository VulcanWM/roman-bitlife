import {
    Text as DefaultText,
    useColorScheme,
    View as DefaultView, 
    TouchableOpacity as DefaultTouchableOpacity
  } from "react-native";
  
import Colors from "../constants/Colors";

export function useThemeColor(props, colorName) {
const theme = useColorScheme();
const colorFromProps = props[theme];

if (colorFromProps) {
    return colorFromProps;
} else {
    return Colors[theme][colorName];
}
}

export function Text(props) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

    return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor(
        { light: lightColor, dark: darkColor },
        "background"
    );

    return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function TouchableOpacity(props) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor(
        { light: lightColor, dark: darkColor },
        "background"
    );

    return <DefaultTouchableOpacity style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function Strong(props) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const color = useThemeColor({ light: Colors['light']['strong'], dark: Colors['dark']['strong'] }, "text");

    return <DefaultText style={[{ color }, {fontWeight: "bold"}, style]} {...otherProps} />;
}

export function BorderView(props) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const borderColor = useThemeColor(
        { light: Colors['light']['strong'], dark: Colors['dark']['strong'] },
        "border"
    );
    return <View style={[{ borderColor }, {borderWidth: 3, padding: 6, margin: 6, borderRadius: 20}, style]} {...otherProps} />;
}